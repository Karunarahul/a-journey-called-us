import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { storybookData } from '../data/storybook';
import { BotanicalLaurel, CornerBrassOrnament, WindingRoadLandscape } from './WatercolorAccents';
import { SpiralBinding } from './SpiralBinding';
import { romanticAudio } from '../utils/audioPlayer';

interface BookCoverProps {
  onOpenBook: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ onOpenBook }) => {
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
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-[#151210] relative overflow-hidden">
      {/* Warm Ambient Desk Lamp Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#EADCC8]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-[#722F3E]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* The Closed Hardcover Spiral Book */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, rotateY: 5 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 1.03, rotateY: -25 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg sm:max-w-xl bg-[#FBF7EE] rounded-2xl shadow-2xl border-4 border-[#C8A97E]/70 book-paper overflow-hidden text-center flex flex-col justify-between min-h-[640px] sm:min-h-[720px] pl-10 sm:pl-14 pr-6 sm:pr-10 py-8"
        style={{
          boxShadow: `
            0 30px 70px -15px rgba(0,0,0,0.85), 
            8px 0 0 #D9C5AB,
            12px 0 0 #3E2417,
            inset 0 0 45px rgba(200, 169, 126, 0.25)
          `,
        }}
      >
        {/* Left Vertical Spiral Binding on the Book Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 z-30">
          <SpiralBinding ringCount={18} isMobile={true} />
        </div>

        {/* Antique Corner Brass Filigree */}
        <CornerBrassOrnament position="tr" className="absolute top-4 right-4 w-9 h-9" />
        <CornerBrassOrnament position="br" className="absolute bottom-4 right-4 w-9 h-9" />

        {/* Vintage Inset Border Frame */}
        <div className="absolute inset-y-4 right-4 left-10 sm:left-14 border border-[#C8A97E]/40 pointer-events-none rounded-xl" />
        <div className="absolute inset-y-5 right-5 left-11 sm:left-15 border border-dashed border-[#722F3E]/25 pointer-events-none rounded-lg" />

        {/* Top Ornament & Volume Tag */}
        <div className="relative z-10 pt-2 flex flex-col items-center">
          <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#806B5A] block mb-2 font-medium">
            {cover.ornamentText}
          </span>
          <BotanicalLaurel className="w-36 sm:w-44 h-8 opacity-90" />
        </div>

        {/* Main Title & Subtitle Composition */}
        <div className="relative z-10 my-auto py-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="font-cormorant font-bold text-4xl sm:text-6xl text-[#722F3E] tracking-tight leading-[1.08] mb-3">
              SOMEWHERE,
              <br />
              <span className="font-serif italic font-normal text-3xl sm:text-5xl text-[#292522] block mt-1">
                IT'S ALWAYS YOU.
              </span>
            </h1>

            <p className="font-cormorant italic text-xl sm:text-2xl text-[#806B5A] mt-3 font-normal tracking-wide">
              "{cover.subtitle}"
            </p>
          </motion.div>

          {/* Hand-painted Landscape Illustration Inset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="my-5 rounded-lg overflow-hidden border border-[#DEC7AA] shadow-sm relative bg-[#FAF5EC]/80 max-w-sm mx-auto"
          >
            <WindingRoadLandscape className="w-full h-24" />
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
            transition={{ delay: 0.6 }}
            className="pt-1 flex items-center justify-center gap-2"
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#722F3E] font-bold">
              {cover.dedication}
            </span>
          </motion.div>
        </div>

        {/* Bottom Interactive Open Action Button */}
        <div className="relative z-10 pb-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpen}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 rounded-full bg-[#722F3E] text-[#FBF7EE] font-serif text-base sm:text-lg tracking-wider shadow-lg hover:bg-[#5A2531] transition-all duration-300 border-2 border-[#C8A97E]/50"
            style={{
              boxShadow: '0 10px 25px -5px rgba(114, 47, 62, 0.45)',
            }}
          >
            <BookOpen className="w-5 h-5 text-[#C8A97E] group-hover:rotate-6 transition-transform" />
            <span>{cover.openButtonText}</span>
            <Sparkles className="w-4 h-4 text-[#C8A97E] animate-pulse" />
          </motion.button>

          <p className="font-serif italic text-xs text-[#806B5A] mt-2.5">
            Click to turn the cover and begin our story
          </p>
        </div>
      </motion.div>
    </div>
  );
};
