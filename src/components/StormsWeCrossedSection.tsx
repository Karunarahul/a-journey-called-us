import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, Sun, Compass, ShieldCheck, HeartHandshake, Navigation, Smile } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const StormsWeCrossedSection: React.FC = () => {
  const { chapter3 } = loveStory;
  const [activeView, setActiveView] = useState<'journey' | 'storm' | 'sunrise'>('journey');

  return (
    <section id="chapter3" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-ivory">
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
            <span>{chapter3.badge} • THE UNEXPECTED ROUTES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-4xl sm:text-6xl text-charcoal tracking-tight leading-tight"
          >
            {chapter3.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-lg sm:text-2xl text-burgundy mt-2 font-normal"
          >
            "{chapter3.subtitle}"
          </motion.p>
        </div>

        {/* Cinematic Narrative Box with Storm-to-Sunrise Transition */}
        <div className="relative bg-[#FFFDF9] rounded-3xl border border-[#DEC7AA] shadow-journal overflow-hidden paper-texture">
          {/* Top Visual Banner: Transition from Storm to Golden Sunrise */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Misty Raincoat Mountain Trek */}
              <div className="relative h-full overflow-hidden bg-slate-900">
                <img
                  src="/photos/couple-photo-19.webp"
                  alt="Raincoats and mist on mountain trek"
                  className="w-full h-full object-cover object-top filter brightness-[0.75] contrast-[1.1] sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-charcoal/40" />
                <div className="absolute bottom-6 left-6 text-ivory">
                  <span className="text-[10px] tracking-widest font-mono uppercase bg-charcoal/80 text-cream px-2.5 py-1 rounded border border-ivory/20 flex items-center gap-1.5 w-fit backdrop-blur-sm">
                    <CloudRain className="w-3 h-3 text-slate-300" />
                    THE ARGUMENTS & DISTANCE
                  </span>
                  <p className="font-serif italic text-sm text-ivory/90 mt-2 drop-shadow-md">
                    Fights, overthinking & stubborn moments
                  </p>
                </div>
              </div>

              {/* Right Side: Golden Mountain Summit Embrace */}
              <div className="relative h-full overflow-hidden bg-amber-950">
                <img
                  src="/photos/couple-photo-11.webp"
                  alt="Summit embrace in golden light"
                  className="w-full h-full object-cover object-top filter brightness-[0.85] sepia-[0.2] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-ivory sm:text-charcoal">
                  <span className="text-[10px] tracking-widest font-mono uppercase bg-ivory/95 text-burgundy px-2.5 py-1 rounded border border-dustyrose flex items-center gap-1.5 w-fit font-semibold shadow-sm">
                    <Sun className="w-3 h-3 text-amber-500" />
                    FINDING OUR WAY BACK
                  </span>
                  <p className="font-serif italic text-sm text-ivory sm:text-charcoal mt-2 font-medium drop-shadow-sm">
                    Talking through, forgiving & choosing each other
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FFFDF9] to-transparent" />
          </div>

          {/* Interactive Mode Toggles */}
          <div className="px-6 sm:px-12 pt-8 pb-4 flex items-center justify-center gap-3 border-b border-cream flex-wrap">
            <button
              onClick={() => setActiveView('journey')}
              className={`px-5 py-2 rounded-full text-xs font-serif transition-all flex items-center gap-1.5 ${
                activeView === 'journey'
                  ? 'bg-burgundy text-ivory font-semibold shadow-sm'
                  : 'bg-ivory text-mutedbrown hover:text-burgundy'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Full Chapter Narrative</span>
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
              <span>We're Not Always Cute</span>
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
              <span>The Beautiful Thing About Us</span>
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
                  <div className="p-6 rounded-2xl bg-cream/40 border-l-4 border-burgundy mb-8 text-center sm:text-left">
                    <p className="font-cormorant italic text-xl sm:text-2xl text-burgundy font-semibold leading-relaxed">
                      "{chapter3.quote}"
                    </p>
                  </div>

                  {chapter3.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}

                  {/* PS Humor callout */}
                  <div className="p-4 rounded-xl bg-dustyrose/20 border border-dustyrose/40 mt-6">
                    <p className="font-handwriting text-2xl text-burgundy font-bold text-center">
                      {chapter3.footerNote}
                    </p>
                  </div>
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
                  <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-slate-600 mb-6">
                    <h3 className="font-serif font-bold text-lg text-slate-800 mb-2">
                      When Emotions Get The Better of Us
                    </h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      "We've had our fights. Our misunderstandings, stubborn moments, little arguments and those times when neither of us wanted to agree. Sometimes we overthink. Sometimes we get annoyed. Sometimes we don't understand what the other person is trying to say."
                    </p>
                  </div>
                  <p className="font-serif text-lg text-charcoal/90 leading-relaxed">
                    We're not a perfect story, and I don't want us to pretend to be one. But even in our most stubborn moments, loving you has never stopped.
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
                  <div className="p-6 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 mb-6">
                    <h3 className="font-serif font-bold text-lg text-amber-900 mb-2">
                      Choosing to Make Things Better
                    </h3>
                    <p className="font-sans text-sm text-amber-800 leading-relaxed">
                      "We've learned to talk things through, understand each other, forgive and find our way back to those smiles. I just want us to keep learning, growing and choosing to make things better."
                    </p>
                  </div>
                  <p className="font-serif text-lg text-charcoal/90 leading-relaxed">
                    Because even the most beautiful journeys have a few unexpected turns. And I'm so glad we're still travelling together, Tejjaaaa.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 4 Pillars of Unexpected Routes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-10 border-t border-cream">
              {chapter3.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-ivory/80 border border-cream hover:border-dustyrose transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center mb-3 group-hover:bg-burgundy group-hover:text-ivory transition-colors">
                    {idx === 0 && <HeartHandshake className="w-4 h-4" />}
                    {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 2 && <Compass className="w-4 h-4" />}
                    {idx === 3 && <Smile className="w-4 h-4" />}
                  </div>
                  <h4 className="font-serif font-semibold text-sm text-charcoal mb-1">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-mutedbrown leading-relaxed">
                    {pillar.description}
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
