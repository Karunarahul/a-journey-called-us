import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';
import { storybookData } from '../data/storybook';
import { BotanicalLaurel, BookFlourish } from './WatercolorAccents';

interface StorybookPageSpreadProps {
  pageIndex: number; // 1 to 7
  onReplay: () => void;
  onNextPage: () => void;
}

export const StorybookPageSpread: React.FC<StorybookPageSpreadProps> = ({
  pageIndex,
  onReplay,
  onNextPage,
}) => {
  const { pages, theLetter, theFinalPage } = storybookData;

  // Page 1 to 5 correspond to pages[0] to pages[4]
  const isLetterPage = pageIndex === 6;
  const isFinalPage = pageIndex === 7;
  const currentPageData = pageIndex >= 1 && pageIndex <= 5 ? pages[pageIndex - 1] : null;

  return (
    <div className="w-full max-w-6xl mx-auto py-6 sm:py-12 px-2 sm:px-6">
      {/* The Open Book Body with Double-Page Spread */}
      <motion.div
        key={pageIndex}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FAF5EC] rounded-2xl shadow-2xl border border-[#C8A97E]/60 overflow-hidden flex flex-col lg:flex-row min-h-[640px] lg:min-h-[740px]"
        style={{
          boxShadow: `
            0 25px 60px -15px rgba(0, 0, 0, 0.75), 
            0 0 0 1px #806B5A, 
            inset 0 0 50px rgba(200, 169, 126, 0.15)
          `,
        }}
      >
        {/* Book Central Crease Shadow on Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 pointer-events-none z-20 book-gutter-left" />
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 pointer-events-none z-20 book-gutter-right" />
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#CBB598] pointer-events-none z-20" />

        {/* ============================================================== */}
        {/* CASE 1: STANDARD CHAPTER PAGES (PAGE 01 TO 05)                */}
        {/* ============================================================== */}
        {currentPageData && (
          <>
            {/* LEFT PAGE: CHAPTER TITLE & NARRATIVE */}
            <div className="lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DEC7AA] relative book-paper">
              <div>
                {/* Chapter Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/50 px-3 py-1 rounded-full border border-[#DEC7AA]">
                    {currentPageData.chapterBadge}
                  </span>
                  <BookFlourish className="w-16 h-4 opacity-70" />
                </div>

                {/* Chapter Title */}
                <h2 className="font-cormorant font-bold text-3xl sm:text-4xl lg:text-5xl text-[#722F3E] tracking-tight leading-tight mb-6">
                  {currentPageData.title}
                </h2>

                {/* Narrative Text */}
                <div className="space-y-4 font-serif text-base sm:text-lg text-[#292522]/90 leading-relaxed">
                  {currentPageData.narrative.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "drop-cap" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Chapter Accent Quote */}
                {currentPageData.quote && (
                  <div className="mt-8 p-4 bg-[#F2E8D8]/60 rounded-xl border-l-3 border-[#722F3E]">
                    <p className="font-cormorant italic text-lg sm:text-xl text-[#722F3E] font-medium leading-snug">
                      "{currentPageData.quote}"
                    </p>
                  </div>
                )}
              </div>

              {/* Left Page Footer Note */}
              <div className="pt-6 mt-6 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A]">
                <span className="font-handwriting text-lg text-[#722F3E]">
                  *{currentPageData.annotation}*
                </span>
                <span>Page 0{currentPageData.pageNumber}A</span>
              </div>
            </div>

            {/* RIGHT PAGE: AUTHENTIC PHOTOGRAPHS INTEGRATED INTO STORYBOOK */}
            <div className="lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between relative book-paper bg-[#FCF8F2]">
              {/* PAGE 01: COLLEGE DAYS PHOTOGRAPHS */}
              {pageIndex === 1 && (
                <div className="flex flex-col justify-center my-auto space-y-6">
                  <div className="relative bg-[#FFFDF9] p-3.5 sm:p-4 rounded-xl shadow-md border border-[#DEC7AA] rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
                    <div className="photo-mount-corner tl" />
                    <div className="photo-mount-corner tr" />
                    <div className="photo-mount-corner bl" />
                    <div className="photo-mount-corner br" />
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={currentPageData.photos[0].url}
                        alt={currentPageData.photos[0].alt}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="pt-2 text-center">
                      <p className="font-handwriting text-xl text-[#722F3E] font-semibold">
                        "{currentPageData.photos[0].caption}"
                      </p>
                      <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                        {currentPageData.photos[0].annotation}
                      </span>
                    </div>
                  </div>

                  {currentPageData.photos[1] && (
                    <div className="relative bg-[#FFFDF9] p-3 rounded-xl shadow-md border border-[#DEC7AA] max-w-xs mx-auto rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                        <img
                          src={currentPageData.photos[1].url}
                          alt={currentPageData.photos[1].alt}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <p className="font-handwriting text-base text-[#292522] text-center pt-1.5 font-medium">
                        {currentPageData.photos[1].caption}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* PAGE 02: OUR LITTLE WORLD (MULTI-PHOTO SCRAPBOOK SPREAD) */}
              {pageIndex === 2 && (
                <div className="flex flex-col justify-center my-auto space-y-4">
                  {/* Top Sand Tunnel Photograph */}
                  <div className="relative bg-[#FFFDF9] p-3 rounded-xl shadow-md border border-[#DEC7AA] rotate-[1.5deg] hover:rotate-0 transition-transform duration-300">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={currentPageData.photos[0].url}
                        alt={currentPageData.photos[0].alt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <p className="font-handwriting text-lg text-[#722F3E] text-center pt-1 font-semibold">
                      "{currentPageData.photos[0].caption}"
                    </p>
                  </div>

                  {/* Middle Row: Motorcycle Journey & Tree Walk */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                      <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                        <img
                          src={currentPageData.photos[1].url}
                          alt={currentPageData.photos[1].alt}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <p className="font-handwriting text-xs text-[#292522] text-center pt-1 leading-tight">
                        Bike road trip with you
                      </p>
                    </div>

                    <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                      <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                        <img
                          src={currentPageData.photos[3].url}
                          alt={currentPageData.photos[3].alt}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <p className="font-handwriting text-xs text-[#292522] text-center pt-1 leading-tight">
                        Walking arm in arm
                      </p>
                    </div>
                  </div>

                  {/* Bottom Laughter Collage */}
                  <div className="relative bg-[#FFFDF9] p-2.5 rounded-lg shadow-sm border border-[#DEC7AA] text-center">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={currentPageData.photos[2].url}
                        alt={currentPageData.photos[2].alt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <span className="font-handwriting text-sm text-[#722F3E] font-medium block pt-1">
                      {currentPageData.photos[2].caption}
                    </span>
                  </div>
                </div>
              )}

              {/* PAGE 03: THE UNEXPECTED ROUTES (RAIN & SUNLIGHT) */}
              {pageIndex === 3 && (
                <div className="flex flex-col justify-center my-auto space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Raincoat misty trek */}
                    <div className="relative bg-[#FFFDF9] p-3 rounded-xl shadow-md border border-[#DEC7AA] rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                      <div className="photo-mount-corner tl" />
                      <div className="photo-mount-corner tr" />
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                        <img
                          src={currentPageData.photos[0].url}
                          alt={currentPageData.photos[0].alt}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <p className="font-handwriting text-sm text-[#722F3E] text-center pt-2 font-semibold">
                        "Raincoats & mist"
                      </p>
                      <span className="font-sans text-[9px] text-[#806B5A] uppercase tracking-wider block text-center">
                        Through the storms
                      </span>
                    </div>

                    {/* Golden summit embrace */}
                    <div className="relative bg-[#FFFDF9] p-3 rounded-xl shadow-md border border-[#DEC7AA] rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                      <div className="photo-mount-corner bl" />
                      <div className="photo-mount-corner br" />
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                        <img
                          src={currentPageData.photos[1].url}
                          alt={currentPageData.photos[1].alt}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <p className="font-handwriting text-sm text-[#722F3E] text-center pt-2 font-semibold">
                        "Finding our smiles"
                      </p>
                      <span className="font-sans text-[9px] text-[#806B5A] uppercase tracking-wider block text-center">
                        Golden summit warmth
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F2E8D8]/70 rounded-xl border border-[#DEC7AA] text-center">
                    <p className="font-handwriting text-xl text-[#722F3E] font-bold">
                      "P.S. You can still be annoying sometimes. But you're my favourite annoying person. ❤️"
                    </p>
                  </div>
                </div>
              )}

              {/* PAGE 04: STILL MY FAVOURITE PERSON (CENTERPIECE EMBRACE) */}
              {pageIndex === 4 && (
                <div className="flex flex-col justify-center my-auto space-y-6">
                  {/* Masterpiece Centerpiece */}
                  <div className="relative bg-[#FFFDF9] p-4 rounded-xl shadow-lg border border-[#DEC7AA] max-w-sm mx-auto rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                    <div className="photo-mount-corner tl" />
                    <div className="photo-mount-corner tr" />
                    <div className="photo-mount-corner bl" />
                    <div className="photo-mount-corner br" />
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={currentPageData.photos[0].url}
                        alt={currentPageData.photos[0].alt}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="pt-3 text-center">
                      <p className="font-handwriting text-2xl text-[#722F3E] font-bold">
                        "{currentPageData.photos[0].caption}"
                      </p>
                      <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-1">
                        {currentPageData.photos[0].annotation}
                      </span>
                    </div>
                  </div>

                  {/* Supporting lakeside cuddle */}
                  {currentPageData.photos[1] && (
                    <div className="relative bg-[#FFFDF9] p-2.5 rounded-lg shadow-sm border border-[#DEC7AA] max-w-xs mx-auto text-center rotate-[-1.5deg]">
                      <div className="aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40">
                        <img
                          src={currentPageData.photos[1].url}
                          alt={currentPageData.photos[1].alt}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <span className="font-handwriting text-sm text-[#806B5A] pt-1 block">
                        {currentPageData.photos[1].caption}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* PAGE 05: THE BIRTHDAY CHAPTER */}
              {pageIndex === 5 && (
                <div className="flex flex-col justify-center my-auto space-y-5">
                  {/* Main Sparkler Cake Birthday Photo */}
                  <div className="relative bg-[#FFFDF9] p-4 rounded-xl shadow-lg border-2 border-[#C8A97E]/70 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
                    <div className="photo-mount-corner tl" />
                    <div className="photo-mount-corner tr" />
                    <div className="photo-mount-corner bl" />
                    <div className="photo-mount-corner br" />
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={currentPageData.photos[0].url}
                        alt={currentPageData.photos[0].alt}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="pt-2 text-center">
                      <p className="font-handwriting text-2xl text-[#722F3E] font-bold">
                        "{currentPageData.photos[0].caption}"
                      </p>
                      <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                        {currentPageData.photos[0].annotation}
                      </span>
                    </div>
                  </div>

                  {/* Midnight Car Celebration */}
                  {currentPageData.photos[1] && (
                    <div className="relative bg-[#FFFDF9] p-2.5 rounded-lg shadow-sm border border-[#DEC7AA] max-w-xs mx-auto text-center rotate-[2deg]">
                      <div className="aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40">
                        <img
                          src={currentPageData.photos[1].url}
                          alt={currentPageData.photos[1].alt}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <span className="font-handwriting text-sm text-[#722F3E] pt-1 block font-medium">
                        Midnight birthday surprise on the car bonnet ❤️
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Right Page Footer */}
              <div className="pt-6 mt-6 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A]">
                <button
                  onClick={onNextPage}
                  className="hover:text-[#722F3E] transition-colors flex items-center gap-1 group"
                >
                  <span>Turn to next page</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">›</span>
                </button>
                <span>Page 0{currentPageData.pageNumber}B</span>
              </div>
            </div>
          </>
        )}

        {/* ============================================================== */}
        {/* CASE 2: THE LETTER — FROM MY HEART TO YOURS                    */}
        {/* ============================================================== */}
        {isLetterPage && (
          <>
            {/* LEFT PAGE: LETTER OPENING & INITIAL PARAGRAPHS */}
            <div className="lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DEC7AA] relative letter-parchment">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/60 px-3 py-1 rounded-full border border-[#DEC7AA]">
                    {theLetter.chapterBadge}
                  </span>
                  <BookFlourish className="w-16 h-4 opacity-70" />
                </div>

                <h3 className="font-handwriting text-3xl sm:text-4xl text-[#722F3E] font-bold mb-6">
                  {theLetter.salutation}
                </h3>

                <div className="space-y-4 font-serif text-base sm:text-lg text-[#292522] leading-[32px]">
                  {theLetter.paragraphs.slice(0, 6).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DEC7AA]/60 text-right text-xs font-serif text-[#806B5A]">
                <span>The Letter • Part I</span>
              </div>
            </div>

            {/* RIGHT PAGE: LETTER CONCLUSION, POLAROID & WAX SEAL */}
            <div className="lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between relative letter-parchment">
              <div>
                <div className="space-y-4 font-serif text-base sm:text-lg text-[#292522] leading-[32px] mb-8">
                  {theLetter.paragraphs.slice(6).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Central Greetings */}
                <div className="pt-4 pb-2 border-t border-[#DEC7AA]/70">
                  <p className="font-cormorant font-bold text-2xl sm:text-3xl text-[#722F3E] italic">
                    {theLetter.birthdayGreeting}
                  </p>
                  <p className="font-handwriting text-3xl sm:text-4xl text-[#722F3E] font-bold mt-2">
                    {theLetter.loveDeclaration}
                  </p>
                </div>

                {/* Tipped-in Keepsake Polaroid & Signature */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Keepsake Selfie Polaroid */}
                  <div className="relative bg-[#FFFDF9] p-2.5 rounded-lg shadow-md border border-[#DEC7AA] w-36 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                    <div className="washi-tape -top-2 left-1/2 -translate-x-1/2 w-10 bg-[#C8A97E]/30" />
                    <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={theLetter.photo.url}
                        alt={theLetter.photo.alt}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="font-handwriting text-xs text-[#722F3E] text-center pt-1 font-bold">
                      {theLetter.photo.caption}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-handwriting text-3xl sm:text-4xl text-[#722F3E] font-bold">
                      {theLetter.signature}
                    </p>
                    {/* Authentic Wax Seal */}
                    <div className="mt-3 inline-flex items-center gap-2 p-2 px-3 rounded-full bg-[#EADCC8]/60 border border-[#DEC7AA]">
                      <div className="w-8 h-8 rounded-full bg-[#722F3E] shadow-wax flex items-center justify-center text-[#FBF7EE]">
                        <Heart className="w-4 h-4 fill-[#FBF7EE]" />
                      </div>
                      <span className="font-serif text-[10px] tracking-wider text-[#722F3E] uppercase font-bold">
                        {theLetter.waxSealStamp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A]">
                <button
                  onClick={onNextPage}
                  className="hover:text-[#722F3E] transition-colors flex items-center gap-1 group"
                >
                  <span>To Final Page</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">›</span>
                </button>
                <span>The Letter • Part II</span>
              </div>
            </div>
          </>
        )}

        {/* ============================================================== */}
        {/* CASE 3: THE FINAL PAGE — OUR STORY IS STILL GOING PLACES       */}
        {/* ============================================================== */}
        {isFinalPage && (
          <>
            {/* LEFT PAGE: FINAL HEADING & AFFIRMATION */}
            <div className="lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DEC7AA] relative book-paper">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/50 px-3 py-1 rounded-full border border-[#DEC7AA]">
                    {theFinalPage.chapterBadge}
                  </span>
                  <BookFlourish className="w-16 h-4 opacity-70" />
                </div>

                <h2 className="font-cormorant font-bold text-4xl sm:text-5xl lg:text-6xl text-[#722F3E] tracking-tight leading-tight mb-4">
                  {theFinalPage.title}
                </h2>

                <p className="font-serif italic text-xl sm:text-2xl text-[#292522] mb-8 font-normal">
                  "{theFinalPage.supportingText}"
                </p>

                <div className="p-6 bg-[#F2E8D8]/70 rounded-2xl border-l-4 border-[#722F3E] mb-8">
                  <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#722F3E]">
                    {theFinalPage.birthdayGreeting}
                  </h3>
                  <p className="font-handwriting text-2xl text-[#806B5A] mt-2">
                    *{theFinalPage.closing}*
                  </p>
                </div>
              </div>

              {/* Action: Replay from Cover */}
              <div className="pt-6 border-t border-[#DEC7AA]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={onReplay}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#722F3E] text-[#FBF7EE] font-serif text-sm hover:bg-[#5A2531] transition-all shadow-md group"
                >
                  <RotateCcw className="w-4 h-4 text-[#C8A97E] group-hover:-rotate-90 transition-transform" />
                  <span>{theFinalPage.replayButtonText}</span>
                  <Sparkles className="w-4 h-4 text-[#C8A97E]" />
                </button>
                <span className="font-serif text-xs text-[#806B5A] italic">
                  Volume I • A Journey Called Us
                </span>
              </div>
            </div>

            {/* RIGHT PAGE: MAJESTIC MOUNTAIN SUMMIT DESTINATION PHOTOGRAPH */}
            <div className="lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between relative book-paper bg-[#FCF8F2]">
              <div className="my-auto flex flex-col items-center">
                <div className="relative bg-[#FFFDF9] p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-[#C8A97E]/70 max-w-md w-full">
                  <div className="photo-mount-corner tl" />
                  <div className="photo-mount-corner tr" />
                  <div className="photo-mount-corner bl" />
                  <div className="photo-mount-corner br" />
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={theFinalPage.photo.url}
                      alt={theFinalPage.photo.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="pt-3 text-center">
                    <p className="font-handwriting text-2xl sm:text-3xl text-[#722F3E] font-bold">
                      "{theFinalPage.photo.caption}"
                    </p>
                    <span className="font-sans text-[11px] text-[#806B5A] uppercase tracking-wider block mt-1">
                      {theFinalPage.photo.annotation}
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <BotanicalLaurel className="w-40 h-8 opacity-80 mx-auto" />
                  <p className="font-handwriting text-xl text-[#722F3E] font-bold mt-1">
                    Forever Your Girl ❤️
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DEC7AA]/60 text-right text-xs font-serif text-[#806B5A]">
                <span>The End • Until Our Next Adventure</span>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
