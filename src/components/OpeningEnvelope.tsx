import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Music } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveStory } from '../data/loveStory';
import { romanticAudio } from '../utils/audioPlayer';

interface OpeningEnvelopeProps {
  onComplete: () => void;
  isOpenState: boolean;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({
  onComplete,
  isOpenState,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  if (isOpenState) {
    return null; // Envelope already opened/dismissed
  }

  const handleOpenEnvelope = async () => {
    setIsOpening(true);

    // Gently start music if possible
    try {
      await romanticAudio.play();
    } catch {
      // Ignored if user has not interacted or browser blocks
    }

    // Gentle confetti / rose petal shower
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#722F3E', '#D9A6A0', '#EADCC8', '#C8A97E'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }

    // Envelope flap and letter slide animation is running smoothly
  };

  const handleProceedToSite = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-md overflow-hidden"
      >
        {/* Subtle background ambient glow */}
        <div className="absolute w-[600px] h-[600px] bg-dustyrose/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Skip button for accessibility */}
        <button
          onClick={handleProceedToSite}
          className="absolute top-6 right-6 text-xs text-cream/70 hover:text-ivory uppercase tracking-widest transition-colors flex items-center gap-1.5 z-20 px-3 py-1.5 rounded-full border border-cream/20 hover:border-cream/50"
        >
          <span>Skip to Website</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Envelope Container */}
        <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
          {/* Top floating instruction */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif tracking-widest text-vintagegold border border-vintagegold/30 bg-charcoal/60 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-vintagegold" />
              SPECIAL DELIVERY FOR NANNAAAAA ❤️
            </span>
          </motion.div>

          {/* The Envelope Body */}
          <div className="relative w-[340px] sm:w-[420px] h-[250px] sm:h-[280px]">
            {/* The Letter that slides out */}
            <motion.div
              animate={
                isOpening
                  ? { y: -130, opacity: 1, scale: 1.02 }
                  : { y: 0, opacity: 0.8, scale: 0.95 }
              }
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="absolute left-4 right-4 top-2 bottom-4 bg-[#FFFDF9] rounded-lg shadow-2xl p-6 border border-[#E8DFC8] paper-texture flex flex-col justify-between z-10"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              }}
            >
              {/* Letter Header */}
              <div className="border-b border-cream/80 pb-3 flex items-center justify-between">
                <span className="font-serif italic text-burgundy text-sm sm:text-base">
                  Dearest {loveStory.recipient.nickname}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-mutedbrown">
                  Special Delivery
                </span>
              </div>

              {/* Letter Preview Content */}
              <div className="my-auto py-2">
                <p className="font-handwriting text-lg sm:text-xl text-charcoal leading-relaxed text-center">
                  "{loveStory.envelope.openingLetterSnippet}"
                </p>
                <p className="font-serif italic text-center text-xs text-dustyrose-dark mt-2 font-medium">
                  {loveStory.recipient.birthdayGreeting}
                </p>
              </div>

              {/* Letter Footer */}
              <div className="pt-2 border-t border-cream/80 flex items-center justify-between text-xs text-mutedbrown">
                <span className="font-handwriting text-base text-burgundy">
                  Forever Yours ❤️
                </span>
                <span className="text-[10px] uppercase font-sans tracking-wider text-dustyrose-dark">
                  Turn Page ➔
                </span>
              </div>
            </motion.div>

            {/* Envelope Back & Pocket */}
            <div className="absolute inset-0 bg-cream rounded-xl shadow-envelope border border-[#D9C6AE] overflow-hidden z-20 pointer-events-none">
              {/* Paper textured background */}
              <div className="absolute inset-0 paper-texture opacity-60" />

              {/* Bottom & Side Triangles (Envelope Fold lines) */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 420 280"
                preserveAspectRatio="none"
              >
                {/* Left fold */}
                <polygon
                  points="0,0 210,140 0,280"
                  fill="#DFCFB8"
                  opacity="0.85"
                />
                {/* Right fold */}
                <polygon
                  points="420,0 210,140 420,280"
                  fill="#D8C5AD"
                  opacity="0.85"
                />
                {/* Bottom flap */}
                <polygon
                  points="0,280 210,130 420,280"
                  fill="#E5D6C1"
                  stroke="#CBB69B"
                  strokeWidth="1"
                />
              </svg>

              {/* Address on the envelope front */}
              <div className="absolute inset-x-0 bottom-6 text-center z-20">
                <p className="font-cormorant italic text-base sm:text-lg text-burgundy font-semibold tracking-wide">
                  {loveStory.envelope.recipientTag}
                </p>
                <p className="font-sans text-xs text-mutedbrown tracking-wider uppercase mt-0.5">
                  {loveStory.envelope.subtitle}
                </p>
              </div>
            </div>

            {/* Top Triangular Flap with 3D rotation */}
            <motion.div
              animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 25 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
              className="absolute top-0 left-0 right-0 h-[140px] z-25"
            >
              <svg
                className="w-full h-full drop-shadow-md"
                viewBox="0 0 420 140"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 210,140 420,0"
                  fill="#EADCC8"
                  stroke="#CBB69B"
                  strokeWidth="1"
                />
              </svg>

              {/* Burgundy Wax Seal placed at the apex of the triangle flap */}
              {!isOpening && (
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-ivory shadow-wax border-2 border-[#5A2531]/40 ring-2 ring-vintagegold/30">
                    <Heart className="w-5 h-5 fill-ivory text-ivory animate-pulse" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Action Buttons underneath Envelope */}
          <div className="mt-10 flex flex-col items-center gap-3 z-30">
            {!isOpening ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenEnvelope}
                className="px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-800 text-ivory font-medium tracking-wide shadow-rose-glow flex items-center gap-3 transition-all duration-300 border border-burgundy-600 group"
              >
                <Heart className="w-4 h-4 fill-ivory group-hover:scale-125 transition-transform" />
                <span className="font-serif tracking-wider text-base">
                  {loveStory.envelope.openButtonText}
                </span>
                <Sparkles className="w-4 h-4 text-vintagegold" />
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={handleProceedToSite}
                className="px-8 py-3.5 rounded-full bg-vintagegold hover:bg-vintagegold-dark text-charcoal font-serif font-semibold tracking-wider shadow-lg flex items-center gap-2.5 transition-all group"
              >
                <span>Step Inside Our Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            )}

            <p className="text-xs text-cream/70 tracking-wider flex items-center gap-1.5">
              <Music className="w-3 h-3 text-vintagegold" />
              <span>Acoustic melodies & handcrafted love inside</span>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
