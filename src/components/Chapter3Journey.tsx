import React from 'react';
import { motion } from 'framer-motion';
import { loveStory } from '../data/loveStory';
import { RomanticPhoto } from './RomanticPhoto';

export const Chapter3Journey: React.FC = () => {
  const { chapter3 } = loveStory;

  return (
    <section
      id="chapter-3"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DFD4]/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Two Overlapping Weathered Adventure Photographs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative space-y-6 order-2 lg:order-1"
        >
          {/* Photo 1: Raincoats in misty mountains */}
          {chapter3.photos[0] && (
            <div className="max-w-md mr-auto rotate-[-2deg]">
              <RomanticPhoto
                photo={chapter3.photos[0]}
                showTape={true}
                showCorners={true}
              />
            </div>
          )}

          {/* Photo 2: Summit Embrace */}
          {chapter3.photos[1] && (
            <div className="max-w-sm ml-auto rotate-[2.5deg] sm:-mt-10 z-20">
              <RomanticPhoto
                photo={chapter3.photos[1]}
                showCorners={true}
              />
            </div>
          )}
        </motion.div>

        {/* Right Column: Narrative & Reflections */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 space-y-6 order-1 lg:order-2"
        >
          {/* Chapter Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#783D48] font-bold bg-[#EFEBE2] px-3.5 py-1 rounded-full border border-[#E5DFD4]">
              {chapter3.badge}
            </span>
            <span className="h-[1px] w-12 bg-[#783D48]/30" />
          </div>

          {/* Headline */}
          <h2 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#242321] tracking-tight leading-[1.15]">
            {chapter3.headline}
          </h2>

          {/* Narrative Body */}
          <div className="space-y-4 font-sans text-base sm:text-lg text-[#242321]/90 leading-relaxed pt-2">
            {chapter3.narrative.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "drop-cap font-sans text-[#242321]/90" : ""}>
                {p}
              </p>
            ))}
          </div>

          {/* Quote */}
          {chapter3.quote && (
            <div className="p-5 sm:p-6 bg-[#FCFAF6] rounded-2xl border-l-4 border-[#783D48] shadow-sm">
              <p className="font-cormorant italic text-lg sm:text-xl text-[#783D48] font-medium leading-snug">
                "{chapter3.quote}"
              </p>
            </div>
          )}

          {/* Postscript Note */}
          {chapter3.postscript && (
            <div className="pt-2">
              <p className="font-handwriting text-xl text-[#783D48] font-bold">
                {chapter3.postscript}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
