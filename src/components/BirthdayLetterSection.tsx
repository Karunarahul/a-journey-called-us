import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Copy, Check, Printer, Stamp } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const BirthdayLetterSection: React.FC = () => {
  const { birthdayLetter, names } = loveStory;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = [
      birthdayLetter.salutation,
      '',
      ...birthdayLetter.paragraphs,
      '',
      birthdayLetter.birthdayGreeting1,
      '',
      birthdayLetter.loveDeclaration,
      '',
      birthdayLetter.signature,
    ].join('\n\n');

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="letter" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cream/30">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <Feather className="w-3.5 h-3.5" />
            <span>{birthdayLetter.badge} • FROM MY HEART TO YOURS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-4xl sm:text-6xl text-charcoal tracking-tight leading-tight"
          >
            {birthdayLetter.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-lg sm:text-2xl text-burgundy mt-2 font-normal"
          >
            "{birthdayLetter.subtitle}"
          </motion.p>
        </div>

        {/* Vintage Letter Stationery Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-2xl shadow-journal border border-[#DEC7AA] paper-texture p-8 sm:p-14 md:p-16 overflow-hidden"
          style={{
            backgroundImage: `repeating-linear-gradient(#FFFDF9 0px, #FFFDF9 35px, rgba(217, 166, 160, 0.12) 36px)`,
          }}
        >
          {/* Letter Top Stamp & Monogram */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-cream/90 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-ivory shadow-wax border-2 border-vintagegold/30">
                <Heart className="w-6 h-6 fill-ivory text-ivory" />
              </div>
              <div>
                <span className="font-serif text-xs uppercase tracking-widest text-dustyrose-dark block">
                  PERSONAL BIRTHDAY EPISTLE
                </span>
                <span className="font-cormorant italic text-lg sm:text-xl font-bold text-charcoal">
                  Written for {names.primaryName}
                </span>
              </div>
            </div>

            {/* Actions: Copy & Print */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-full bg-ivory hover:bg-cream border border-cream text-charcoal text-xs font-serif flex items-center gap-1.5 transition-colors shadow-sm"
                title="Copy entire letter text"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-mutedbrown" />
                    <span>Copy Letter</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-full bg-ivory hover:bg-cream border border-cream text-charcoal text-xs font-serif flex items-center gap-1.5 transition-colors shadow-sm"
                title="Print or save as physical keepsake"
              >
                <Printer className="w-3.5 h-3.5 text-mutedbrown" />
                <span>Print Keepsake</span>
              </button>
            </div>
          </div>

          {/* Letter Body: Salutation */}
          <div className="mb-8">
            <h3 className="font-handwriting text-3xl sm:text-4xl text-burgundy font-bold">
              {birthdayLetter.salutation}
            </h3>
          </div>

          {/* Letter Body: Paragraphs */}
          <div className="space-y-6 text-charcoal/90 leading-relaxed font-serif text-lg sm:text-xl">
            {birthdayLetter.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "font-cormorant font-bold text-2xl text-burgundy italic"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Letter Sign-off & Greetings */}
          <div className="mt-12 pt-8 border-t border-cream/90 space-y-4">
            <p className="font-cormorant font-bold text-2xl sm:text-3xl text-burgundy italic">
              {birthdayLetter.birthdayGreeting1}
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-burgundy font-bold">
              {birthdayLetter.loveDeclaration}
            </p>
          </div>

          {/* Letter Sign-off with Keepsake Polaroid & Wax Seal */}
          <div className="mt-10 pt-6 border-t border-cream/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {/* Pinned Keepsake Polaroid in Letter */}
              <div className="relative bg-[#FFFDF9] rounded-xl p-2.5 shadow-polaroid border border-[#DEC7AA] w-36 rotate-[-3deg] hover:rotate-0 transition-transform duration-300 hidden sm:block">
                <div className="washi-tape -top-2 left-1/2 -translate-x-1/2 w-10 bg-vintagegold/30" />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-cream/50 mb-1.5 border border-[#DEC7AA]/40 shadow-inner">
                  <img
                    src="/photos/couple-photo-01.webp"
                    alt="Tejja and me forever"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <p className="font-handwriting text-xs text-burgundy font-bold">
                    Forever Yours ❤️
                  </p>
                </div>
              </div>

              <div>
                <p className="font-handwriting text-3xl sm:text-4xl text-burgundy font-bold">
                  {birthdayLetter.signature}
                </p>
                <span className="text-xs font-serif text-mutedbrown italic mt-1 block">
                  Sealed with all my love, always.
                </span>
              </div>
            </div>

            {/* Embossed Wax Seal Badge */}
            <div className="flex items-center gap-3 self-end sm:self-center p-3 rounded-2xl bg-cream/40 border border-[#DEC7AA]">
              <div className="w-12 h-12 rounded-full bg-burgundy shadow-wax flex items-center justify-center text-ivory border-2 border-vintagegold/30">
                <Stamp className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="text-[10px] tracking-widest uppercase font-mono text-dustyrose-dark block">
                  AUTHENTIC LOVE SEAL
                </span>
                <span className="font-serif text-xs text-charcoal font-semibold">
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
