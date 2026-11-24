import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Heart, X } from 'lucide-react';
import { romanticAudio, type AudioState } from '../utils/audioPlayer';

export const AutoplayPrompt: React.FC = () => {
  const [audioState, setAudioState] = useState<AudioState>(romanticAudio.getState());
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = romanticAudio.subscribe((state) => {
      setAudioState(state);
    });
    return unsubscribe;
  }, []);

  const handlePlay = async () => {
    await romanticAudio.play();
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
  };

  // Only show if autoplay was blocked, not playing, and user hasn't explicitly dismissed the prompt
  const shouldShow = audioState.autoplayBlocked && !audioState.isPlaying && !dismissed;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div
            onClick={handlePlay}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FAF5EE]/95 hover:bg-white border border-[#D7B8B1] shadow-[0_8px_25px_rgba(120,61,72,0.18)] backdrop-blur-sm cursor-pointer group transition-all duration-200 hover:scale-105 active:scale-95"
            role="button"
            aria-label="Tap to play our song"
          >
            <div className="w-7 h-7 rounded-full bg-[#783D48] flex items-center justify-center text-white shadow-sm group-hover:rotate-6 transition-transform">
              <Volume2 className="w-3.5 h-3.5" />
            </div>

            <span className="font-sans text-xs sm:text-sm font-medium text-[#783D48] flex items-center gap-1">
              <span>Tap to play our song</span>
              <Heart className="w-3.5 h-3.5 text-[#783D48] fill-[#783D48] animate-pulse" />
            </span>

            <button
              onClick={handleDismiss}
              className="ml-1 p-1 text-[#A18F7E] hover:text-[#783D48] rounded-full transition-colors"
              title="Dismiss prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
