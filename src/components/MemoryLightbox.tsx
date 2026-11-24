import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import type { PhotoConfig } from '../data/photoConfig';

interface MemoryLightboxProps {
  photos: PhotoConfig[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const MemoryLightbox: React.FC<MemoryLightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(prevIndex);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(nextIndex);
  }, [currentIndex, photos.length, onNavigate]);

  // Lock background scrolling and handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="memory-lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 bg-black/92 backdrop-blur-md select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Expanded photograph view"
      >
        {/* Top Header Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-between w-full max-w-5xl mx-auto z-20 text-white/90 pt-2 pb-2"
        >
          {/* Photo Counter & Badge */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/15 text-[#EADCC8]">
              Memory {currentIndex + 1} of {photos.length}
            </span>
            {currentPhoto.annotation && (
              <span className="hidden sm:inline font-handwriting text-lg text-[#D7B8B1]">
                {currentPhoto.annotation}
              </span>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-sans tracking-wide transition-all border border-white/15 hover:scale-105 active:scale-95"
            title="Close view (Esc)"
          >
            <span className="hidden sm:inline">Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Center Main Photograph Area with Navigation Arrows */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex-1 flex items-center justify-center my-auto w-full max-w-5xl mx-auto"
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:-left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Previous photograph"
            title="Previous photograph (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Photograph Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-h-[72vh] sm:max-h-[76vh] max-w-full flex items-center justify-center"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt || currentPhoto.caption}
                className="max-h-[72vh] sm:max-h-[76vh] max-w-[88vw] sm:max-w-[80vw] object-contain rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/10"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:-right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Next photograph"
            title="Next photograph (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Editorial Caption Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl mx-auto z-20 text-center pb-2 pt-2"
        >
          <div className="bg-black/60 backdrop-blur-md rounded-2xl px-6 py-3.5 border border-white/10 shadow-lg inline-block max-w-full">
            {/* Cute Note Tag */}
            {currentPhoto.cuteNote && (
              <div className="inline-flex items-center gap-1.5 font-handwriting text-lg sm:text-xl text-[#E7C1BD] mb-1">
                <Heart className="w-3.5 h-3.5 fill-[#E7C1BD]" />
                <span>{currentPhoto.cuteNote}</span>
                <Heart className="w-3.5 h-3.5 fill-[#E7C1BD]" />
              </div>
            )}

            {/* Editorial Caption */}
            <p className="font-cormorant text-base sm:text-lg text-[#F7F4EE] tracking-wide leading-snug">
              {currentPhoto.caption}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
