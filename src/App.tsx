import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StorybookCover } from './components/StorybookCover';
import { StorybookPageSpread } from './components/StorybookPageSpread';
import { StorybookControls } from './components/StorybookControls';
import { storybookData } from './data/storybook';
import { romanticAudio } from './utils/audioPlayer';

export const App: React.FC = () => {
  // Page 0: Cover
  // Page 1..5: Chapters 1 to 5
  // Page 6: The Letter
  // Page 7: The Final Page
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 7;

  useEffect(() => {
    // Initialize romantic audio
    romanticAudio.init(storybookData.audio.url, 0.65);
    document.title = storybookData.meta.title;
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(Math.max(0, Math.min(newPage, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [totalPages]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, handlePageChange]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1);
    }
  }, [currentPage, handlePageChange]);

  const handleReplay = useCallback(() => {
    handlePageChange(0);
  }, [handlePageChange]);

  // Keyboard navigation for realistic book reading (Left/Right arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrevPage();
      } else if (e.key === 'Home') {
        handleReplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextPage, handlePrevPage, handleReplay]);

  return (
    <div className="min-h-screen bg-[#151210] text-[#292522] font-sans relative selection:bg-[#D9A6A0] selection:text-[#431C25] overflow-x-hidden flex flex-col justify-between">
      {/* Subtle Warm Amber Reading Lamp Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#EADCC8]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#722F3E]/10 rounded-full blur-[120px]" />
      </div>

      {/* Literary Controls (Table of Contents, Audio Toggle, Page Indicators) */}
      <StorybookControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onReplay={handleReplay}
      />

      {/* Main Book Reader Container */}
      <main className="relative z-10 flex-grow flex items-center justify-center pt-16 pb-20 px-2 sm:px-4">
        <AnimatePresence mode="wait">
          {currentPage === 0 ? (
            <StorybookCover
              key="cover"
              onOpenBook={() => handlePageChange(1)}
            />
          ) : (
            <StorybookPageSpread
              key={`page-${currentPage}`}
              pageIndex={currentPage}
              onReplay={handleReplay}
              onNextPage={handleNextPage}
            />
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
export default App;
