import React from 'react';
import { motion } from 'framer-motion';
import { loveStory } from '../data/loveStory';

export const Chapter1Beginning: React.FC = () => {
  const { chapter1 } = loveStory;

  return (
    <section
      id="chapter-1"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DFD4]/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Chapter Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#783D48] font-bold bg-[#EFEBE2] px-3.5 py-1 rounded-full border border-[#E5DFD4]">
              {chapter1.badge}
            </span>
            <span className="h-[1px] w-12 bg-[#783D48]/30" />
          </div>

          {/* Headline */}
          <h2 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#242321] tracking-tight leading-[1.15]">
            {chapter1.headline}
          </h2>

          {/* Narrative Paragraphs with Drop Cap */}
          <div className="space-y-4 font-sans text-base sm:text-lg text-[#242321]/90 leading-relaxed pt-2">
            {chapter1.narrative.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === 0 ? "drop-cap font-sans text-[#242321]/90" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quote Box */}
          {chapter1.quote && (
            <div className="mt-8 p-5 sm:p-6 bg-[#FCFAF6] rounded-2xl border-l-4 border-[#783D48] shadow-sm">
              <p className="font-cormorant italic text-lg sm:text-xl text-[#783D48] font-medium leading-snug">
                "{chapter1.quote}"
              </p>
            </div>
          )}
        </motion.div>

        {/* Right Column: Editorial Photography Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-6 space-y-8 relative"
        >
          {/* Primary Photo: College Grounds */}
          {chapter1.photos[0] && (
            <div className="relative bg-[#FCFAF6] p-3 sm:p-4 rounded-2xl shadow-xl border border-[#E5DFD4] max-w-md ml-auto rotate-[-1.5deg]">
              <div className="photo-mount-corner tl" />
              <div className="photo-mount-corner tr" />
              <div className="photo-mount-corner bl" />
              <div className="photo-mount-corner br" />

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#EFEBE2]/40 shadow-inner">
                <img
                  src={chapter1.photos[0].url}
                  alt={chapter1.photos[0].alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="pt-3 text-center">
                <p className="font-handwriting text-xl text-[#783D48] font-semibold">
                  "{chapter1.photos[0].caption}"
                </p>
                <span className="font-sans text-[11px] text-[#A18F7E] uppercase tracking-wider block mt-0.5">
                  {chapter1.photos[0].annotation}
                </span>
              </div>
            </div>
          )}

          {/* Secondary Overlapping Photo: Early Celebrations */}
          {chapter1.photos[1] && (
            <div className="relative bg-[#FCFAF6] p-3 rounded-xl shadow-lg border border-[#E5DFD4] max-w-sm mr-auto rotate-[2deg] sm:-mt-12 z-20">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[#EFEBE2]/40 shadow-inner">
                <img
                  src={chapter1.photos[1].url}
                  alt={chapter1.photos[1].alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <p className="font-handwriting text-base text-[#242321] text-center pt-2 font-medium">
                {chapter1.photos[1].caption}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
