import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Heart } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { RomanticPhoto } from './RomanticPhoto';

interface OpeningInvitationProps {
  onBeginStory: () => void;
}

export const OpeningInvitation: React.FC<OpeningInvitationProps> = ({ onBeginStory }) => {
  const { opening, names } = loveStory;

  return (
    <section
      id="opening"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] overflow-hidden"
    >
      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EFEBE2]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#D7B8B1]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Subtle Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#A18F7E] font-semibold">
            A PERSONAL DIGITAL GIFT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#783D48]" />
          <span className="font-handwriting text-base text-[#783D48]">
            For {names.primaryName}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-cormorant font-bold text-4xl sm:text-6xl md:text-7xl text-[#783D48] tracking-tight leading-[1.08] mb-4"
        >
          {opening.mainText}
        </motion.h1>

        {/* Supporting Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#242321]/80 max-w-2xl mx-auto mb-2 font-normal"
        >
          "{opening.supportingText}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-10"
        >
          <span className="font-handwriting text-3xl sm:text-4xl text-[#783D48] font-bold">
            {opening.recipientText}
          </span>
        </motion.div>

        {/* Cinematic Photograph Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative max-w-lg mx-auto mb-10 text-center"
        >
          <RomanticPhoto
            photo={opening.photo}
            showTape={true}
            showCorners={true}
          />
        </motion.div>

        {/* Begin CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col items-center gap-3"
        >
          <button
            onClick={onBeginStory}
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#783D48] text-[#FCFAF6] font-sans text-sm tracking-wide font-medium shadow-md hover:bg-[#62313A] hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <span>{opening.ctaText}</span>
            <Heart className="w-4 h-4 fill-[#FCFAF6] text-[#FCFAF6] group-hover:scale-110 transition-transform" />
          </button>

          <span className="font-sans text-xs text-[#A18F7E] flex items-center gap-1 mt-2">
            Scroll down to explore <ArrowDown className="w-3 h-3 animate-bounce" />
          </span>
        </motion.div>
      </div>
    </section>
  );
};
