import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, ChevronDown, Sparkles, MapPin } from 'lucide-react';
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
          src="/photos/couple-photo-18.webp"
          alt="Our mountain journey together"
          className="w-full h-full object-cover object-top filter brightness-[0.85] sepia-[0.35] contrast-[0.95] scale-105 transform animate-gentle-float"
        />
        {/* Warm Ivory & Burgundy Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/92 via-ivory/80 to-ivory" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-burgundy/15 to-charcoal/25 mix-blend-multiply" />
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture opacity-75" />
      </div>

      {/* Decorative Vintage Polaroid Stamp Floating on Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="hidden xl:flex absolute top-28 left-10 z-10 flex-col items-center p-2.5 rounded-xl border border-cream-dark bg-ivory/95 backdrop-blur-sm shadow-polaroid w-44"
      >
        <div className="washi-tape -top-2.5 left-1/2 -translate-x-1/2 w-14" />
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-cream/50 mb-2 border border-cream-dark shadow-inner">
          <img
            src="/photos/couple-photo-01.webp"
            alt="Tejja and me"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex items-center gap-1 text-[9px] tracking-widest text-burgundy font-serif uppercase">
          <Compass className="w-3 h-3 text-burgundy" />
          <span>JOURNEY ARCHIVE</span>
        </div>
        <span className="font-handwriting text-base text-charcoal font-semibold mt-0.5">
          Tejjaaaa & Me ❤️
        </span>
      </motion.div>

      {/* Decorative Vintage Polaroid Stamp Floating on Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="hidden xl:flex absolute top-32 right-12 z-10 flex-col items-center p-2.5 rounded-xl border border-cream-dark bg-ivory/95 backdrop-blur-sm shadow-polaroid w-44"
      >
        <div className="washi-tape -top-2.5 left-1/2 -translate-x-1/2 w-14" />
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-cream/50 mb-2 border border-cream-dark shadow-inner">
          <img
            src="/photos/couple-photo-06.webp"
            alt="Walking together"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex items-center gap-1 text-[9px] tracking-widest text-dustyrose-dark font-sans uppercase">
          <Heart className="w-3 h-3 text-burgundy fill-burgundy" />
          <span>DESTINATION</span>
        </div>
        <span className="font-handwriting text-base text-burgundy font-bold mt-0.5">
          Wherever You Are ❤️
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
          <span>For Tejjaaaa ❤️</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-3 mb-6"
        >
          <h1 className="font-cormorant font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-burgundy drop-shadow-sm leading-tight">
            {loveStory.hero.mainTitle}
          </h1>
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-mutedbrown-dark font-normal">
            {loveStory.hero.subTitle}
          </h2>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto space-y-4 mb-10"
        >
          <p className="font-serif italic text-lg sm:text-2xl text-charcoal/90 leading-relaxed font-normal">
            "{loveStory.hero.supportingQuote}"
          </p>
          <p className="font-sans text-sm sm:text-base text-mutedbrown font-medium tracking-wide">
            {loveStory.hero.secondaryQuote}
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
            href="#chapter1"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-800 text-ivory font-serif tracking-wider text-base shadow-rose-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-burgundy-600"
          >
            <span>Read Chapter 01</span>
            <Heart className="w-4 h-4 fill-ivory" />
          </a>
          <a
            href="#letter"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-ivory/80 hover:bg-cream text-charcoal font-serif tracking-wider text-sm border border-cream-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>The Birthday Letter</span>
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
            href="#chapter1"
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
