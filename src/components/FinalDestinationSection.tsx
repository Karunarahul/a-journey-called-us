import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw, Compass, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveStory } from '../data/loveStory';

interface FinalDestinationProps {
  onReplayStory: () => void;
}

export const FinalDestinationSection: React.FC<FinalDestinationProps> = ({ onReplayStory }) => {
  const { finalPage } = loveStory;

  const triggerCelebration = () => {
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#722F3E', '#D9A6A0', '#EADCC8', '#C8A97E', '#FAF6F0'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#722F3E', '#D9A6A0', '#C8A97E'],
      });
      confetti({
        particleCount: 65,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#722F3E', '#D9A6A0', '#C8A97E'],
      });
    }, 250);
  };

  return (
    <section id="destination" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-ivory">
      {/* Cinematic Mountain Destination Visual with Vintage Sepia */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/couple-photo-15.webp"
          alt="Our favourite destination"
          className="w-full h-full object-cover object-top filter brightness-[0.8] sepia-[0.35] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/88 to-ivory/75" />
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
          <span className="text-xs uppercase font-serif tracking-widest text-burgundy bg-burgundy/10 px-3.5 py-1 rounded-full border border-burgundy/20 inline-block mb-2">
            {finalPage.badge}
          </span>
          <h2 className="font-cormorant font-bold text-4xl sm:text-6xl text-charcoal tracking-tight">
            {finalPage.title}
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-burgundy font-normal">
            "{finalPage.subtitle}"
          </p>
        </motion.div>

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-journal border border-[#DEC7AA] max-w-2xl mx-auto my-6 paper-texture"
        >
          {/* List of Mores */}
          <div className="grid grid-cols-2 gap-3 mb-8 text-left max-w-md mx-auto">
            {finalPage.moreItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm sm:text-base font-serif text-charcoal">
                <span className="w-2 h-2 rounded-full bg-burgundy" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="font-serif italic text-base sm:text-lg text-mutedbrown-dark mb-6">
            And hopefully, a million more reasons to smile together.
          </p>

          {/* Core Affirmation */}
          <div className="py-6 border-y border-cream/90 my-6">
            <p className="font-cormorant font-bold text-2xl sm:text-4xl text-burgundy leading-snug">
              "{finalPage.coreAffirmation}"
            </p>
          </div>

          {/* Central Birthday Greeting */}
          <div className="pt-2">
            <h3 className="font-cormorant font-bold text-2xl sm:text-4xl text-charcoal tracking-tight">
              {finalPage.centralGreeting}
            </h3>
            <p className="font-handwriting text-2xl text-mutedbrown mt-4">
              *{finalPage.partingThought}*
            </p>
            <div className="mt-4 pt-4 border-t border-cream/60">
              <p className="font-handwriting text-2xl text-burgundy font-bold whitespace-pre-line">
                {finalPage.signOff}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          {/* Shower Wishes Celebration Button */}
          <button
            onClick={triggerCelebration}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-800 text-ivory font-serif tracking-wider text-base shadow-rose-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5 border border-burgundy-600 group"
          >
            <PartyPopper className="w-4 h-4 text-vintagegold group-hover:rotate-12 transition-transform" />
            <span>{finalPage.celebrateButtonText}</span>
            <Sparkles className="w-4 h-4 text-vintagegold" />
          </button>

          {/* Replay Journey Button */}
          <button
            onClick={onReplayStory}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-ivory/90 hover:bg-cream text-charcoal font-serif tracking-wider text-sm border border-cream-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <RotateCcw className="w-4 h-4 text-mutedbrown" />
            <span>{finalPage.replayButtonText}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
