import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { useGallery } from '../context/GalleryContext';

export const BirthdayLetter: React.FC = () => {
  const { birthdayLetter } = loveStory;
  const { openLightbox } = useGallery();

  return (
    <section
      id="letter"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#E5DFD4]/60 relative overflow-hidden"
    >
      {/* Subtle Warm Ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#EFEBE2]/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#D7B8B1]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-[#783D48] font-bold block"
          >
            THE EMOTIONAL CENTERPIECE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-cormorant font-bold text-3xl sm:text-5xl md:text-6xl text-[#242321] tracking-tight"
          >
            {birthdayLetter.heading}
          </motion.h2>
        </div>

        {/* The Letter Parchment Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#FCFAF6] rounded-3xl p-6 sm:p-12 md:p-16 shadow-2xl border border-[#E5DFD4] letter-stationery"
        >
          {/* Subtle Decorative Header Stamp */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5DFD4]/80">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#A18F7E] font-medium">
              PERSONAL & CONFIDENTIAL
            </span>
            <span className="font-handwriting text-base text-[#783D48]">
              Sealed with all my love ❤️
            </span>
          </div>

          {/* Salutation */}
          <h3 className="font-handwriting text-3xl sm:text-4xl text-[#783D48] font-bold mb-8">
            {birthdayLetter.salutation}
          </h3>

          {/* Letter Body Paragraphs */}
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#242321] leading-[32px]">
            {birthdayLetter.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Special Birthday Greeting — PRESERVED INTENTIONALLY */}
          <div className="mt-10 pt-6 pb-4 border-t border-[#E5DFD4]">
            <p className="font-cormorant font-bold text-2xl sm:text-3xl text-[#783D48] italic leading-snug">
              {birthdayLetter.birthdayGreeting}
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#783D48] font-bold mt-2">
              {birthdayLetter.loveDeclaration}
            </p>
          </div>

          {/* Signature, Keepsake Polaroid & Wax Seal */}
          <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Keepsake Polaroid */}
            {birthdayLetter.photo && (
              <div
                onClick={() => openLightbox(birthdayLetter.photo)}
                role="button"
                tabIndex={0}
                className="group relative bg-[#FFFDF9] p-3 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-[#E5DFD4] w-36 sm:w-44 rotate-[-2.5deg] shrink-0 cursor-pointer"
                title="Click to view our keepsake photo in full screen"
              >
                <div className="washi-tape -top-2 left-1/2 -translate-x-1/2 w-12 bg-[#C8A97E]/30" />
                <div className={`${birthdayLetter.photo.aspectRatio} w-full overflow-hidden rounded bg-[#EFEBE2]/40 shadow-inner`}>
                  <img
                    src={birthdayLetter.photo.url}
                    alt={birthdayLetter.photo.alt}
                    style={{ objectPosition: birthdayLetter.photo.objectPosition }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="font-handwriting text-xs sm:text-sm text-[#783D48] text-center pt-2 font-bold flex items-center justify-center gap-1">
                  <span>{birthdayLetter.photo.caption}</span>
                  <Heart className="w-3 h-3 fill-[#783D48] text-[#783D48]" />
                </p>
              </div>
            )}

            {/* Handwritten Signature & Wax Seal */}
            <div className="text-center sm:text-right space-y-3">
              <p className="font-handwriting text-3xl sm:text-4xl text-[#783D48] font-bold">
                {birthdayLetter.signature}
              </p>

              {/* Crimson Wax Seal Stamp */}
              <div className="inline-flex items-center gap-2.5 p-2 px-4 rounded-full bg-[#EFEBE2]/70 border border-[#E5DFD4]">
                <div className="w-8 h-8 rounded-full bg-[#783D48] shadow-md flex items-center justify-center text-[#FCFAF6]">
                  <Heart className="w-4 h-4 fill-[#FCFAF6]" />
                </div>
                <span className="font-sans text-[10px] tracking-wider text-[#783D48] uppercase font-bold">
                  {birthdayLetter.waxSealStamp}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
