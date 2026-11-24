import React from 'react';
import { motion } from 'framer-motion';
import { loveStory } from '../data/loveStory';

export const Chapter2Memories: React.FC = () => {
  const { chapter2 } = loveStory;

  return (
    <section
      id="chapter-2"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DFD4]/60"
    >
      {/* Header & Narrative Section */}
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2"
        >
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#783D48] font-bold bg-[#EFEBE2] px-3.5 py-1 rounded-full border border-[#E5DFD4]">
            {chapter2.badge}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant font-bold text-3xl sm:text-5xl md:text-6xl text-[#242321] tracking-tight leading-[1.12]"
        >
          {chapter2.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4 font-sans text-base sm:text-lg text-[#242321]/90 leading-relaxed max-w-2xl mx-auto"
        >
          {chapter2.narrative.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </motion.div>

        {chapter2.quote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4"
          >
            <p className="font-cormorant italic text-xl sm:text-2xl text-[#783D48] font-medium">
              "{chapter2.quote}"
            </p>
          </motion.div>
        )}
      </div>

      {/* Asymmetric Editorial Photo Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Large Feature Photo: Beach Sand Tunnel (Span 7) */}
        {chapter2.photos[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 bg-[#FCFAF6] p-3 sm:p-4 rounded-2xl shadow-lg border border-[#E5DFD4] rotate-[-0.8deg]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EFEBE2]/40 shadow-inner">
              <img
                src={chapter2.photos[0].url}
                alt={chapter2.photos[0].alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="pt-3 px-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <p className="font-handwriting text-xl text-[#783D48] font-bold">
                "{chapter2.photos[0].caption}"
              </p>
              <span className="font-sans text-[11px] text-[#A18F7E] uppercase tracking-wider">
                {chapter2.photos[0].annotation}
              </span>
            </div>
          </motion.div>
        )}

        {/* Second Feature Photo: Bike Road Trip (Span 5) */}
        {chapter2.photos[1] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 bg-[#FCFAF6] p-3 sm:p-4 rounded-2xl shadow-lg border border-[#E5DFD4] rotate-[1.2deg]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#EFEBE2]/40 shadow-inner">
              <img
                src={chapter2.photos[1].url}
                alt={chapter2.photos[1].alt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="pt-3 px-2">
              <p className="font-handwriting text-lg text-[#783D48] font-bold">
                "{chapter2.photos[1].caption}"
              </p>
              <span className="font-sans text-[11px] text-[#A18F7E] uppercase tracking-wider block mt-0.5">
                {chapter2.photos[1].annotation}
              </span>
            </div>
          </motion.div>
        )}

        {/* Third Photo: Laughter Collage (Span 4) */}
        {chapter2.photos[2] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 bg-[#FCFAF6] p-3 rounded-2xl shadow-md border border-[#E5DFD4] rotate-[1deg]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#EFEBE2]/40 shadow-inner">
              <img
                src={chapter2.photos[2].url}
                alt={chapter2.photos[2].alt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <p className="font-handwriting text-base text-[#242321] text-center pt-2 font-medium">
              {chapter2.photos[2].caption}
            </p>
          </motion.div>
        )}

        {/* Fourth Photo: Walking Arm in Arm (Span 4) */}
        {chapter2.photos[3] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-4 bg-[#FCFAF6] p-3 rounded-2xl shadow-md border border-[#E5DFD4] rotate-[-1.5deg]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#EFEBE2]/40 shadow-inner">
              <img
                src={chapter2.photos[3].url}
                alt={chapter2.photos[3].alt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <p className="font-handwriting text-base text-[#242321] text-center pt-2 font-medium">
              {chapter2.photos[3].caption}
            </p>
          </motion.div>
        )}

        {/* Fifth Photo: Wonderla Theme Park Joy (Span 4) */}
        {chapter2.photos[4] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 bg-[#FCFAF6] p-3 rounded-2xl shadow-md border border-[#E5DFD4] rotate-[2deg]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#EFEBE2]/40 shadow-inner">
              <img
                src={chapter2.photos[4].url}
                alt={chapter2.photos[4].alt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <p className="font-handwriting text-base text-[#242321] text-center pt-2 font-medium">
              {chapter2.photos[4].caption}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
