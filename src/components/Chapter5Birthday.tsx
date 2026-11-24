import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { RomanticPhoto } from './RomanticPhoto';

export const Chapter5Birthday: React.FC = () => {
  const { chapter5 } = loveStory;

  return (
    <section
      id="chapter-5"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DFD4]/60"
    >
      {/* Header & Birthday Narrative */}
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2"
        >
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#783D48] font-bold bg-[#EFEBE2] px-3.5 py-1 rounded-full border border-[#E5DFD4]">
            {chapter5.badge}
          </span>
          <Sparkles className="w-4 h-4 text-[#C8A97E]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant font-bold text-3xl sm:text-5xl md:text-6xl text-[#242321] tracking-tight leading-[1.12]"
        >
          {chapter5.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4 font-sans text-base sm:text-lg text-[#242321]/90 leading-relaxed max-w-2xl mx-auto"
        >
          {chapter5.narrative.map((p, idx) => (
            <p
              key={idx}
              className={idx === 0 ? "font-cormorant text-2xl sm:text-3xl font-bold text-[#783D48] italic" : ""}
            >
              {p}
            </p>
          ))}
        </motion.div>

        {chapter5.quote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2"
          >
            <p className="font-cormorant italic text-xl sm:text-2xl text-[#783D48] font-medium">
              "{chapter5.quote}"
            </p>
          </motion.div>
        )}
      </div>

      {/* Birthday Photographs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
        {/* Centerpiece Photo: Sparkler Cake & Puppy (Span 6) */}
        {chapter5.photos[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-6 rotate-[-1deg]"
          >
            <RomanticPhoto
              photo={chapter5.photos[0]}
              showTape={true}
              showCorners={true}
            />
          </motion.div>
        )}

        {/* Right Stack: Car Bonnet Midnight Surprise & Teddy Bear (Span 6) */}
        <div className="md:col-span-6 space-y-6">
          {chapter5.photos[1] && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rotate-[1.5deg]"
            >
              <RomanticPhoto
                photo={chapter5.photos[1]}
                showCorners={true}
              />
            </motion.div>
          )}

          {chapter5.photos[2] && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rotate-[-1deg]"
            >
              <RomanticPhoto
                photo={chapter5.photos[2]}
                showCorners={true}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
