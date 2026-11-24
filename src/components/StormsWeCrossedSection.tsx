import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, Sun, Compass, ShieldCheck, HeartHandshake, Navigation } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const StormsWeCrossedSection: React.FC = () => {
  const { stormsWeCrossed } = loveStory;
  const [activeView, setActiveView] = useState<'journey' | 'storm' | 'sunrise'>('journey');

  return (
    <section id="storms" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-ivory">
      {/* Background Ambience */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Resilience & Emotional Maturity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-3xl sm:text-5xl text-charcoal tracking-tight leading-tight"
          >
            {stormsWeCrossed.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-mutedbrown mt-3"
          >
            {stormsWeCrossed.subtitle}
          </motion.p>
        </div>

        {/* Cinematic Narrative Box with Storm-to-Sunrise Transition */}
        <div className="relative bg-[#FFFDF9] rounded-3xl border border-[#DEC7AA] shadow-journal overflow-hidden paper-texture">
          {/* Top Visual Banner: Transition from Storm to Golden Sunrise */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            {/* Split / Blended Visual */}
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Twilight / Misty Cloud Sky */}
              <div className="relative h-full overflow-hidden bg-gradient-to-r from-slate-700 via-stone-600 to-amber-900/40">
                <img
                  src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1000&q=80"
                  alt="Moody storm clouds"
                  className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-charcoal/30" />
                <div className="absolute bottom-6 left-6 text-ivory">
                  <span className="text-[10px] tracking-widest font-mono uppercase bg-charcoal/70 px-2.5 py-1 rounded border border-ivory/20 flex items-center gap-1.5 w-fit">
                    <CloudRain className="w-3 h-3 text-slate-300" />
                    THE DIFFICULT DAYS
                  </span>
                  <p className="font-serif italic text-sm text-ivory/90 mt-2">
                    Misunderstandings, tears & silent moments
                  </p>
                </div>
              </div>

              {/* Right Side: Golden Dawn / Sunrise Road */}
              <div className="relative h-full overflow-hidden bg-gradient-to-r from-amber-700/60 via-amber-500/30 to-rose-200/50">
                <img
                  src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1000&q=80"
                  alt="Golden sunrise road"
                  className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-charcoal">
                  <span className="text-[10px] tracking-widest font-mono uppercase bg-ivory/90 text-burgundy px-2.5 py-1 rounded border border-dustyrose flex items-center gap-1.5 w-fit font-semibold">
                    <Sun className="w-3 h-3 text-amber-500" />
                    THE GOLDEN SUNRISE
                  </span>
                  <p className="font-serif italic text-sm text-charcoal mt-2 font-medium">
                    Choosing to forgive, understand & hold on
                  </p>
                </div>
              </div>
            </div>

            {/* Central Animated Compass / Destination Path */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FFFDF9] to-transparent" />
          </div>

          {/* Interactive Mode Toggles */}
          <div className="px-6 sm:px-12 pt-8 pb-4 flex items-center justify-center gap-3 border-b border-cream">
            <button
              onClick={() => setActiveView('journey')}
              className={`px-5 py-2 rounded-full text-xs font-serif transition-all flex items-center gap-1.5 ${
                activeView === 'journey'
                  ? 'bg-burgundy text-ivory font-semibold shadow-sm'
                  : 'bg-ivory text-mutedbrown hover:text-burgundy'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Full Story of Us</span>
            </button>
            <button
              onClick={() => setActiveView('storm')}
              className={`px-5 py-2 rounded-full text-xs font-serif transition-all flex items-center gap-1.5 ${
                activeView === 'storm'
                  ? 'bg-slate-700 text-ivory font-semibold shadow-sm'
                  : 'bg-ivory text-mutedbrown hover:text-burgundy'
              }`}
            >
              <CloudRain className="w-3.5 h-3.5" />
              <span>What Tested Us</span>
            </button>
            <button
              onClick={() => setActiveView('sunrise')}
              className={`px-5 py-2 rounded-full text-xs font-serif transition-all flex items-center gap-1.5 ${
                activeView === 'sunrise'
                  ? 'bg-amber-600 text-ivory font-semibold shadow-sm'
                  : 'bg-ivory text-mutedbrown hover:text-burgundy'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>How We Rose Above</span>
            </button>
          </div>

          {/* Narrative Content Body */}
          <div className="p-6 sm:p-12 md:p-16">
            <AnimatePresence mode="wait">
              {activeView === 'journey' && (
                <motion.div
                  key="journey"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 max-w-3xl mx-auto"
                >
                  {/* Central Quote */}
                  <div className="p-6 rounded-2xl bg-cream/40 border-l-4 border-burgundy mb-8 text-center sm:text-left">
                    <p className="font-cormorant italic text-xl sm:text-2xl text-burgundy font-semibold leading-relaxed">
                      "{stormsWeCrossed.quote}"
                    </p>
                  </div>

                  {stormsWeCrossed.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </motion.div>
              )}

              {activeView === 'storm' && (
                <motion.div
                  key="storm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 max-w-3xl mx-auto"
                >
                  <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-slate-600 mb-8">
                    <h3 className="font-serif font-bold text-lg text-slate-800 mb-2">
                      The Disagreements That Could Have Broken Us
                    </h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      "We've had our share of fights, misunderstandings, stubborn moments and days when things weren't easy. Sometimes we didn't understand each other. Sometimes emotions got the better of us. Sometimes a little thing became a big argument."
                    </p>
                  </div>
                  <p className="font-serif text-lg text-charcoal/90 leading-relaxed">
                    Yet in every single argument, what never wavered was the realization that our love was worth fighting for—not against each other, but for us.
                  </p>
                </motion.div>
              )}

              {activeView === 'sunrise' && (
                <motion.div
                  key="sunrise"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 max-w-3xl mx-auto"
                >
                  <div className="p-6 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 mb-8">
                    <h3 className="font-serif font-bold text-lg text-amber-900 mb-2">
                      The Sunrise of Forgiveness and Understanding
                    </h3>
                    <p className="font-sans text-sm text-amber-800 leading-relaxed">
                      "Somewhere between the silence and the conversations, between the tears and the smiles, we found our way back to each other. We learned to listen, to understand, to forgive and to grow."
                    </p>
                  </div>
                  <p className="font-serif text-lg text-charcoal/90 leading-relaxed">
                    Thank you for growing with me, Nannaaaaa, for sorting things out, and for proving that our bond is real, enduring, and invincible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 4 Pillars of Our Resilience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-10 border-t border-cream">
              {stormsWeCrossed.lessons.map((lesson, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-ivory/80 border border-cream hover:border-dustyrose transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center mb-3 group-hover:bg-burgundy group-hover:text-ivory transition-colors">
                    {idx === 0 && <HeartHandshake className="w-4 h-4" />}
                    {idx === 1 && <CloudRain className="w-4 h-4" />}
                    {idx === 2 && <Sun className="w-4 h-4" />}
                    {idx === 3 && <Compass className="w-4 h-4" />}
                  </div>
                  <h4 className="font-serif font-semibold text-sm text-charcoal mb-1">
                    {lesson.title}
                  </h4>
                  <p className="font-sans text-xs text-mutedbrown leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
