import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, X, ChevronLeft, ChevronRight, HelpCircle, Film } from 'lucide-react';
import { loveStory, type PolaroidPhoto } from '../data/loveStory';

interface MemoryAlbumProps {
  onOpenPersonalizeModal?: () => void;
}

export const MemoryAlbumSection: React.FC<MemoryAlbumProps> = ({ onOpenPersonalizeModal }) => {
  const { chapter2 } = loveStory;
  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidPhoto | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPhotos = selectedCategory === 'all'
    ? chapter2.photos
    : chapter2.photos.filter((p) => p.category === selectedCategory);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = chapter2.photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % chapter2.photos.length;
    setSelectedPhoto(chapter2.photos[nextIndex]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = chapter2.photos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + chapter2.photos.length) % chapter2.photos.length;
    setSelectedPhoto(chapter2.photos[prevIndex]);
  };

  return (
    <section id="chapter2" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cream/20">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{chapter2.badge} • OUR LITTLE WORLD</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-4xl sm:text-6xl text-charcoal tracking-tight leading-tight"
          >
            {chapter2.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-lg sm:text-2xl text-burgundy mt-2 font-normal"
          >
            "{chapter2.subtitle}"
          </motion.p>
        </div>

        {/* Chapter 02 Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-[#FFFDF9] rounded-2xl shadow-journal border border-[#DEC7AA] p-8 sm:p-10 mb-12 paper-texture relative"
        >
          <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-dustyrose-dark mb-4">
            <Film className="w-4 h-4 text-burgundy" />
            <span>Memory Archive • Our Shared Jokes, Language & Madness</span>
          </div>

          <div className="space-y-4 text-charcoal/90 font-serif text-lg leading-relaxed">
            {chapter2.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Chapter Accent Quote */}
          <div className="mt-6 pt-5 border-t border-cream flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="font-handwriting text-2xl text-burgundy font-bold">
              *{chapter2.footerNote}*
            </p>
            {onOpenPersonalizeModal && (
              <button
                onClick={onOpenPersonalizeModal}
                className="text-xs text-burgundy hover:text-burgundy-800 underline font-medium flex items-center gap-1 self-start sm:self-center"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Replace with your real photos</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'All Snaps (20)' },
            { id: 'college', label: 'College Days' },
            { id: 'adventures', label: 'Adventures & Treks' },
            { id: 'little-moments', label: 'Little Moments' },
            { id: 'celebrations', label: 'Birthday & Celebrations' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all ${
                selectedCategory === cat.id
                  ? 'bg-burgundy text-ivory font-semibold shadow-sm'
                  : 'bg-ivory text-mutedbrown border border-cream hover:border-dustyrose'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredPhotos.map((photo, index) => {
            const rotations = ['rotate-[-3deg]', 'rotate-[2deg]', 'rotate-[-2deg]', 'rotate-[3deg]', 'rotate-[-1.5deg]', 'rotate-[2.5deg]'];
            const rotClass = rotations[index % rotations.length];

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 20 }}
                onClick={() => setSelectedPhoto(photo)}
                className={`relative bg-[#FFFDF9] rounded-xl p-4 sm:p-5 shadow-polaroid border border-[#E8DFC8] cursor-pointer transition-all duration-300 group ${rotClass}`}
              >
                {/* Washi Tape at top */}
                <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100" />

                {/* Photo Frame - Authentic vertical Polaroid aspect */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-cream/50 mb-4 border border-[#DEC7AA]/40 shadow-inner">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover object-center filter contrast-[0.98] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

                  {/* Date Tag */}
                  {photo.dateTag && (
                    <span className="absolute bottom-2 right-2 text-[9px] font-mono tracking-wider bg-charcoal/70 text-ivory px-2 py-0.5 rounded backdrop-blur-sm">
                      {photo.dateTag}
                    </span>
                  )}
                </div>

                {/* Handwritten Polaroid Caption */}
                <div className="pt-1 text-center min-h-[50px] flex flex-col justify-center">
                  <p className="font-handwriting text-xl sm:text-2xl text-charcoal font-semibold leading-snug group-hover:text-burgundy transition-colors">
                    {photo.caption}
                  </p>
                  {photo.locationTag && (
                    <span className="font-sans text-[10px] text-mutedbrown tracking-wider uppercase mt-1">
                      {photo.locationTag}
                    </span>
                  )}
                </div>

                {/* Bottom subtle heart */}
                <div className="mt-2 pt-2 border-t border-cream/50 flex items-center justify-between text-[11px] text-mutedbrown/60">
                  <span className="font-serif italic text-[10px]">Photo #{photo.id}</span>
                  <Heart className="w-3 h-3 text-dustyrose group-hover:fill-burgundy group-hover:text-burgundy transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Polaroid Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 shadow-2xl border border-cream paper-texture max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-3 right-3 p-2 text-mutedbrown hover:text-burgundy transition-colors z-20 rounded-full bg-cream/60 hover:bg-cream"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left/Right Navigation */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ivory/90 text-charcoal hover:bg-cream shadow-md transition-colors z-20"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ivory/90 text-charcoal hover:bg-cream shadow-md transition-colors z-20"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Polaroid Large View with adaptive aspect ratio */}
                <div className="relative max-h-[62vh] w-full overflow-hidden rounded-lg bg-cream/30 mb-4 border border-cream-dark flex items-center justify-center p-2">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.caption}
                    className="max-h-[58vh] w-auto max-w-full object-contain rounded-md shadow-md"
                  />
                  <div className="absolute inset-0 paper-texture opacity-25 pointer-events-none" />
                </div>

                {/* Caption Details */}
                <div className="text-center space-y-1.5">
                  <p className="font-handwriting text-2xl sm:text-3xl text-burgundy font-bold">
                    "{selectedPhoto.caption}"
                  </p>
                  <div className="flex items-center justify-center gap-3 text-xs text-mutedbrown">
                    {selectedPhoto.dateTag && <span>{selectedPhoto.dateTag}</span>}
                    {selectedPhoto.dateTag && selectedPhoto.locationTag && <span>•</span>}
                    {selectedPhoto.locationTag && <span>{selectedPhoto.locationTag}</span>}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-5 pt-3 border-t border-cream flex items-center justify-between text-xs text-mutedbrown">
                  <span className="font-serif italic">Dedicated to {loveStory.names.primaryName}</span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-4 py-1.5 rounded-full bg-burgundy text-ivory font-serif text-xs hover:bg-burgundy-800 transition-colors"
                  >
                    Close Polaroid
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
