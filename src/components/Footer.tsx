import React from 'react';
import { Heart, ArrowUp, Compass, BookOpen } from 'lucide-react';
import { loveStory } from '../data/loveStory';

interface FooterProps {
  onOpenPersonalizeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPersonalizeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal text-ivory pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-burgundy/30 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-burgundy/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-ivory/10 gap-8 text-center md:text-left">
          {/* Brand / Dedication */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-full bg-burgundy flex items-center justify-center text-ivory shadow-wax">
                <Heart className="w-4 h-4 fill-ivory text-ivory" />
              </div>
              <span className="font-cormorant text-2xl font-bold tracking-wider text-ivory">
                Somewhere, It's Always You
              </span>
            </div>
            <p className="font-serif italic text-sm text-cream/80 max-w-md">
              A personal birthday story dedicated to the boy who unknowingly became my favourite destination.
            </p>
            <p className="font-handwriting text-xl text-dustyrose">
              {loveStory.finalPage.centralGreeting}
            </p>
          </div>

          {/* Quick Links & Personalization Help */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenPersonalizeModal}
              className="px-5 py-2.5 rounded-full bg-ivory/10 hover:bg-ivory/20 text-cream text-xs font-serif tracking-wider border border-cream/20 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-vintagegold" />
              <span>Personalization Guide</span>
            </button>

            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-700 text-ivory text-xs font-serif tracking-wider transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Back to Beginning</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4 text-center">
          <div className="flex items-center gap-1.5 font-sans">
            <span>Handcrafted with all my love for</span>
            <span className="text-dustyrose font-medium">{loveStory.names.primaryName}</span>
          </div>

          <div className="flex items-center gap-2 font-serif text-[11px] tracking-wider uppercase text-vintagegold">
            <Compass className="w-3.5 h-3.5" />
            <span>College Days • Present • Forever & Always</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
