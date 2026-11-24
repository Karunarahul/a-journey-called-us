import { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookPage } from './BookPage';
import { PageContentRenderer } from './PageContentRenderer';
import { SpiralBinding } from './SpiralBinding';

export interface PageTurnHandle {
  turnNext: () => void;
  turnPrev: () => void;
}

interface PageTurnControllerProps {
  currentPage: number; // 1 to 7
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onReplay: () => void;
  isAnimating: boolean;
  setIsAnimating: (animating: boolean) => void;
}

export const PageTurnController = forwardRef<PageTurnHandle, PageTurnControllerProps>(({
  currentPage,
  totalPages,
  onPageChange,
  onReplay,
  isAnimating,
  setIsAnimating,
}, ref) => {
  // Turning state
  const [turningDirection, setTurningDirection] = useState<'next' | 'prev' | null>(null);
  const [fromPage, setFromPage] = useState<number>(currentPage);
  const [toPage, setToPage] = useState<number>(currentPage);

  // Sync internal state when currentPage changes externally (e.g. from Table of Contents)
  useEffect(() => {
    if (!isAnimating) {
      setFromPage(currentPage);
      setToPage(currentPage);
    }
  }, [currentPage, isAnimating]);

  const triggerNext = useCallback(() => {
    if (isAnimating || currentPage >= totalPages) return;
    setIsAnimating(true);
    setTurningDirection('next');
    setFromPage(currentPage);
    setToPage(currentPage + 1);
  }, [isAnimating, currentPage, totalPages, setIsAnimating]);

  const triggerPrev = useCallback(() => {
    if (isAnimating || currentPage <= 0) return;
    if (currentPage === 1) {
      onPageChange(0);
      return;
    }
    setIsAnimating(true);
    setTurningDirection('prev');
    setFromPage(currentPage);
    setToPage(currentPage - 1);
  }, [isAnimating, currentPage, setIsAnimating, onPageChange]);

  useImperativeHandle(ref, () => ({
    turnNext: triggerNext,
    turnPrev: triggerPrev,
  }), [triggerNext, triggerPrev]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setTurningDirection(null);
    onPageChange(toPage);
    setFromPage(toPage);
  };

  // Stack thickness visual calculation
  const leftStack = Math.min(5, Math.max(1, currentPage));
  const rightStack = Math.min(5, Math.max(1, totalPages - currentPage + 1));

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-8 px-2 sm:px-6 relative select-none">
      {/* ============================================================== */}
      {/* DESKTOP TWO-PAGE SPREAD WITH 3D TURNING LEAF                   */}
      {/* ============================================================== */}
      <div className="hidden md:block relative book-perspective">
        {/* The Open Book Platform */}
        <div
          className="relative w-full rounded-2xl overflow-visible flex min-h-[660px] lg:min-h-[720px] bg-[#221711] p-1.5 shadow-2xl"
          style={{
            boxShadow: `
              0 30px 80px -15px rgba(0, 0, 0, 0.9), 
              0 0 0 3px #3D251A, 
              0 0 0 5px #180F0A
            `,
          }}
        >
          {/* Left Page (Underneath / Static Base) */}
          <div className="w-1/2 h-full flex flex-col">
            <BookPage
              side="left"
              pageNumber={turningDirection === 'prev' ? `${toPage}A` : `${fromPage}A`}
              subTitle={turningDirection === 'prev' ? `Chapter 0${toPage}` : `Chapter 0${fromPage}`}
              stackThickness={leftStack}
              className="h-full rounded-l-xl rounded-r-none"
            >
              <PageContentRenderer
                pageIndex={turningDirection === 'prev' ? toPage : fromPage}
                side="left"
                onReplay={onReplay}
                onNextPage={triggerNext}
              />
            </BookPage>
          </div>

          {/* Right Page (Underneath / Static Base) */}
          <div className="w-1/2 h-full flex flex-col">
            <BookPage
              side="right"
              pageNumber={turningDirection === 'next' ? `${toPage}B` : `${fromPage}B`}
              subTitle="Memories With You"
              stackThickness={rightStack}
              className="h-full rounded-r-xl rounded-l-none"
            >
              <PageContentRenderer
                pageIndex={turningDirection === 'next' ? toPage : fromPage}
                side="right"
                onReplay={onReplay}
                onNextPage={triggerNext}
              />
            </BookPage>
          </div>

          {/* ========================================================== */}
          {/* THE 3D FLIPPING LEAF (TURNING FORWARD TO NEXT PAGE)        */}
          {/* ========================================================== */}
          {isAnimating && turningDirection === 'next' && (
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              transition={{ duration: 0.85, ease: [0.45, 0.05, 0.2, 0.95] }}
              onAnimationComplete={handleAnimationComplete}
              className="absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] h-[calc(100%-12px)] z-20 origin-left"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* FRONT FACE: Renders FROM-PAGE Right (lifts from right and curls toward left) */}
              <div
                className="absolute inset-0 w-full h-full rounded-r-xl overflow-hidden bg-[#FAF5EC] book-paper pl-6 sm:pl-10 pr-6 sm:pr-10 border-r border-y border-[#CBB598]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/15 via-black/4 to-transparent pointer-events-none z-10" />
                <div className="h-full py-6 sm:py-8 flex flex-col justify-between">
                  <PageContentRenderer pageIndex={fromPage} side="right" />
                  <div className="pt-3 pb-2 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A]">
                    <span>Page 0{fromPage}B</span>
                    <span className="font-handwriting text-base text-[#722F3E]">Tejjaaaa & Me ❤️</span>
                  </div>
                </div>
              </div>

              {/* BACK FACE: Renders TO-PAGE Left (lands face-up on the left side) */}
              <div
                className="absolute inset-0 w-full h-full rounded-l-xl overflow-hidden bg-[#FAF5EC] book-paper pr-6 sm:pr-10 pl-6 sm:pl-10 border-l border-y border-[#CBB598]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                }}
              >
                <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black/15 via-black/4 to-transparent pointer-events-none z-10" />
                <div className="h-full py-6 sm:py-8 flex flex-col justify-between">
                  <PageContentRenderer pageIndex={toPage} side="left" />
                  <div className="pt-3 pb-2 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A]">
                    <span className="font-handwriting text-base text-[#722F3E]">Chapter 0{toPage}</span>
                    <span>Page 0{toPage}A</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================== */}
          {/* THE 3D FLIPPING LEAF (TURNING BACKWARD TO PREVIOUS PAGE)   */}
          {/* ========================================================== */}
          {isAnimating && turningDirection === 'prev' && (
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{ duration: 0.85, ease: [0.45, 0.05, 0.2, 0.95] }}
              onAnimationComplete={handleAnimationComplete}
              className="absolute top-1.5 bottom-1.5 right-1/2 w-[calc(50%-6px)] h-[calc(100%-12px)] z-20 origin-right"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* FRONT FACE: Renders FROM-PAGE Left (lifts from left and curls toward right) */}
              <div
                className="absolute inset-0 w-full h-full rounded-l-xl overflow-hidden bg-[#FAF5EC] book-paper pr-6 sm:pr-10 pl-6 sm:pl-10 border-l border-y border-[#CBB598]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                }}
              >
                <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black/15 via-black/4 to-transparent pointer-events-none z-10" />
                <div className="h-full py-6 sm:py-8 flex flex-col justify-between">
                  <PageContentRenderer pageIndex={fromPage} side="left" />
                  <div className="pt-3 pb-2 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A]">
                    <span className="font-handwriting text-base text-[#722F3E]">Chapter 0{fromPage}</span>
                    <span>Page 0{fromPage}A</span>
                  </div>
                </div>
              </div>

              {/* BACK FACE: Renders TO-PAGE Right (lands face-up on the right side) */}
              <div
                className="absolute inset-0 w-full h-full rounded-r-xl overflow-hidden bg-[#FAF5EC] book-paper pl-6 sm:pl-10 pr-6 sm:pr-10 border-r border-y border-[#CBB598]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(-180deg)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/15 via-black/4 to-transparent pointer-events-none z-10" />
                <div className="h-full py-6 sm:py-8 flex flex-col justify-between">
                  <PageContentRenderer pageIndex={toPage} side="right" />
                  <div className="pt-3 pb-2 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A]">
                    <span>Page 0{toPage}B</span>
                    <span className="font-handwriting text-base text-[#722F3E]">Tejjaaaa & Me ❤️</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================== */}
          {/* THE PERMANENT STATIONARY SPIRAL BINDING IN THE CENTER      */}
          {/* ========================================================== */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-12 sm:w-14 z-30 pointer-events-none">
            <SpiralBinding ringCount={18} isMobile={false} />
          </div>

          {/* Interactive Clickable Page Edge Zones for Intuitive Page Turn */}
          {!isAnimating && (
            <>
              {currentPage > 1 && (
                <div
                  onClick={triggerPrev}
                  className="absolute left-0 top-0 bottom-0 w-16 cursor-pointer z-10 hover:bg-black/5 transition-colors group flex items-center justify-start pl-2"
                  title="Click to turn to previous page"
                >
                  <span className="opacity-0 group-hover:opacity-75 transition-opacity text-xs font-serif text-[#722F3E]">
                    ‹
                  </span>
                </div>
              )}
              {currentPage < totalPages && (
                <div
                  onClick={triggerNext}
                  className="absolute right-0 top-0 bottom-0 w-16 cursor-pointer z-10 hover:bg-black/5 transition-colors group flex items-center justify-end pr-2"
                  title="Click to turn to next page"
                >
                  <span className="opacity-0 group-hover:opacity-75 transition-opacity text-xs font-serif text-[#722F3E]">
                    ›
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE SINGLE-PAGE SCRAPBOOK VIEW WITH LEFT SPIRAL BINDING     */}
      {/* ============================================================== */}
      <div className="block md:hidden relative">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-[#FAF5EC] book-paper pl-11 pr-5 py-6 border border-[#DEC7AA] shadow-2xl min-h-[580px]"
          style={{
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          }}
        >
          {/* Left Vertical Spiral Binding */}
          <div className="absolute left-0 top-0 bottom-0 w-9 z-30">
            <SpiralBinding ringCount={16} isMobile={true} />
          </div>

          {/* Mobile Page Content: Seamlessly stacks Left and Right content for a clean reading flow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-page-${currentPage}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <PageContentRenderer pageIndex={currentPage} side="left" />
              <div className="pt-4 border-t border-[#DEC7AA]/60">
                <PageContentRenderer
                  pageIndex={currentPage}
                  side="right"
                  onReplay={onReplay}
                  onNextPage={triggerNext}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

PageTurnController.displayName = 'PageTurnController';
