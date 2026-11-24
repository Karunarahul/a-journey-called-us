import { useState, useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SinglePage } from './SinglePage';
import { SpreadContent } from './SpreadContent';
import { SpiralBinding } from './SpiralBinding';
import { bookSpreads, getSpread, getTotalSpreads } from '../data/storybook';

export interface PageTurnEngineHandle {
  turnNext: () => void;
  turnPrev: () => void;
  jumpToSpread: (spreadIndex: number) => void;
}

interface PageTurnEngineProps {
  currentSpread: number; // 1 to 7
  onSpreadChange: (newSpread: number) => void;
  onReturnToCover: () => void;
  isAnimating: boolean;
  setIsAnimating: (animating: boolean) => void;
}

type TurnState =
  | { status: 'idle'; activeSpread: number }
  | { status: 'turning'; fromSpread: number; toSpread: number; direction: 'next' | 'prev' };

export const PageTurnEngine = forwardRef<PageTurnEngineHandle, PageTurnEngineProps>(({
  currentSpread,
  onSpreadChange,
  onReturnToCover,
  isAnimating,
  setIsAnimating,
}, ref) => {
  const totalSpreads = getTotalSpreads();
  const [turnState, setTurnState] = useState<TurnState>({
    status: 'idle',
    activeSpread: currentSpread,
  });

  const safetyTimerRef = useRef<number | null>(null);

  // Sync internal activeSpread when external currentSpread changes while idle
  useEffect(() => {
    if (turnState.status === 'idle' && turnState.activeSpread !== currentSpread) {
      setTurnState({ status: 'idle', activeSpread: currentSpread });
    }
  }, [currentSpread, turnState]);

  // Clean up safety timer on unmount
  useEffect(() => {
    return () => {
      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
      }
    };
  }, []);

  const completeTurn = useCallback((finalSpread: number) => {
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
    setTurnState({ status: 'idle', activeSpread: finalSpread });
    setIsAnimating(false);
    onSpreadChange(finalSpread);
  }, [onSpreadChange, setIsAnimating]);

  const triggerNext = useCallback(() => {
    if (turnState.status !== 'idle' || isAnimating) return;
    const from = turnState.activeSpread;
    if (from >= totalSpreads) return;
    const to = from + 1;

    setIsAnimating(true);
    setTurnState({ status: 'turning', fromSpread: from, toSpread: to, direction: 'next' });

    // Safety fallback timer: guarantees state unlocks even if tab changes or event drops
    safetyTimerRef.current = window.setTimeout(() => {
      completeTurn(to);
    }, 900);
  }, [turnState, isAnimating, totalSpreads, setIsAnimating, completeTurn]);

  const triggerPrev = useCallback(() => {
    if (turnState.status !== 'idle' || isAnimating) return;
    const from = turnState.activeSpread;
    if (from <= 1) {
      onReturnToCover();
      return;
    }
    const to = from - 1;

    setIsAnimating(true);
    setTurnState({ status: 'turning', fromSpread: from, toSpread: to, direction: 'prev' });

    // Safety fallback timer
    safetyTimerRef.current = window.setTimeout(() => {
      completeTurn(to);
    }, 900);
  }, [turnState, isAnimating, onReturnToCover, setIsAnimating, completeTurn]);

  const jumpToSpread = useCallback((targetSpread: number) => {
    if (turnState.status !== 'idle' || isAnimating) return;
    const clamped = Math.max(1, Math.min(targetSpread, totalSpreads));
    setTurnState({ status: 'idle', activeSpread: clamped });
    onSpreadChange(clamped);
  }, [turnState, isAnimating, totalSpreads, onSpreadChange]);

  useImperativeHandle(ref, () => ({
    turnNext: triggerNext,
    turnPrev: triggerPrev,
    jumpToSpread,
  }), [triggerNext, triggerPrev, jumpToSpread]);

  // Resolve active/transition spread data safely
  const activeSpreadData = getSpread(
    turnState.status === 'idle' ? turnState.activeSpread : turnState.fromSpread
  ) || bookSpreads[0];

  const targetSpreadData = turnState.status === 'turning'
    ? (getSpread(turnState.toSpread) || bookSpreads[0])
    : activeSpreadData;

  const leftBaseSpread = turnState.status === 'turning' && turnState.direction === 'prev'
    ? targetSpreadData
    : activeSpreadData;

  const rightBaseSpread = turnState.status === 'turning' && turnState.direction === 'next'
    ? targetSpreadData
    : activeSpreadData;

  return (
    <div className="w-full max-w-6xl mx-auto py-3 sm:py-6 px-2 sm:px-6 relative select-none">
      {/* ============================================================== */}
      {/* DESKTOP TWO-PAGE SPREAD WITH DETERMINISTIC 3D TURNING LEAF     */}
      {/* ============================================================== */}
      <div className="hidden md:block relative book-perspective">
        {/* Outer Heavy Leather/Mahogany Desk Platform */}
        <div
          className="relative w-full rounded-2xl overflow-visible bg-[#221711] p-1.5 shadow-2xl"
          style={{
            boxShadow: `
              0 30px 80px -15px rgba(0, 0, 0, 0.9), 
              0 0 0 3px #3D251A, 
              0 0 0 5px #180F0A
            `,
          }}
        >
          {/* Inner Zero-Padding Canvas: Left base, Right base & Flipping Leaf share identical coordinate space */}
          <div className="relative w-full min-h-[660px] lg:min-h-[720px] flex">
            
            {/* 1. LEFT BASE (Underneath) */}
            <div className="w-1/2 h-full relative z-10">
              <SinglePage
                key={`left-base-${leftBaseSpread.spreadIndex}`}
                side="left"
                pageNumber={leftBaseSpread.pageNumberLeft}
                runningHeader={leftBaseSpread.runningHeaderLeft}
              >
                <SpreadContent
                  spread={leftBaseSpread}
                  side="left"
                  onReplay={onReturnToCover}
                  onNext={triggerNext}
                />
              </SinglePage>

              {/* Dynamic shadow that darkens left base as leaf approaches */}
              {turnState.status === 'turning' && turnState.direction === 'next' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35 }}
                  transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute inset-0 bg-black pointer-events-none rounded-l-2xl z-20"
                />
              )}
            </div>

            {/* 2. RIGHT BASE (Underneath) */}
            <div className="w-1/2 h-full relative z-10">
              <SinglePage
                key={`right-base-${rightBaseSpread.spreadIndex}`}
                side="right"
                pageNumber={rightBaseSpread.pageNumberRight}
                runningHeader={rightBaseSpread.runningHeaderRight}
              >
                <SpreadContent
                  spread={rightBaseSpread}
                  side="right"
                  onReplay={onReturnToCover}
                  onNext={triggerNext}
                />
              </SinglePage>

              {/* Dynamic shadow that darkens right base as leaf approaches during prev */}
              {turnState.status === 'turning' && turnState.direction === 'prev' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35 }}
                  transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute inset-0 bg-black pointer-events-none rounded-r-2xl z-20"
                />
              )}
            </div>

            {/* 3. THE 3D FLIPPING LEAF (TURNING FORWARD: NEXT) */}
            {turnState.status === 'turning' && turnState.direction === 'next' && (
              <motion.div
                key={`flip-leaf-next-${turnState.fromSpread}->${turnState.toSpread}`}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -180 }}
                transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                onAnimationComplete={() => completeTurn(turnState.toSpread)}
                className="absolute top-0 bottom-0 left-1/2 w-1/2 h-full z-25 origin-left"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* FRONT FACE: Renders From-Spread Right side */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: 'rotateY(0deg) translateZ(1px)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <SinglePage
                    side="right"
                    pageNumber={activeSpreadData.pageNumberRight}
                    runningHeader={activeSpreadData.runningHeaderRight}
                    isTurningLeaf={true}
                  >
                    <SpreadContent
                      spread={activeSpreadData}
                      side="right"
                    />
                  </SinglePage>
                </div>

                {/* BACK FACE: Renders To-Spread Left side (Lands face-up on Left) */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: 'rotateY(180deg) translateZ(1px)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <SinglePage
                    side="left"
                    pageNumber={targetSpreadData.pageNumberLeft}
                    runningHeader={targetSpreadData.runningHeaderLeft}
                    isTurningLeaf={true}
                  >
                    <SpreadContent
                      spread={targetSpreadData}
                      side="left"
                    />
                  </SinglePage>
                </div>
              </motion.div>
            )}

            {/* 4. THE 3D FLIPPING LEAF (TURNING BACKWARD: PREV) */}
            {turnState.status === 'turning' && turnState.direction === 'prev' && (
              <motion.div
                key={`flip-leaf-prev-${turnState.fromSpread}->${turnState.toSpread}`}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                onAnimationComplete={() => completeTurn(turnState.toSpread)}
                className="absolute top-0 bottom-0 left-0 w-1/2 h-full z-25 origin-right"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* FRONT FACE: Renders From-Spread Left side */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: 'rotateY(0deg) translateZ(1px)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <SinglePage
                    side="left"
                    pageNumber={activeSpreadData.pageNumberLeft}
                    runningHeader={activeSpreadData.runningHeaderLeft}
                    isTurningLeaf={true}
                  >
                    <SpreadContent
                      spread={activeSpreadData}
                      side="left"
                    />
                  </SinglePage>
                </div>

                {/* BACK FACE: Renders To-Spread Right side (Lands face-up on Right) */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: 'rotateY(-180deg) translateZ(1px)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <SinglePage
                    side="right"
                    pageNumber={targetSpreadData.pageNumberRight}
                    runningHeader={targetSpreadData.runningHeaderRight}
                    isTurningLeaf={true}
                  >
                    <SpreadContent
                      spread={targetSpreadData}
                      side="right"
                    />
                  </SinglePage>
                </div>
              </motion.div>
            )}

            {/* 5. PERMANENT STATIONARY SPIRAL BINDING IN THE CENTER */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-12 sm:w-14 z-35 pointer-events-none">
              <SpiralBinding ringCount={16} isMobile={false} />
            </div>

            {/* 6. INTERACTIVE INVISIBLE PAGE-EDGE CLICK ZONES */}
            {turnState.status === 'idle' && (
              <>
                <div
                  onClick={triggerPrev}
                  className="absolute left-0 top-0 bottom-0 w-14 cursor-pointer z-30 hover:bg-black/[0.03] transition-colors flex items-center justify-start pl-2 group"
                  title={turnState.activeSpread === 1 ? "Return to Cover" : "Turn back"}
                  aria-label="Previous Page"
                >
                  <span className="opacity-0 group-hover:opacity-60 text-lg font-serif text-[#722F3E] transition-opacity">
                    ‹
                  </span>
                </div>

                {turnState.activeSpread < totalSpreads && (
                  <div
                    onClick={triggerNext}
                    className="absolute right-0 top-0 bottom-0 w-14 cursor-pointer z-30 hover:bg-black/[0.03] transition-colors flex items-center justify-end pr-2 group"
                    title="Turn to next page"
                    aria-label="Next Page"
                  >
                    <span className="opacity-0 group-hover:opacity-60 text-lg font-serif text-[#722F3E] transition-opacity">
                      ›
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE SINGLE-PAGE SCRAPBOOK VIEW WITH STATIONARY LEFT SPIRAL  */}
      {/* ============================================================== */}
      <div className="block md:hidden relative">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-[#FAF5EC] book-paper pl-10 pr-4 py-5 border border-[#DEC7AA] shadow-2xl min-h-[580px]"
          style={{
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          }}
        >
          {/* Stationary Left-Aligned Spiral Binding */}
          <div className="absolute left-0 top-0 bottom-0 w-8 z-35 pointer-events-none">
            <SpiralBinding ringCount={16} isMobile={true} />
          </div>

          {/* Smooth Mobile Page Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-spread-${activeSpreadData.spreadIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Narrative Story Section */}
              <SpreadContent
                spread={activeSpreadData}
                side="left"
                onReplay={onReturnToCover}
                onNext={triggerNext}
              />

              {/* Photos & Keepsakes Section */}
              <div className="pt-4 border-t border-[#DEC7AA]/60">
                <SpreadContent
                  spread={activeSpreadData}
                  side="right"
                  onReplay={onReturnToCover}
                  onNext={triggerNext}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

PageTurnEngine.displayName = 'PageTurnEngine';
