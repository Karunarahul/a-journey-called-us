import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookCover } from './BookCover';
import { PageTurnEngine, type PageTurnEngineHandle } from './PageTurnEngine';
import { PageNavigation } from './PageNavigation';
import { storybookData, getTotalSpreads } from '../data/storybook';
import { romanticAudio } from '../utils/audioPlayer';

export const Storybook: React.FC = () => {
  // Page 0: Cover
  // Spread 1..5: Story Chapters 1 to 5
  // Spread 6: The Letter from the Heart (To Nannaaaaa)
  // Spread 7: The Final Page (Happy Birthday Tejjaaaa)
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const totalSpreads = getTotalSpreads();

  const turnEngineRef = useRef<PageTurnEngineHandle>(null);

  useEffect(() => {
    // Initialize romantic audio track
    romanticAudio.init(storybookData.audio.url, 0.65);
    document.title = storybookData.meta.title;
  }, []);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    if (currentPage === 0) {
      setCurrentPage(1);
    } else if (turnEngineRef.current) {
      turnEngineRef.current.turnNext();
    }
  }, [currentPage, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    if (currentPage === 1) {
      setCurrentPage(0);
    } else if (turnEngineRef.current) {
      turnEngineRef.current.turnPrev();
    }
  }, [currentPage, isAnimating]);

  const handleJumpToPage = useCallback((targetPage: number) => {
    if (isAnimating) return;
    if (targetPage === 0) {
      setCurrentPage(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentPage === 0) {
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (turnEngineRef.current) {
      turnEngineRef.current.jumpToSpread(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, isAnimating]);

  const handleReplay = useCallback(() => {
    if (isAnimating) return;
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isAnimating]);

  // Keyboard navigation for physical book reading feel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if an input or dialog is active
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleReplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleReplay]);

  return (
    <div className="min-h-screen bg-[#151210] text-[#292522] font-sans relative selection:bg-[#D9A6A0] selection:text-[#431C25] overflow-x-hidden flex flex-col justify-between">
      {/* Warm Ambient Desk Lamp Light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[650px] bg-[#EADCC8]/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#722F3E]/10 rounded-full blur-[130px]" />
      </div>

      {/* Literary Controls (Table of Contents, Audio Toggle, Page Indicators & Turning Buttons) */}
      <PageNavigation
        currentPage={currentPage}
        totalPages={totalSpreads}
        onNext={handleNext}
        onPrev={handlePrev}
        onJumpToPage={handleJumpToPage}
        onReplay={handleReplay}
        isAnimating={isAnimating}
      />

      {/* Main Reading Platform */}
      <main className="relative z-10 flex-grow flex items-center justify-center pt-14 pb-20 px-2 sm:px-4">
        <AnimatePresence mode="wait">
          {currentPage === 0 ? (
            <motion.div
              key="book-cover-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
              <BookCover onOpenBook={() => handleJumpToPage(1)} />
            </motion.div>
          ) : (
            <motion.div
              key="book-spread-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <PageTurnEngine
                ref={turnEngineRef}
                currentSpread={currentPage}
                onSpreadChange={setCurrentPage}
                onReturnToCover={handleReplay}
                isAnimating={isAnimating}
                setIsAnimating={setIsAnimating}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Desk Edge Accent */}
      <footer className="relative z-10 py-3 text-center text-[#806B5A]/60 text-[11px] font-serif tracking-wider">
        <span>SOMEWHERE, IT'S ALWAYS YOU. • AN ILLUSTRATED STORYBOOK FOR TEJJAAAA ❤️</span>
      </footer>
    </div>
  );
};
