import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Sparkles } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { RomanticPhoto } from './RomanticPhoto';

interface FinalDestinationProps {
  onReplayStory: () => void;
}

export const FinalDestination: React.FC<FinalDestinationProps> = ({ onReplayStory }) => {
  const { finalDestination } = loveStory;

  return (
    <section
      id="destination"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#E5DFD4]/60 relative overflow-hidden text-center"
    >
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EFEBE2]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Subtle Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2"
        >
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#783D48] font-bold bg-[#EFEBE2] px-3.5 py-1 rounded-full border border-[#E5DFD4]">
            FINAL CHAPTER
          </span>
        </motion.div>

        {/* Headline & Supporting Text */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-cormorant font-bold text-4xl sm:text-6xl md:text-7xl text-[#242321] tracking-tight leading-[1.08]"
          >
            {finalDestination.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#242321]/80 max-w-2xl mx-auto font-normal"
          >
            "{finalDestination.supportingText}"
          </motion.p>
        </div>

        {/* Cinematic Photography Centerpiece: Mountain Ridge Sunset */}
        {finalDestination.photo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mx-auto rotate-[-0.5deg]"
          >
            <RomanticPhoto
              photo={finalDestination.photo}
              showTape={true}
              showCorners={true}
            />
          </motion.div>
        )}

        {/* Central Birthday Greeting Box — PRESERVED INTENTIONALLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-xl mx-auto p-6 sm:p-8 bg-[#FCFAF6] rounded-2xl border-l-4 border-[#783D48] shadow-md text-center"
        >
          <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#783D48] leading-snug">
            {finalDestination.finalGreeting}
          </h3>
          <p className="font-handwriting text-2xl text-[#A18F7E] mt-2">
            *{finalDestination.closingAnnotation}*
          </p>
        </motion.div>

        {/* Replay Story Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pt-4"
        >
          <button
            onClick={onReplayStory}
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#783D48] text-[#FCFAF6] font-sans text-sm tracking-wide font-medium shadow-md hover:bg-[#62313A] hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-[#D7B8B1] group-hover:-rotate-90 transition-transform" />
            <span>{finalDestination.replayText}</span>
            <Sparkles className="w-4 h-4 text-[#D7B8B1]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
