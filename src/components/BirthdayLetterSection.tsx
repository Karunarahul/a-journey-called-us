import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Copy, Check, Printer, Stamp } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const BirthdayLetterSection: React.FC = () => {
  const { birthdayLetter } = loveStory;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = [
      birthdayLetter.salutation,
      '',
      ...birthdayLetter.paragraphs,
      '',
      birthdayLetter.closing,
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
            <span>The Heart of Everything</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-3xl sm:text-5xl text-charcoal tracking-tight leading-tight"
          >
            A Letter For Your Birthday
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-mutedbrown mt-2"
          >
            Words straight from my heart to yours on your special day
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
                  Written for Nannaaaaa ❤️
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
                  idx === birthdayLetter.paragraphs.length - 1
                    ? "font-cormorant font-bold text-2xl sm:text-3xl text-burgundy pt-4 italic"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Letter Sign-off with Wax Seal */}
          <div className="mt-14 pt-8 border-t border-cream/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-handwriting text-2xl text-mutedbrown">
                {birthdayLetter.closing}
              </p>
              <p className="font-handwriting text-3xl sm:text-4xl text-burgundy font-bold mt-1">
                {birthdayLetter.signature}
              </p>
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
