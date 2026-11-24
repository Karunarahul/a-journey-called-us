import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Camera, Music, Heart, FileCode } from 'lucide-react';

interface PersonalizationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PersonalizationModal: React.FC<PersonalizationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-2xl w-full bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 shadow-2xl border border-cream paper-texture my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-mutedbrown hover:text-burgundy hover:bg-cream/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6 border-b border-cream pb-4">
            <div className="w-10 h-10 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-mono text-dustyrose-dark block">
                CENTRAL CONFIGURATION GUIDE
              </span>
              <h3 className="font-cormorant font-bold text-2xl text-charcoal">
                How to Personalize This Experience
              </h3>
            </div>
          </div>

          {/* Instructions List */}
          <div className="space-y-6 text-sm text-charcoal/90 max-h-[60vh] overflow-y-auto pr-2">
            {/* Guide Item 1: Central File */}
            <div className="p-4 rounded-xl bg-ivory/80 border border-cream">
              <div className="flex items-center gap-2 font-serif font-bold text-burgundy mb-1">
                <BookOpen className="w-4 h-4" />
                <span>1. Edit Everything in One File</span>
              </div>
              <p className="font-sans text-xs text-mutedbrown leading-relaxed mb-2">
                All memories, dates, love notes, polaroid captions, and letter paragraphs are centralized inside:
              </p>
              <code className="text-xs bg-cream/70 text-burgundy px-2 py-1 rounded block font-mono border border-cream-dark">
                src/data/loveStory.ts
              </code>
            </div>

            {/* Guide Item 2: Placeholders for College Memories */}
            <div className="p-4 rounded-xl bg-ivory/80 border border-cream">
              <div className="flex items-center gap-2 font-serif font-bold text-burgundy mb-1">
                <Heart className="w-4 h-4" />
                <span>2. College Days Placeholders</span>
              </div>
              <p className="font-sans text-xs text-mutedbrown leading-relaxed mb-2">
                Under <code className="bg-cream/60 px-1 py-0.5 rounded text-charcoal font-mono">chapter1.placeholders</code>, replace the placeholder text with your real memories:
              </p>
              <ul className="text-xs text-mutedbrown space-y-1 list-disc list-inside">
                <li><strong>First Meeting Date:</strong> e.g., "14th September 2021"</li>
                <li><strong>College Name:</strong> e.g., "St. Xavier's Campus & Library"</li>
                <li><strong>First Conversation:</strong> e.g., "Borrowing notes after class"</li>
                <li><strong>First Unforgettable Moment:</strong> e.g., "That rainy evening in the canteen"</li>
              </ul>
            </div>

            {/* Guide Item 3: Photos */}
            <div className="p-4 rounded-xl bg-ivory/80 border border-cream">
              <div className="flex items-center gap-2 font-serif font-bold text-burgundy mb-1">
                <Camera className="w-4 h-4" />
                <span>3. Replace With Your Real Photos</span>
              </div>
              <p className="font-sans text-xs text-mutedbrown leading-relaxed mb-2">
                In <code className="bg-cream/60 px-1 py-0.5 rounded text-charcoal font-mono">loveStory.chapter2.photos</code>, you can:
              </p>
              <ul className="text-xs text-mutedbrown space-y-1 list-disc list-inside">
                <li>Put your own photos in the <code className="bg-cream/60 px-1 py-0.5 rounded text-charcoal font-mono">public/photos/</code> folder.</li>
                <li>Change the <code className="bg-cream/60 px-1 py-0.5 rounded text-charcoal font-mono">url: "/photos/my-photo.jpg"</code> and write your personal captions.</li>
                <li>Or paste any high-resolution image URLs directly!</li>
              </ul>
            </div>

            {/* Guide Item 4: Background Music */}
            <div className="p-4 rounded-xl bg-ivory/80 border border-cream">
              <div className="flex items-center gap-2 font-serif font-bold text-burgundy mb-1">
                <Music className="w-4 h-4" />
                <span>4. Background Music Customization</span>
              </div>
              <p className="font-sans text-xs text-mutedbrown leading-relaxed">
                By default, a gentle romantic Web Audio acoustic melody plays smoothly on click. To use your special song, place your MP3 file in <code className="bg-cream/60 px-1 py-0.5 rounded text-charcoal font-mono">public/song.mp3</code> and set <code className="bg-cream/60 px-1 py-0.5 rounded text-charcoal font-mono">bgMusicUrl: "/song.mp3"</code> in <code className="bg-cream/60 px-1 py-0.5 rounded text-charcoal font-mono">src/data/loveStory.ts</code>.
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-6 pt-4 border-t border-cream flex items-center justify-between">
            <span className="font-serif italic text-xs text-mutedbrown">
              Handcrafted with endless love for Tejjaaaa ❤️
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-burgundy hover:bg-burgundy-800 text-ivory font-serif text-xs font-semibold shadow-sm transition-colors"
            >
              Got It, Let's Return
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
