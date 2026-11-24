import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bookmark, Volume2, VolumeX, RotateCcw, X, Heart } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';
import { storybookData } from '../data/storybook';

interface StorybookControlsProps {
  currentPage: number; // 0 = Cover, 1..5 = Chapters 1..5, 6 = The Letter, 7 = Final Page
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onReplay: () => void;
}

export const StorybookControls: React.FC<StorybookControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onReplay,
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(romanticAudio.getIsPlaying());
  const [tocOpen, setTocOpen] = useState<boolean>(false);

  const toggleAudio = async () => {
    const active = await romanticAudio.toggle();
    setIsAudioPlaying(active);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const tableOfContents = [
    { page: 0, label: "The Book Cover", badge: "Cover" },
    { page: 1, label: "Every beautiful story begins somewhere", badge: "Page 01 • The Beginning" },
    { page: 2, label: "And then, we became our own little world", badge: "Page 02 • Our Little World" },
    { page: 3, label: "Not every road was easy", badge: "Page 03 • The Unexpected Routes" },
    { page: 4, label: "After all the chapters, it's still you", badge: "Page 04 • Still My Favourite Person" },
    { page: 5, label: "Today, the story celebrates YOU!", badge: "Page 05 • The Birthday Chapter" },
    { page: 6, label: "A Letter From My Heart (To Nannaaaaa)", badge: "The Letter • Deep Love" },
    { page: 7, label: "Our story is still going places", badge: "The Final Page • Forever Us" },
  ];

  return (
    <>
      {/* Top Floating Literary Bar (Audio & Table of Contents Ribbon) */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
        {/* Left: Bookmark Ribbon for Table of Contents */}
        <button
          onClick={() => setTocOpen(true)}
          className="pointer-events-auto group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC]/90 backdrop-blur-md border border-[#DEC7AA] text-[#722F3E] hover:text-[#5A2531] shadow-md transition-all hover:scale-105"
          title="Open Table of Contents"
        >
          <Bookmark className="w-4 h-4 text-[#C8A97E] group-hover:scale-110 transition-transform fill-[#C8A97E]" />
          <span className="font-serif text-xs font-semibold tracking-wider text-[#292522]">
            Table of Contents
          </span>
        </button>

        {/* Right: Audio Toggle & Quick Replay */}
        <div className="flex items-center gap-2.5 pointer-events-auto">
          {currentPage > 0 && (
            <button
              onClick={onReplay}
              className="p-2 rounded-full bg-[#FAF5EC]/90 backdrop-blur-md border border-[#DEC7AA] text-[#806B5A] hover:text-[#722F3E] shadow-md transition-all hover:scale-105 hidden sm:flex"
              title="Return to Cover"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={toggleAudio}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-md transition-all text-xs font-serif ${
              isAudioPlaying
                ? 'bg-[#722F3E] text-[#FBF7EE] border-[#722F3E]'
                : 'bg-[#FAF5EC]/90 backdrop-blur-md text-[#806B5A] border-[#DEC7AA] hover:text-[#722F3E]'
            }`}
            title={isAudioPlaying ? 'Mute romantic melody' : 'Play romantic melody'}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span className="hidden sm:inline font-medium">The Metro Proposal</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#806B5A]" />
                <span className="hidden sm:inline font-medium">Play Melody</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Bottom Floating Page Indicator & Turn Controls */}
      {currentPage > 0 && (
        <nav
          aria-label="Storybook page navigation"
          className="fixed bottom-4 left-0 right-0 z-40 px-4 flex items-center justify-center pointer-events-none"
        >
          <div className="pointer-events-auto flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2 rounded-full bg-[#FAF5EC]/95 backdrop-blur-md border border-[#DEC7AA] shadow-xl text-[#292522]">
            {/* Previous Page Button */}
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 text-xs font-serif text-[#722F3E] hover:text-[#5A2531] disabled:opacity-30 disabled:pointer-events-none transition-colors"
              disabled={currentPage <= 0}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Subtle Page Counter */}
            <div className="flex items-center gap-2 text-xs font-serif text-[#806B5A] px-2 sm:px-4 border-x border-[#DEC7AA]/60">
              <span className="text-[#722F3E] font-bold">
                {currentPage === 6 ? 'The Letter' : currentPage === 7 ? 'The End' : `Page 0${currentPage}`}
              </span>
              <span>of</span>
              <span>0{totalPages}</span>
            </div>

            {/* Next Page Button */}
            <button
              onClick={handleNext}
              className="flex items-center gap-1 text-xs font-serif text-[#722F3E] hover:text-[#5A2531] disabled:opacity-30 disabled:pointer-events-none transition-colors"
              disabled={currentPage >= totalPages}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      )}

      {/* Table of Contents Antique Drawer Modal */}
      <AnimatePresence>
        {tocOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTocOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#FAF5EC] rounded-2xl p-6 sm:p-8 border-2 border-[#C8A97E] shadow-2xl book-paper"
            >
              <button
                onClick={() => setTocOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-[#806B5A] hover:text-[#722F3E] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center pb-4 mb-4 border-b border-[#DEC7AA]">
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#806B5A]">
                  STORYBOOK INDEX
                </span>
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#722F3E] mt-1">
                  Table of Chapters
                </h3>
              </div>

              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => {
                      onPageChange(item.page);
                      setTocOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm font-serif ${
                      currentPage === item.page
                        ? 'bg-[#722F3E] text-[#FBF7EE] font-semibold shadow-sm'
                        : 'bg-[#F5ECE0]/60 text-[#292522] hover:bg-[#EADCC8]'
                    }`}
                  >
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#C8A97E]">
                        {item.badge}
                      </span>
                      <span className="line-clamp-1">{item.label}</span>
                    </div>
                    {currentPage === item.page && (
                      <Heart className="w-3.5 h-3.5 fill-[#C8A97E] text-[#C8A97E]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-[#DEC7AA] text-center">
                <p className="font-handwriting text-base text-[#722F3E]">
                  Dedicated with all my love to {storybookData.recipient.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
