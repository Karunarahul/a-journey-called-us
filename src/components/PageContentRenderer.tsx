import React from 'react';
import { storybookData } from '../data/storybook';
import { BookFlourish, BotanicalLaurel } from './WatercolorAccents';
import { RotateCcw, Sparkles, Heart } from 'lucide-react';

interface PageContentRendererProps {
  pageIndex: number; // 1 to 7
  side: 'left' | 'right';
  onReplay?: () => void;
  onNextPage?: () => void;
}

export const PageContentRenderer: React.FC<PageContentRendererProps> = ({
  pageIndex,
  side,
  onReplay,
  onNextPage,
}) => {
  const { pages, theLetter, theFinalPage } = storybookData;
  const isLeft = side === 'left';
  const pageData = pageIndex >= 1 && pageIndex <= 5 ? pages[pageIndex - 1] : null;

  // ==============================================================
  // SPREAD 1 TO 5: STANDARD CHAPTER PAGES
  // ==============================================================
  if (pageData) {
    if (isLeft) {
      return (
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Chapter Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/60 px-3 py-1 rounded-full border border-[#DEC7AA]">
                {pageData.chapterBadge}
              </span>
              <BookFlourish className="w-14 h-4 opacity-70" />
            </div>

            {/* Chapter Title */}
            <h2 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#722F3E] tracking-tight leading-tight mb-5">
              {pageData.title}
            </h2>

            {/* Narrative Body with Drop Cap */}
            <div className="space-y-4 font-serif text-base sm:text-lg text-[#292522]/90 leading-relaxed">
              {pageData.narrative.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "drop-cap" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Chapter Quote */}
            {pageData.quote && (
              <div className="mt-6 p-4 bg-[#F2E8D8]/70 rounded-xl border-l-4 border-[#722F3E]">
                <p className="font-cormorant italic text-lg sm:text-xl text-[#722F3E] font-medium leading-snug">
                  "{pageData.quote}"
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 text-xs font-serif text-[#806B5A]">
            <span className="font-handwriting text-lg text-[#722F3E]">
              *{pageData.annotation}*
            </span>
          </div>
        </div>
      );
    } else {
      // RIGHT SIDE OF CHAPTER PAGES
      return (
        <div className="flex flex-col justify-between h-full">
          {/* Page 1 Right: College Memories */}
          {pageIndex === 1 && (
            <div className="space-y-5 my-auto">
              <div className="relative bg-[#FFFDF9] p-3 sm:p-4 rounded-xl shadow-md border border-[#DEC7AA] rotate-[-1.5deg]">
                <div className="photo-mount-corner tl" />
                <div className="photo-mount-corner tr" />
                <div className="photo-mount-corner bl" />
                <div className="photo-mount-corner br" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                  <img
                    src={pageData.photos[0].url}
                    alt={pageData.photos[0].alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="pt-2 text-center">
                  <p className="font-handwriting text-xl text-[#722F3E] font-semibold">
                    "{pageData.photos[0].caption}"
                  </p>
                  <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                    {pageData.photos[0].annotation}
                  </span>
                </div>
              </div>

              {pageData.photos[1] && (
                <div className="relative bg-[#FFFDF9] p-2.5 rounded-lg shadow-sm border border-[#DEC7AA] max-w-xs mx-auto rotate-[2deg]">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={pageData.photos[1].url}
                      alt={pageData.photos[1].alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-handwriting text-sm text-[#292522] text-center pt-1 font-medium">
                    {pageData.photos[1].caption}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Page 2 Right: Our Little World Scrapbook */}
          {pageIndex === 2 && (
            <div className="space-y-3.5 my-auto">
              <div className="relative bg-[#FFFDF9] p-2.5 rounded-xl shadow-md border border-[#DEC7AA] rotate-[1.5deg]">
                <div className="aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                  <img
                    src={pageData.photos[0].url}
                    alt={pageData.photos[0].alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="font-handwriting text-base text-[#722F3E] text-center pt-1 font-semibold">
                  "{pageData.photos[0].caption}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[-2deg]">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={pageData.photos[1].url}
                      alt={pageData.photos[1].alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-handwriting text-[11px] text-[#292522] text-center pt-1 leading-tight">
                    Bike road trip with you
                  </p>
                </div>

                <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[2deg]">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={pageData.photos[3].url}
                      alt={pageData.photos[3].alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-handwriting text-[11px] text-[#292522] text-center pt-1 leading-tight">
                    Walking arm in arm
                  </p>
                </div>
              </div>

              <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] text-center">
                <div className="aspect-[16/9] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                  <img
                    src={pageData.photos[2].url}
                    alt={pageData.photos[2].alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="font-handwriting text-xs text-[#722F3E] font-medium block pt-1">
                  {pageData.photos[2].caption}
                </span>
              </div>
            </div>
          )}

          {/* Page 3 Right: The Unexpected Routes */}
          {pageIndex === 3 && (
            <div className="space-y-5 my-auto">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="relative bg-[#FFFDF9] p-2.5 rounded-xl shadow-md border border-[#DEC7AA] rotate-[-2deg]">
                  <div className="photo-mount-corner tl" />
                  <div className="photo-mount-corner tr" />
                  <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={pageData.photos[0].url}
                      alt={pageData.photos[0].alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-handwriting text-xs text-[#722F3E] text-center pt-1.5 font-semibold">
                    "Raincoats & mist"
                  </p>
                </div>

                <div className="relative bg-[#FFFDF9] p-2.5 rounded-xl shadow-md border border-[#DEC7AA] rotate-[2deg]">
                  <div className="photo-mount-corner bl" />
                  <div className="photo-mount-corner br" />
                  <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={pageData.photos[1].url}
                      alt={pageData.photos[1].alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-handwriting text-xs text-[#722F3E] text-center pt-1.5 font-semibold">
                    "Finding our smiles"
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F2E8D8]/70 rounded-xl border border-[#DEC7AA] text-center">
                <p className="font-handwriting text-lg text-[#722F3E] font-bold">
                  "P.S. You can still be annoying sometimes. But you're my favourite annoying person. ❤️"
                </p>
              </div>
            </div>
          )}

          {/* Page 4 Right: Forehead Embrace */}
          {pageIndex === 4 && (
            <div className="space-y-5 my-auto">
              <div className="relative bg-[#FFFDF9] p-3.5 rounded-xl shadow-lg border border-[#DEC7AA] max-w-sm mx-auto rotate-[1deg]">
                <div className="photo-mount-corner tl" />
                <div className="photo-mount-corner tr" />
                <div className="photo-mount-corner bl" />
                <div className="photo-mount-corner br" />
                <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                  <img
                    src={pageData.photos[0].url}
                    alt={pageData.photos[0].alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="pt-2 text-center">
                  <p className="font-handwriting text-xl text-[#722F3E] font-bold">
                    "{pageData.photos[0].caption}"
                  </p>
                  <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                    {pageData.photos[0].annotation}
                  </span>
                </div>
              </div>

              {pageData.photos[1] && (
                <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] max-w-xs mx-auto text-center rotate-[-1.5deg]">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40">
                    <img
                      src={pageData.photos[1].url}
                      alt={pageData.photos[1].alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="font-handwriting text-xs text-[#806B5A] pt-1 block">
                    {pageData.photos[1].caption}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Page 5 Right: Birthday Celebration */}
          {pageIndex === 5 && (
            <div className="space-y-4 my-auto">
              <div className="relative bg-[#FFFDF9] p-3.5 rounded-xl shadow-lg border-2 border-[#C8A97E]/70 rotate-[-1.5deg]">
                <div className="photo-mount-corner tl" />
                <div className="photo-mount-corner tr" />
                <div className="photo-mount-corner bl" />
                <div className="photo-mount-corner br" />
                <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                  <img
                    src={pageData.photos[0].url}
                    alt={pageData.photos[0].alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="pt-2 text-center">
                  <p className="font-handwriting text-xl text-[#722F3E] font-bold">
                    "{pageData.photos[0].caption}"
                  </p>
                  <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                    {pageData.photos[0].annotation}
                  </span>
                </div>
              </div>

              {pageData.photos[1] && (
                <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] max-w-xs mx-auto text-center rotate-[2deg]">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40">
                    <img
                      src={pageData.photos[1].url}
                      alt={pageData.photos[1].alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="font-handwriting text-xs text-[#722F3E] pt-1 block font-medium">
                    Midnight birthday surprise on the car bonnet ❤️
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Prompt to Turn Page */}
          <div className="pt-4 flex items-center justify-between text-xs font-serif text-[#806B5A]">
            {onNextPage && pageIndex < 7 && (
              <button
                onClick={onNextPage}
                className="hover:text-[#722F3E] transition-colors flex items-center gap-1 group text-xs font-serif"
              >
                <span>Turn page</span>
                <span className="group-hover:translate-x-0.5 transition-transform">›</span>
              </button>
            )}
            <span className="ml-auto">Memories with Tejjaaaa</span>
          </div>
        </div>
      );
    }
  }

  // ==============================================================
  // SPREAD 6: THE LETTER — FROM MY HEART TO YOURS
  // ==============================================================
  if (pageIndex === 6) {
    if (isLeft) {
      return (
        <div className="flex flex-col justify-between h-full letter-parchment p-2 sm:p-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/60 px-3 py-1 rounded-full border border-[#DEC7AA]">
                {theLetter.chapterBadge}
              </span>
              <BookFlourish className="w-14 h-4 opacity-70" />
            </div>

            <h3 className="font-handwriting text-3xl sm:text-4xl text-[#722F3E] font-bold mb-5">
              {theLetter.salutation}
            </h3>

            <div className="space-y-3 font-serif text-base sm:text-lg text-[#292522] leading-[30px]">
              {theLetter.paragraphs.slice(0, 6).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="pt-3 text-right text-xs font-serif text-[#806B5A]">
            <span>The Letter • Part I</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-between h-full letter-parchment p-2 sm:p-4">
          <div>
            <div className="space-y-3 font-serif text-base sm:text-lg text-[#292522] leading-[30px] mb-6">
              {theLetter.paragraphs.slice(6).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-3 pb-2 border-t border-[#DEC7AA]/70">
              <p className="font-cormorant font-bold text-2xl text-[#722F3E] italic">
                {theLetter.birthdayGreeting}
              </p>
              <p className="font-handwriting text-3xl text-[#722F3E] font-bold mt-1">
                {theLetter.loveDeclaration}
              </p>
            </div>

            {/* Keepsake Polaroid & Red Wax Seal */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-md border border-[#DEC7AA] w-32 rotate-[-3deg]">
                <div className="washi-tape -top-2 left-1/2 -translate-x-1/2 w-10 bg-[#C8A97E]/30" />
                <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                  <img
                    src={theLetter.photo.url}
                    alt={theLetter.photo.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-handwriting text-[11px] text-[#722F3E] text-center pt-1 font-bold">
                  {theLetter.photo.caption}
                </p>
              </div>

              <div className="text-right">
                <p className="font-handwriting text-3xl text-[#722F3E] font-bold">
                  {theLetter.signature}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 p-1.5 px-3 rounded-full bg-[#EADCC8]/60 border border-[#DEC7AA]">
                  <div className="w-7 h-7 rounded-full bg-[#722F3E] shadow-wax flex items-center justify-center text-[#FBF7EE]">
                    <Heart className="w-3.5 h-3.5 fill-[#FBF7EE]" />
                  </div>
                  <span className="font-serif text-[9px] tracking-wider text-[#722F3E] uppercase font-bold">
                    {theLetter.waxSealStamp}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between text-xs font-serif text-[#806B5A]">
            {onNextPage && (
              <button
                onClick={onNextPage}
                className="hover:text-[#722F3E] transition-colors flex items-center gap-1 group text-xs font-serif"
              >
                <span>To Final Page</span>
                <span className="group-hover:translate-x-0.5 transition-transform">›</span>
              </button>
            )}
            <span className="ml-auto">The Letter • Part II</span>
          </div>
        </div>
      );
    }
  }

  // ==============================================================
  // SPREAD 7: THE FINAL PAGE — OUR STORY IS STILL GOING PLACES
  // ==============================================================
  if (pageIndex === 7) {
    if (isLeft) {
      return (
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/60 px-3 py-1 rounded-full border border-[#DEC7AA]">
                {theFinalPage.chapterBadge}
              </span>
              <BookFlourish className="w-14 h-4 opacity-70" />
            </div>

            <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-[#722F3E] tracking-tight leading-tight mb-4">
              {theFinalPage.title}
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-[#292522] mb-6 font-normal">
              "{theFinalPage.supportingText}"
            </p>

            <div className="p-5 bg-[#F2E8D8]/70 rounded-2xl border-l-4 border-[#722F3E] mb-6">
              <h3 className="font-cormorant font-bold text-2xl text-[#722F3E]">
                {theFinalPage.birthdayGreeting}
              </h3>
              <p className="font-handwriting text-2xl text-[#806B5A] mt-2">
                *{theFinalPage.closing}*
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#DEC7AA]/60 flex items-center justify-between">
            {onReplay && (
              <button
                onClick={onReplay}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#722F3E] text-[#FBF7EE] font-serif text-xs hover:bg-[#5A2531] transition-all shadow-md group"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#C8A97E] group-hover:-rotate-90 transition-transform" />
                <span>{theFinalPage.replayButtonText}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              </button>
            )}
            <span className="font-serif text-xs text-[#806B5A] italic">
              Volume I • Forever Us
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-between h-full">
          <div className="my-auto flex flex-col items-center">
            <div className="relative bg-[#FFFDF9] p-3.5 sm:p-4 rounded-2xl shadow-xl border-2 border-[#C8A97E]/70 max-w-sm w-full">
              <div className="photo-mount-corner tl" />
              <div className="photo-mount-corner tr" />
              <div className="photo-mount-corner bl" />
              <div className="photo-mount-corner br" />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#EADCC8]/40 shadow-inner">
                <img
                  src={theFinalPage.photo.url}
                  alt={theFinalPage.photo.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="pt-2 text-center">
                <p className="font-handwriting text-2xl text-[#722F3E] font-bold">
                  "{theFinalPage.photo.caption}"
                </p>
                <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                  {theFinalPage.photo.annotation}
                </span>
              </div>
            </div>

            <div className="mt-5 text-center">
              <BotanicalLaurel className="w-36 h-7 opacity-80 mx-auto" />
              <p className="font-handwriting text-lg text-[#722F3E] font-bold">
                Forever Your Girl ❤️
              </p>
            </div>
          </div>

          <div className="pt-3 text-right text-xs font-serif text-[#806B5A]">
            <span>The End • Destination Us</span>
          </div>
        </div>
      );
    }
  }

  return null;
};
