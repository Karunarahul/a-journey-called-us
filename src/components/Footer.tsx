import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#242321] text-[#FCFAF6] py-14 px-4 sm:px-6 lg:px-8 border-t border-[#3A3835]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h4 className="font-cormorant font-bold text-2xl tracking-tight text-[#FCFAF6]">
            SOMEWHERE, IT'S ALWAYS YOU.
          </h4>
          <p className="font-sans text-xs uppercase tracking-widest text-[#A18F7E] mt-1">
            A birthday story for {loveStory.names.primaryName}
          </p>
        </div>

        <div className="text-center">
          <p className="font-handwriting text-xl text-[#D7B8B1] flex items-center justify-center gap-1.5">
            Made with all my love <Heart className="w-4 h-4 fill-[#D7B8B1] text-[#D7B8B1]" /> Forever your girl ❤️
          </p>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3A3835] text-xs font-sans text-[#A18F7E] hover:text-[#FCFAF6] hover:border-[#D7B8B1] transition-all cursor-pointer"
          >
            <span>Back to beginning</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Subtle Divider & Minimal Footer Credit */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-[#3A3835]/70 text-center">
        <p className="font-sans text-xs sm:text-[13px] tracking-wider text-[#A18F7E] font-normal select-none">
          designed by Rahul
        </p>
      </div>
    </footer>
  );
};
