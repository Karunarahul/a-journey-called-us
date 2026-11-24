import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, ChevronDown, Calendar, Sparkles, MapPin } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Cinematic Background Layer with Vintage Filter & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Golden horizon journey"
          className="w-full h-full object-cover object-center filter brightness-[0.88] sepia-[0.25] contrast-[0.95] scale-105 transform animate-gentle-float"
        />
        {/* Warm Ivory & Burgundy Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/90 via-ivory/70 to-ivory" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-burgundy/10 to-charcoal/20 mix-blend-multiply" />
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture opacity-70" />
      </div>

      {/* Decorative Vintage Travel Stamps Floating in Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: -12 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:flex absolute top-28 left-12 z-10 flex-col items-center justify-center p-3 rounded-xl border-2 border-dashed border-burgundy/40 bg-ivory/80 backdrop-blur-sm shadow-sm"
      >
        <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-burgundy font-serif uppercase">
          <Compass className="w-3.5 h-3.5 text-burgundy" />
          <span>JOURNEY ARCHIVE</span>
        </div>
        <span className="font-cormorant text-xs text-charcoal font-semibold mt-0.5">
          COLLEGE DAYS ➔ FOREVER
        </span>
        <div className="flex items-center gap-1 text-[9px] text-mutedbrown mt-1">
          <Calendar className="w-3 h-3 text-dustyrose-dark" />
          <span>PERPETUAL LOVE</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 8 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:flex absolute top-36 right-16 z-10 flex-col items-center justify-center p-3.5 rounded-full border-2 border-dustyrose bg-ivory/85 backdrop-blur-sm shadow-sm w-32 h-32"
      >
        <div className="text-[9px] tracking-widest uppercase text-dustyrose-dark font-sans text-center">
          DESTINATION
        </div>
        <span className="font-handwriting text-2xl text-burgundy font-bold my-0.5">
          Wherever
        </span>
        <span className="text-[10px] uppercase font-serif text-charcoal tracking-wider">
          You Are ❤️
        </span>
      </motion.div>

      {/* Central Content Card styled like an Editorial Vintage Journal Frontispiece */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Wax Seal / Monogram Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-burgundy shadow-wax flex items-center justify-center border-2 border-vintagegold/40 ring-4 ring-dustyrose/30 relative">
            <Heart className="w-8 h-8 fill-ivory text-ivory animate-pulse" />
            <div className="absolute -bottom-1 -right-1 bg-vintagegold text-charcoal p-1 rounded-full text-[10px]">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>
        </motion.div>

        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/70 backdrop-blur-sm border border-cream-dark text-mutedbrown-dark text-xs sm:text-sm font-serif tracking-widest uppercase mb-4"
        >
          <MapPin className="w-3.5 h-3.5 text-burgundy" />
          <span>A Love Story Written In The Stars</span>
          <span className="text-burgundy">•</span>
          <span>College Days & Beyond</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-1 mb-6"
        >
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-mutedbrown-dark">
            {loveStory.hero.mainHeadingPrefix}
          </h2>
          <h1 className="font-cormorant font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-burgundy drop-shadow-sm leading-tight">
            {loveStory.hero.mainHeadingName}
          </h1>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto space-y-4 mb-10"
        >
          <p className="font-serif italic text-lg sm:text-2xl text-charcoal/90 leading-relaxed font-normal">
            "{loveStory.hero.supportingText}"
          </p>
          <p className="font-sans text-sm sm:text-base text-mutedbrown font-medium tracking-wide">
            {loveStory.hero.secondaryText}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#story"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-800 text-ivory font-serif tracking-wider text-base shadow-rose-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-burgundy-600"
          >
            <span>Begin The Journey</span>
            <Heart className="w-4 h-4 fill-ivory" />
          </a>
          <a
            href="#letter"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-ivory/80 hover:bg-cream text-charcoal font-serif tracking-wider text-sm border border-cream-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Read Birthday Letter</span>
            <Sparkles className="w-3.5 h-3.5 text-vintagegold" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 sm:mt-20 flex flex-col items-center gap-2"
        >
          <a
            href="#story"
            className="group flex flex-col items-center text-xs tracking-widest uppercase font-serif text-mutedbrown hover:text-burgundy transition-colors"
          >
            <span className="mb-1">{loveStory.hero.scrollIndicatorText}</span>
            <div className="w-6 h-10 rounded-full border-2 border-mutedbrown/40 group-hover:border-burgundy flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2.5 rounded-full bg-burgundy"
              />
            </div>
            <ChevronDown className="w-4 h-4 mt-1 text-mutedbrown group-hover:text-burgundy animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
