import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { storybookData } from '../data/storybook';
import { BotanicalLaurel, CornerBrassOrnament, WindingRoadLandscape } from './WatercolorAccents';
import { romanticAudio } from '../utils/audioPlayer';

interface StorybookCoverProps {
  onOpenBook: () => void;
}

export const StorybookCover: React.FC<StorybookCoverProps> = ({ onOpenBook }) => {
  const { cover, recipient } = storybookData;

  const handleOpen = async () => {
    try {
      await romanticAudio.play();
    } catch {
      // Audio autoplay handled gracefully
    }
    onOpenBook();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-[#181412] relative overflow-hidden">
      {/* Warm Ambient Desk Lamp Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#EADCC8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-[#722F3E]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* The Physical Hardcover Book */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotateY: 8 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 1.05, rotateY: -35 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl sm:max-w-2xl bg-[#FBF7EE] rounded-2xl shadow-2xl border-4 border-[#C8A97E]/70 p-6 sm:p-12 md:p-14 book-paper overflow-hidden text-center flex flex-col items-center justify-between min-h-[640px] sm:min-h-[720px]"
        style={{
          boxShadow: `
            0 30px 70px -15px rgba(0,0,0,0.8), 
            0 0 0 1px #5A2531, 
            inset 0 0 45px rgba(200, 169, 126, 0.25)
          `,
        }}
      >
        {/* Antique Corner Brass Filigree */}
        <CornerBrassOrnament position="tl" className="absolute top-4 left-4 w-9 h-9" />
        <CornerBrassOrnament position="tr" className="absolute top-4 right-4 w-9 h-9" />
        <CornerBrassOrnament position="bl" className="absolute bottom-4 left-4 w-9 h-9" />
        <CornerBrassOrnament position="br" className="absolute bottom-4 right-4 w-9 h-9" />

        {/* Vintage Inset Border Frame */}
        <div className="absolute inset-4 sm:inset-6 border border-[#C8A97E]/40 pointer-events-none rounded-xl" />
        <div className="absolute inset-5 sm:inset-7 border border-dashed border-[#722F3E]/25 pointer-events-none rounded-lg" />

        {/* Book Spine Shadow Illusion on Left Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />

        {/* Top Ornament & Volume Tag */}
        <div className="relative z-10 pt-4 flex flex-col items-center">
          <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#806B5A] block mb-2 font-medium">
            {cover.ornamentText}
          </span>
          <BotanicalLaurel className="w-36 sm:w-48 h-8 opacity-90" />
        </div>

        {/* Main Title & Subtitle Composition */}
        <div className="relative z-10 my-auto py-6 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="font-cormorant font-bold text-4xl sm:text-6xl md:text-7xl text-[#722F3E] tracking-tight leading-[1.08] mb-3">
              SOMEWHERE,
              <br />
              <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl text-[#292522] block mt-1">
                IT'S ALWAYS YOU.
              </span>
            </h1>

            <p className="font-cormorant italic text-xl sm:text-2xl text-[#806B5A] mt-4 font-normal tracking-wide">
              "{cover.subtitle}"
            </p>
          </motion.div>

          {/* Hand-painted Landscape Illustration Inset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="my-6 rounded-lg overflow-hidden border border-[#DEC7AA] shadow-sm relative bg-[#FAF5EC]/80"
          >
            <WindingRoadLandscape className="w-full h-24 sm:h-28" />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="font-handwriting text-base text-[#722F3E] bg-[#FAF5EC]/90 px-3 py-0.5 rounded-full border border-[#C8A97E]/30">
                A storybook journey for {recipient.name}
              </span>
            </div>
          </motion.div>

          {/* Dedication */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-1 flex items-center justify-center gap-2"
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#722F3E] font-bold">
              {cover.dedication}
            </span>
          </motion.div>
        </div>

        {/* Bottom Interactive Open Action Button */}
        <div className="relative z-10 pb-4 pt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpen}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#722F3E] text-[#FBF7EE] font-serif text-base sm:text-lg tracking-wider shadow-lg hover:bg-[#5A2531] transition-all duration-300 border-2 border-[#C8A97E]/50"
            style={{
              boxShadow: '0 10px 25px -5px rgba(114, 47, 62, 0.45)',
            }}
          >
            <BookOpen className="w-5 h-5 text-[#C8A97E] group-hover:rotate-6 transition-transform" />
            <span>{cover.openButtonText}</span>
            <Sparkles className="w-4 h-4 text-[#C8A97E] animate-pulse" />
          </motion.button>

          <p className="font-serif italic text-xs text-[#806B5A] mt-3">
            Click to turn the cover and begin our story
          </p>
        </div>
      </motion.div>
    </div>
  );
};
