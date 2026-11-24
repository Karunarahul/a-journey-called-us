import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Pin, X, Send } from 'lucide-react';
import { loveStory, type LoveNote } from '../data/loveStory';

export const LoveNotesSection: React.FC = () => {
  const { loveNotes } = loveStory;
  const [selectedNote, setSelectedNote] = useState<LoveNote | null>(null);

  return (
    <section id="notes" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <Pin className="w-3.5 h-3.5" />
            <span>Tucked In My Pocket</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-3xl sm:text-5xl text-charcoal tracking-tight leading-tight"
          >
            {loveNotes.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-mutedbrown mt-2"
          >
            {loveNotes.subtitle}
          </motion.p>
        </div>

        {/* Romantic Corkboard / Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {loveNotes.notes.map((note, index) => {
            const rotations = ['rotate-[-2deg]', 'rotate-[2.5deg]', 'rotate-[-1.5deg]', 'rotate-[3deg]', 'rotate-[-2.8deg]', 'rotate-[1.8deg]'];
            const rotClass = rotations[index % rotations.length];

            return (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
                onClick={() => setSelectedNote(note)}
                className={`relative bg-[#FFFDF9] rounded-xl p-6 sm:p-7 shadow-journal border border-[#E5D7C2] paper-texture cursor-pointer transition-all duration-300 group ${rotClass}`}
              >
                {/* Washi Tape Strip on Top of Note */}
                <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* Postcard Stamp Emblem */}
                <div className="flex items-center justify-between border-b border-cream pb-3 mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-dustyrose-dark">
                    {note.tag}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-cream/70 border border-dustyrose/50 flex items-center justify-center text-burgundy">
                    <Heart className="w-3 h-3 fill-burgundy text-burgundy" />
                  </div>
                </div>

                {/* Central Primary Note Text */}
                <div className="min-h-[90px] flex items-center justify-center text-center px-2 py-3">
                  <p className="font-handwriting text-2xl sm:text-3xl text-charcoal font-semibold leading-relaxed group-hover:text-burgundy transition-colors">
                    "{note.text}"
                  </p>
                </div>

                {/* Subtitle / Whisper Note */}
                {note.handwrittenNote && (
                  <div className="mt-3 pt-3 border-t border-cream/70 text-center">
                    <p className="font-serif italic text-xs sm:text-sm text-mutedbrown">
                      {note.handwrittenNote}
                    </p>
                  </div>
                )}

                {/* Interactive hint */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-mutedbrown/60">
                  <span className="font-sans italic">Click to hold closer</span>
                  <Sparkles className="w-3 h-3 text-vintagegold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Note Modal for intimate reading */}
        <AnimatePresence>
          {selectedNote && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNote(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-lg w-full bg-[#FFFDF9] rounded-2xl p-8 sm:p-10 shadow-2xl border border-cream paper-texture"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedNote(null)}
                  className="absolute top-4 right-4 p-2 text-mutedbrown hover:text-burgundy transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-burgundy mb-4">
                  <Send className="w-4 h-4" />
                  <span>Keepsake Postcard • For Nannaaaaa ❤️</span>
                </div>

                <div className="my-6 text-center">
                  <p className="font-handwriting text-3xl sm:text-4xl text-burgundy font-bold leading-relaxed mb-4">
                    "{selectedNote.text}"
                  </p>
                  {selectedNote.handwrittenNote && (
                    <p className="font-serif italic text-base sm:text-lg text-charcoal/80 leading-relaxed border-t border-cream pt-4">
                      {selectedNote.handwrittenNote}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-cream flex items-center justify-between text-xs text-mutedbrown">
                  <span className="font-handwriting text-base text-burgundy">
                    Forever tucked in my heart
                  </span>
                  <button
                    onClick={() => setSelectedNote(null)}
                    className="px-4 py-1.5 rounded-full bg-cream/70 hover:bg-cream text-charcoal font-serif text-xs font-semibold transition-colors"
                  >
                    Close Note
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
