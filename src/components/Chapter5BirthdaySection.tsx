import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Sparkles, Target, Smile, Gift, Star } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const Chapter5BirthdaySection: React.FC = () => {
  const { chapter5 } = loveStory;

  return (
    <section id="chapter5" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cream/30">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <Cake className="w-3.5 h-3.5" />
            <span>{chapter5.badge} • IT'S YOUR DAY!</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-4xl sm:text-6xl text-charcoal tracking-tight leading-tight"
          >
            {chapter5.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-lg sm:text-2xl text-burgundy mt-2 font-normal"
          >
            "{chapter5.subtitle}"
          </motion.p>
        </div>

        {/* Grand Birthday Tribute Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 md:p-14 shadow-journal border border-[#DEC7AA] paper-texture overflow-hidden mb-12"
        >
          {/* Decorative Corner Stars */}
          <div className="absolute top-4 right-4 flex items-center gap-1 text-vintagegold">
            <Star className="w-4 h-4 fill-vintagegold" />
            <Star className="w-4 h-4 fill-vintagegold" />
            <Star className="w-4 h-4 fill-vintagegold" />
          </div>

          {/* Birthday Greeting Banner */}
          <div className="text-center pb-8 mb-8 border-b border-cream">
            <h3 className="font-cormorant font-bold text-3xl sm:text-5xl text-burgundy">
              {chapter5.paragraphs[0]}
            </h3>
            <p className="font-handwriting text-2xl text-mutedbrown-dark mt-2">
              {chapter5.paragraphs[1]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* The Birthday Celebration Polaroid */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative bg-[#FFFDF9] rounded-2xl p-4 shadow-polaroid border border-[#DEC7AA] max-w-[300px] rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                <div className="washi-tape -top-3 left-1/2 -translate-x-1/2" />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-cream/50 mb-3 border border-[#DEC7AA]/40 shadow-inner">
                  <img
                    src="/photos/couple-photo-05.webp"
                    alt="Birthday celebration with sparkler cake"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-2 right-2 text-[9px] font-mono tracking-wider bg-charcoal/70 text-ivory px-2 py-0.5 rounded backdrop-blur-sm">
                    Birthday Memories
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-handwriting text-xl text-burgundy font-semibold">
                    "Today, you get all the attention!"
                  </p>
                  <span className="text-[10px] text-mutedbrown font-sans uppercase tracking-wider block mt-0.5">
                    Sparklers, Pup & Pure Joy ❤️
                  </span>
                </div>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="lg:col-span-7 space-y-5 text-charcoal/90 font-serif text-lg sm:text-xl leading-relaxed">
              {chapter5.paragraphs.slice(2, -2).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Cheer Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-cream/50 border border-dustyrose/40 text-center max-w-xl mx-auto">
            <Sparkles className="w-6 h-6 text-vintagegold mx-auto mb-2" />
            <p className="font-serif italic text-lg sm:text-xl text-charcoal font-medium">
              "{chapter5.paragraphs[chapter5.paragraphs.length - 2]}"
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-burgundy font-bold mt-2">
              {chapter5.paragraphs[chapter5.paragraphs.length - 1]}
            </p>
          </div>
        </motion.div>

        {/* 4 Wishes for Tejja */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {chapter5.wishes.map((w, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-ivory border border-cream hover:border-dustyrose transition-all shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center mb-3">
                {idx === 0 && <Target className="w-5 h-5" />}
                {idx === 1 && <Sparkles className="w-5 h-5" />}
                {idx === 2 && <Smile className="w-5 h-5" />}
                {idx === 3 && <Gift className="w-5 h-5" />}
              </div>
              <h4 className="font-serif font-bold text-base text-charcoal mb-1">
                {w.title}
              </h4>
              <p className="font-sans text-xs text-mutedbrown leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
