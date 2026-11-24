import React from 'react';
import type { SpreadContent as SpreadContentType } from '../data/storybook';
import { BookFlourish, BotanicalLaurel } from './WatercolorAccents';
import { RotateCcw, Sparkles, Heart } from 'lucide-react';

interface SpreadContentProps {
  spread: SpreadContentType;
  side: 'left' | 'right';
  onReplay?: () => void;
  onNext?: () => void;
}

export const SpreadContent: React.FC<SpreadContentProps> = ({
  spread,
  side,
  onReplay,
  onNext,
}) => {
  const isLeft = side === 'left';

  // ==============================================================
  // SPREAD 6: THE LETTER — SPECIAL STATIONERY
  // ==============================================================
  if (spread.isLetter) {
    if (isLeft) {
      return (
        <div className="flex flex-col justify-between h-full letter-parchment p-2 sm:p-4 select-text">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/60 px-3 py-1 rounded-full border border-[#DEC7AA]">
                {spread.chapterBadge}
              </span>
              <BookFlourish className="w-14 h-4 opacity-70" />
            </div>

            <h3 className="font-handwriting text-3xl sm:text-4xl text-[#722F3E] font-bold mb-4">
              {spread.letterSalutation}
            </h3>

            <div className="space-y-3 font-serif text-base sm:text-lg text-[#292522] leading-[30px]">
              {spread.letterParagraphsLeft?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="pt-2 text-right text-xs font-serif text-[#806B5A]">
            <span>{spread.runningHeaderLeft}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-between h-full letter-parchment p-2 sm:p-4 select-text">
          <div>
            <div className="space-y-3 font-serif text-base sm:text-lg text-[#292522] leading-[30px] mb-4">
              {spread.letterParagraphsRight?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-3 pb-2 border-t border-[#DEC7AA]/70">
              <p className="font-cormorant font-bold text-xl sm:text-2xl text-[#722F3E] italic">
                {spread.birthdayGreeting}
              </p>
              <p className="font-handwriting text-3xl text-[#722F3E] font-bold mt-1">
                {spread.loveDeclaration}
              </p>
            </div>

            {/* Keepsake Polaroid & Wax Seal Stamp */}
            <div className="mt-3 flex items-center justify-between gap-4">
              {spread.photos[0] && (
                <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-md border border-[#DEC7AA] w-28 sm:w-32 rotate-[-3deg] shrink-0">
                  <div className="washi-tape -top-2 left-1/2 -translate-x-1/2 w-10 bg-[#C8A97E]/30" />
                  <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={spread.photos[0].url}
                      alt={spread.photos[0].alt}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <p className="font-handwriting text-[11px] text-[#722F3E] text-center pt-1 font-bold">
                    {spread.photos[0].caption}
                  </p>
                </div>
              )}

              <div className="text-right">
                <p className="font-handwriting text-2xl sm:text-3xl text-[#722F3E] font-bold">
                  {spread.signature}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 p-1.5 px-3 rounded-full bg-[#EADCC8]/60 border border-[#DEC7AA]">
                  <div className="w-7 h-7 rounded-full bg-[#722F3E] shadow-wax flex items-center justify-center text-[#FBF7EE]">
                    <Heart className="w-3.5 h-3.5 fill-[#FBF7EE]" />
                  </div>
                  <span className="font-serif text-[9px] tracking-wider text-[#722F3E] uppercase font-bold">
                    {spread.waxSealStamp}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-serif text-[#806B5A]">
            {onNext && (
              <button
                onClick={onNext}
                className="hover:text-[#722F3E] transition-colors flex items-center gap-1 group text-xs font-serif"
              >
                <span>To Final Page</span>
                <span className="group-hover:translate-x-0.5 transition-transform">›</span>
              </button>
            )}
            <span className="ml-auto">{spread.runningHeaderRight}</span>
          </div>
        </div>
      );
    }
  }

  // ==============================================================
  // SPREAD 7: THE FINAL CELEBRATION PAGE
  // ==============================================================
  if (spread.isFinal) {
    if (isLeft) {
      return (
        <div className="flex flex-col justify-between h-full select-text">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/60 px-3 py-1 rounded-full border border-[#DEC7AA]">
                {spread.chapterBadge}
              </span>
              <BookFlourish className="w-14 h-4 opacity-70" />
            </div>

            <h2 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#722F3E] tracking-tight leading-tight mb-4">
              {spread.title}
            </h2>

            <p className="font-serif italic text-lg sm:text-2xl text-[#292522] mb-6 font-normal">
              "{spread.supportingText}"
            </p>

            <div className="p-4 sm:p-5 bg-[#F2E8D8]/70 rounded-2xl border-l-4 border-[#722F3E] mb-6">
              <h3 className="font-cormorant font-bold text-xl sm:text-2xl text-[#722F3E]">
                {spread.birthdayGreeting}
              </h3>
              <p className="font-handwriting text-xl sm:text-2xl text-[#806B5A] mt-2">
                *{spread.closing}*
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#DEC7AA]/60 flex items-center justify-between">
            {onReplay && (
              <button
                onClick={onReplay}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#722F3E] text-[#FBF7EE] font-serif text-xs hover:bg-[#5A2531] transition-all shadow-md group cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#C8A97E] group-hover:-rotate-90 transition-transform" />
                <span>{spread.replayButtonText}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              </button>
            )}
            <span className="font-serif text-xs text-[#806B5A] italic">
              {spread.runningHeaderLeft}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-between h-full select-text">
          <div className="my-auto flex flex-col items-center">
            {spread.photos[0] && (
              <div className="relative bg-[#FFFDF9] p-3 sm:p-4 rounded-2xl shadow-xl border-2 border-[#C8A97E]/70 max-w-sm w-full">
                <div className="photo-mount-corner tl" />
                <div className="photo-mount-corner tr" />
                <div className="photo-mount-corner bl" />
                <div className="photo-mount-corner br" />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#EADCC8]/40 shadow-inner">
                  <img
                    src={spread.photos[0].url}
                    alt={spread.photos[0].alt}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="pt-2 text-center">
                  <p className="font-handwriting text-xl sm:text-2xl text-[#722F3E] font-bold">
                    "{spread.photos[0].caption}"
                  </p>
                  <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                    {spread.photos[0].annotation}
                  </span>
                </div>
              </div>
            )}

            <div className="mt-4 sm:mt-5 text-center">
              <BotanicalLaurel className="w-36 h-7 opacity-80 mx-auto" />
              <p className="font-handwriting text-lg text-[#722F3E] font-bold mt-1">
                Forever Your Girl ❤️
              </p>
            </div>
          </div>

          <div className="pt-2 text-right text-xs font-serif text-[#806B5A]">
            <span>{spread.runningHeaderRight}</span>
          </div>
        </div>
      );
    }
  }

  // ==============================================================
  // SPREADS 1 TO 5: STANDARD CHAPTER SPREADS
  // ==============================================================
  if (isLeft) {
    return (
      <div className="flex flex-col justify-between h-full select-text">
        <div>
          {/* Chapter Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#806B5A] font-semibold bg-[#EADCC8]/60 px-3 py-1 rounded-full border border-[#DEC7AA]">
              {spread.chapterBadge}
            </span>
            <BookFlourish className="w-14 h-4 opacity-70" />
          </div>

          {/* Chapter Title */}
          <h2 className="font-cormorant font-bold text-2xl sm:text-4xl text-[#722F3E] tracking-tight leading-tight mb-4">
            {spread.title}
          </h2>

          {/* Narrative Paragraphs with Drop Cap */}
          <div className="space-y-3 sm:space-y-4 font-serif text-base sm:text-lg text-[#292522]/90 leading-relaxed">
            {spread.leftNarrative.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "drop-cap" : ""}>
                {p}
              </p>
            ))}
          </div>

          {/* Chapter Quote */}
          {spread.quote && (
            <div className="mt-5 p-3.5 sm:p-4 bg-[#F2E8D8]/70 rounded-xl border-l-4 border-[#722F3E]">
              <p className="font-cormorant italic text-base sm:text-xl text-[#722F3E] font-medium leading-snug">
                "{spread.quote}"
              </p>
            </div>
          )}
        </div>

        {/* Footer Annotation */}
        <div className="pt-3 text-xs font-serif text-[#806B5A]">
          <span className="font-handwriting text-base sm:text-lg text-[#722F3E]">
            *{spread.annotation}*
          </span>
        </div>
      </div>
    );
  } else {
    // RIGHT SIDE: Scrapbook / Photo album
    return (
      <div className="flex flex-col justify-between h-full select-text">
        <div className="my-auto space-y-4">
          {/* Spread 1: College Memories */}
          {spread.spreadIndex === 1 && (
            <>
              {spread.photos[0] && (
                <div className="relative bg-[#FFFDF9] p-3 sm:p-4 rounded-xl shadow-md border border-[#DEC7AA] rotate-[-1.5deg]">
                  <div className="photo-mount-corner tl" />
                  <div className="photo-mount-corner tr" />
                  <div className="photo-mount-corner bl" />
                  <div className="photo-mount-corner br" />
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={spread.photos[0].url}
                      alt={spread.photos[0].alt}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-handwriting text-lg sm:text-xl text-[#722F3E] font-semibold">
                      "{spread.photos[0].caption}"
                    </p>
                    <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                      {spread.photos[0].annotation}
                    </span>
                  </div>
                </div>
              )}

              {spread.photos[1] && (
                <div className="relative bg-[#FFFDF9] p-2.5 rounded-lg shadow-sm border border-[#DEC7AA] max-w-xs mx-auto rotate-[2deg]">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={spread.photos[1].url}
                      alt={spread.photos[1].alt}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <p className="font-handwriting text-sm text-[#292522] text-center pt-1 font-medium">
                    {spread.photos[1].caption}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Spread 2: Our Little World Scrapbook */}
          {spread.spreadIndex === 2 && (
            <>
              {spread.photos[0] && (
                <div className="relative bg-[#FFFDF9] p-2 sm:p-2.5 rounded-xl shadow-md border border-[#DEC7AA] rotate-[1.5deg]">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={spread.photos[0].url}
                      alt={spread.photos[0].alt}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                  <p className="font-handwriting text-sm sm:text-base text-[#722F3E] text-center pt-1 font-semibold">
                    "{spread.photos[0].caption}"
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {spread.photos[1] && (
                  <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[-2deg]">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={spread.photos[1].url}
                        alt={spread.photos[1].alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                    <p className="font-handwriting text-[11px] text-[#292522] text-center pt-1 leading-tight">
                      Bike road trip
                    </p>
                  </div>
                )}

                {spread.photos[3] && (
                  <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[2deg]">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={spread.photos[3].url}
                        alt={spread.photos[3].alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                    <p className="font-handwriting text-[11px] text-[#292522] text-center pt-1 leading-tight">
                      Walking arm in arm
                    </p>
                  </div>
                )}
              </div>

              {spread.photos[2] && (
                <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] text-center">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={spread.photos[2].url}
                      alt={spread.photos[2].alt}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                  <span className="font-handwriting text-xs text-[#722F3E] font-medium block pt-1">
                    {spread.photos[2].caption}
                  </span>
                </div>
              )}
            </>
          )}

          {/* Spread 3: The Unexpected Routes */}
          {spread.spreadIndex === 3 && (
            <>
              <div className="grid grid-cols-2 gap-3">
                {spread.photos[0] && (
                  <div className="relative bg-[#FFFDF9] p-2.5 rounded-xl shadow-md border border-[#DEC7AA] rotate-[-2deg]">
                    <div className="photo-mount-corner tl" />
                    <div className="photo-mount-corner tr" />
                    <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={spread.photos[0].url}
                        alt={spread.photos[0].alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                    <p className="font-handwriting text-xs text-[#722F3E] text-center pt-1.5 font-semibold">
                      "Raincoats & mist"
                    </p>
                  </div>
                )}

                {spread.photos[1] && (
                  <div className="relative bg-[#FFFDF9] p-2.5 rounded-xl shadow-md border border-[#DEC7AA] rotate-[2deg]">
                    <div className="photo-mount-corner bl" />
                    <div className="photo-mount-corner br" />
                    <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={spread.photos[1].url}
                        alt={spread.photos[1].alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                    <p className="font-handwriting text-xs text-[#722F3E] text-center pt-1.5 font-semibold">
                      "Finding our smiles"
                    </p>
                  </div>
                )}
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F2E8D8]/70 rounded-xl border border-[#DEC7AA] text-center">
                <p className="font-handwriting text-base sm:text-lg text-[#722F3E] font-bold">
                  "P.S. You can still be annoying sometimes. But you're my favourite annoying person. ❤️"
                </p>
              </div>
            </>
          )}

          {/* Spread 4: Still My Favourite Person */}
          {spread.spreadIndex === 4 && (
            <>
              {spread.photos[0] && (
                <div className="relative bg-[#FFFDF9] p-3 sm:p-3.5 rounded-xl shadow-lg border border-[#DEC7AA] max-w-sm mx-auto rotate-[1deg]">
                  <div className="photo-mount-corner tl" />
                  <div className="photo-mount-corner tr" />
                  <div className="photo-mount-corner bl" />
                  <div className="photo-mount-corner br" />
                  <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={spread.photos[0].url}
                      alt={spread.photos[0].alt}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-handwriting text-lg sm:text-xl text-[#722F3E] font-bold">
                      "{spread.photos[0].caption}"
                    </p>
                    <span className="font-sans text-[10px] text-[#806B5A] uppercase tracking-wider block mt-0.5">
                      {spread.photos[0].annotation}
                    </span>
                  </div>
                </div>
              )}

              {spread.photos[1] && (
                <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] max-w-xs mx-auto text-center rotate-[-1.5deg]">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded bg-[#EADCC8]/40">
                    <img
                      src={spread.photos[1].url}
                      alt={spread.photos[1].alt}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                  <p className="font-handwriting text-xs text-[#292522] pt-1">
                    {spread.photos[1].caption}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Spread 5: The Birthday Chapter */}
          {spread.spreadIndex === 5 && (
            <>
              {spread.photos[0] && (
                <div className="relative bg-[#FFFDF9] p-3 sm:p-3.5 rounded-xl shadow-lg border-2 border-[#C8A97E]/60 rotate-[-1.5deg]">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#EADCC8]/40 shadow-inner">
                    <img
                      src={spread.photos[0].url}
                      alt={spread.photos[0].alt}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-handwriting text-lg sm:text-xl text-[#722F3E] font-bold">
                      "{spread.photos[0].caption}"
                    </p>
                    <span className="font-serif text-[10px] uppercase tracking-widest text-[#C8A97E] block mt-0.5 font-bold">
                      HAPPY BIRTHDAY BOY!
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2.5">
                {spread.photos[1] && (
                  <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[1.5deg]">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={spread.photos[1].url}
                        alt={spread.photos[1].alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                    <p className="font-handwriting text-[10px] text-[#292522] text-center pt-1 font-medium">
                      Midnight surprise
                    </p>
                  </div>
                )}

                {spread.photos[2] && (
                  <div className="relative bg-[#FFFDF9] p-2 rounded-lg shadow-sm border border-[#DEC7AA] rotate-[-1deg]">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded bg-[#EADCC8]/40 shadow-inner">
                      <img
                        src={spread.photos[2].url}
                        alt={spread.photos[2].alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                    <p className="font-handwriting text-[10px] text-[#292522] text-center pt-1 font-medium">
                      Fairy lights & teddy
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Prompt to Turn Page */}
        <div className="pt-2 flex items-center justify-between text-xs font-serif text-[#806B5A]">
          {onNext && spread.spreadIndex < 7 && (
            <button
              onClick={onNext}
              className="hover:text-[#722F3E] transition-colors flex items-center gap-1 group text-xs font-serif cursor-pointer"
            >
              <span>Turn page</span>
              <span className="group-hover:translate-x-0.5 transition-transform">›</span>
            </button>
          )}
          <span className="ml-auto">{spread.runningHeaderRight}</span>
        </div>
      </div>
    );
  }
};
