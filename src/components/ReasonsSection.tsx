import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const ReasonsSection: React.FC = () => {
  const { reasons } = loveStory;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = reasons.items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.items.length) % reasons.items.length);
  };

  return (
    <section id="reasons" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-ivory">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <Heart className="w-3.5 h-3.5 fill-burgundy" />
            <span>Why My Heart Chose You</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-3xl sm:text-5xl text-charcoal tracking-tight leading-tight"
          >
            {reasons.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-mutedbrown mt-2"
          >
            {reasons.subtitle}
          </motion.p>
        </div>

        {/* Interactive Romantic Card Deck */}
        <div className="relative min-h-[380px] flex flex-col items-center justify-center">
          {/* Background Stacking Cards (Deck illusion) */}
          <div className="absolute w-[88%] sm:w-[92%] h-[320px] bg-cream/50 rounded-3xl border border-cream transform rotate-2 translate-y-3 pointer-events-none" />
          <div className="absolute w-[94%] sm:w-[96%] h-[320px] bg-cream/70 rounded-3xl border border-cream transform -rotate-1 translate-y-1.5 pointer-events-none" />

          {/* Active Card with Smooth Slide Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 shadow-journal border border-[#DEC7AA] paper-texture flex flex-col justify-between z-10"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-cream pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center text-xs font-serif font-bold">
                    {currentIndex + 1}
                  </span>
                  <span className="font-serif text-xs uppercase tracking-widest text-mutedbrown">
                    Reason No. 0{currentIndex + 1} of {reasons.items.length}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-vintagegold">
                  <Star className="w-4 h-4 fill-vintagegold text-vintagegold" />
                  <Star className="w-4 h-4 fill-vintagegold text-vintagegold" />
                  <Star className="w-4 h-4 fill-vintagegold text-vintagegold" />
                </div>
              </div>

              {/* Central Reason Content */}
              <div className="my-auto py-4 text-center">
                <span className="text-xs uppercase font-mono tracking-widest text-dustyrose-dark block mb-2">
                  {currentItem.title}
                </span>
                <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-burgundy font-bold leading-tight max-w-xl mx-auto">
                  "{currentItem.description}"
                </p>
              </div>

              {/* Card Footer: Navigation Controls */}
              <div className="pt-6 border-t border-cream flex items-center justify-between mt-6">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-full bg-ivory text-mutedbrown hover:text-burgundy hover:bg-cream border border-cream transition-colors flex items-center gap-1 text-xs font-serif"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {reasons.items.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-6 bg-burgundy'
                          : 'w-2 bg-cream hover:bg-dustyrose'
                      }`}
                      aria-label={`Go to reason ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-full bg-burgundy text-ivory hover:bg-burgundy-800 transition-colors flex items-center gap-1 text-xs font-serif shadow-sm"
                >
                  <span>Next Reason</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Closing Emotional Affirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="p-6 rounded-2xl bg-cream/40 border border-dustyrose/30 max-w-2xl mx-auto">
            <Sparkles className="w-5 h-5 text-vintagegold mx-auto mb-2" />
            <p className="font-serif italic text-lg sm:text-xl text-charcoal font-medium leading-relaxed">
              "{reasons.closingQuote}"
            </p>
            <p className="font-handwriting text-xl text-burgundy mt-2">
              Endless love for Nannaaaaa ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
