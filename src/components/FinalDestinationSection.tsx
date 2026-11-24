import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw, Compass, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveStory } from '../data/loveStory';

interface FinalDestinationProps {
  onReplayStory: () => void;
}

export const FinalDestinationSection: React.FC<FinalDestinationProps> = ({ onReplayStory }) => {
  const { finalDestination } = loveStory;

  const triggerCelebration = () => {
    // Grand celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#722F3E', '#D9A6A0', '#EADCC8', '#C8A97E', '#FAF6F0'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#722F3E', '#D9A6A0', '#C8A97E'],
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#722F3E', '#D9A6A0', '#C8A97E'],
      });
    }, 250);
  };

  return (
    <section id="destination" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-ivory">
      {/* Cinematic Sunset Visual & Horizon Road */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80"
          alt="Sunset road to the horizon"
          className="w-full h-full object-cover object-center filter brightness-[0.85] sepia-[0.3] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/85 to-ivory/70" />
        <div className="absolute inset-0 paper-texture opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Glowing Destination Pin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <div className="w-16 h-16 rounded-full bg-burgundy shadow-rose-glow flex items-center justify-center text-ivory border-2 border-vintagegold/40 animate-gentle-float">
            <Heart className="w-8 h-8 fill-ivory text-ivory animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-vintagegold p-1.5 rounded-full text-charcoal shadow-sm">
            <Compass className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-6"
        >
          <h2 className="font-cormorant font-bold text-4xl sm:text-6xl text-charcoal tracking-tight">
            {finalDestination.heading}
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-burgundy font-normal">
            "{finalDestination.subheading}"
          </p>
        </motion.div>

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#FFFDF9]/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-journal border border-[#DEC7AA] max-w-2xl mx-auto my-6 paper-texture"
        >
          <p className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed whitespace-pre-line mb-8">
            {finalDestination.message}
          </p>

          <div className="pt-6 border-t border-cream">
            <p className="font-cormorant font-bold text-2xl sm:text-4xl text-burgundy tracking-tight">
              {finalDestination.birthdayGreeting}
            </p>
          </div>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          {/* Shower Wishes Celebration Button */}
          <button
            onClick={triggerCelebration}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-800 text-ivory font-serif tracking-wider text-base shadow-rose-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5 border border-burgundy-600 group"
          >
            <PartyPopper className="w-4 h-4 text-vintagegold group-hover:rotate-12 transition-transform" />
            <span>{finalDestination.celebrateButtonText}</span>
            <Sparkles className="w-4 h-4 text-vintagegold" />
          </button>

          {/* Replay Journey Button */}
          <button
            onClick={onReplayStory}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-ivory/90 hover:bg-cream text-charcoal font-serif tracking-wider text-sm border border-cream-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <RotateCcw className="w-4 h-4 text-mutedbrown" />
            <span>{finalDestination.replayButtonText}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
