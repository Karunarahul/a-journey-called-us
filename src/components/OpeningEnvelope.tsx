import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, MailOpen } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';

interface OpeningEnvelopeProps {
  onDismiss: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onDismiss }) => {
  // Always visible when mounted; reload shows envelope again per specification
  const [stage, setStage] = useState<'closed' | 'opening' | 'letter' | 'closing'>('closed');

  // Prevent background scrolling while popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle keyboard Escape to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenEnvelope = () => {
    if (stage !== 'closed') return;
    setStage('opening');

    // Start background music immediately upon user interaction
    romanticAudio.play();

    // Flap opens, letter rises, then transition to full reading card
    setTimeout(() => {
      setStage('letter');
    }, 950);
  };

  const handleClose = () => {
    setStage('closing');

    // Ensure music continues playing
    romanticAudio.play();

    setTimeout(() => {
      onDismiss();
    }, 450);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="envelope-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#F7F4EE]/92 backdrop-blur-md overflow-hidden select-none"
        role="dialog"
        aria-modal="true"
        aria-label="A special birthday letter for Kannayaaa"
      >
        {/* Subtle Ambient Vignette & Warm Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#F7F4EE]/50 to-[#242321]/15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E7C1BD]/30 rounded-full blur-[140px] pointer-events-none" />

        {/* Ambient Floating Rose Petals in Envelope Modal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[
            { id: 1, left: '10%', duration: '12s', delay: '0s', size: 16, drift: '30px' },
            { id: 2, left: '25%', duration: '15s', delay: '2s', size: 14, drift: '-25px' },
            { id: 3, left: '50%', duration: '14s', delay: '4s', size: 18, drift: '35px' },
            { id: 4, left: '75%', duration: '16s', delay: '1s', size: 13, drift: '-30px' },
            { id: 5, left: '90%', duration: '13s', delay: '3s', size: 15, drift: '20px' },
          ].map((p) => (
            <div
              key={`env-petal-${p.id}`}
              className="absolute top-0 animate-petal"
              style={{
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size * 1.3}px`,
                animationDuration: p.duration,
                animationDelay: p.delay,
                ['--drift-x' as any]: p.drift,
                ['--petal-opacity' as any]: 0.45,
              }}
            >
              <svg viewBox="0 0 24 32" fill="none" className="w-full h-full">
                <path
                  d="M12 0C4 8 0 16 0 22C0 27.5 5.4 32 12 32C18.6 32 24 27.5 24 22C24 16 20 8 12 0Z"
                  fill="#D7B8B1"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Top Header Actions (Skip Button) */}
        <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-30">
          <button
            onClick={handleClose}
            className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white text-[#783D48] text-xs font-sans tracking-wide uppercase font-medium border border-[#E5DFD4] shadow-sm hover:shadow transition-all duration-200"
            title="Skip directly to the story"
          >
            <span>Skip intro</span>
            <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* STAGE 1 & 2: CLOSED OR OPENING ENVELOPE */}
        {(stage === 'closed' || stage === 'opening') && (
          <motion.div
            key="envelope-container"
            initial={{ scale: 0.9, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-md w-full relative z-10 px-2"
          >
            {/* Romantic Heading Above Envelope */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#D7B8B1]" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#783D48] font-bold">
                  A LITTLE SURPRISE FOR YOU
                </span>
                <span className="w-6 h-[1px] bg-[#D7B8B1]" />
              </div>
              <p className="font-handwriting text-xl sm:text-2xl text-[#857362]">
                A letter sealed with love and memories
              </p>
            </motion.div>

            {/* The Physical Envelope 3D Structure */}
            <div
              onClick={handleOpenEnvelope}
              className="relative w-full max-w-[390px] sm:max-w-[430px] aspect-[1.48/1] rounded-xl shadow-[0_25px_60px_rgba(76,36,44,0.18)] cursor-pointer group transition-transform duration-300 hover:scale-[1.015]"
              style={{ perspective: 1200 }}
            >
              {/* Envelope Back Interior */}
              <div className="absolute inset-0 bg-[#E8DEC8] rounded-xl border border-[#D5C7B0] overflow-hidden">
                <div className="w-full h-full bg-[#E5D7BF]/60 bg-gradient-to-b from-[#D4C3A6]/40 to-transparent" />
              </div>

              {/* The Letter Peeking Inside (Rises up during opening animation) */}
              <motion.div
                initial={{ y: 0 }}
                animate={stage === 'opening' ? { y: -80, scale: 1.02 } : { y: 0 }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[8%] right-[8%] top-[12%] bottom-[12%] bg-[#FCFAF6] rounded-md shadow-md border border-[#EAE3D2] p-4 flex flex-col justify-center items-center z-10 pointer-events-none"
              >
                <div className="w-12 h-0.5 bg-[#D7B8B1]/60 mb-2 rounded-full" />
                <p className="font-handwriting text-lg text-[#783D48]">Hey Kannayaaa! ❤️</p>
                <div className="w-24 h-0.5 bg-[#E5DFD4] my-1 rounded-full" />
                <div className="w-16 h-0.5 bg-[#E5DFD4] rounded-full" />
              </motion.div>

              {/* Envelope Lower Pocket (Left, Right & Bottom Flaps) */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-xl">
                {/* SVG Geometric Envelope Flaps */}
                <svg
                  viewBox="0 0 430 290"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-[0_-2px_4px_rgba(76,36,44,0.06)]"
                >
                  {/* Left Side Flap */}
                  <polygon
                    points="0,0 205,150 0,290"
                    fill="#F4ECE1"
                    stroke="#E6DAC8"
                    strokeWidth="1"
                  />
                  {/* Right Side Flap */}
                  <polygon
                    points="430,0 225,150 430,290"
                    fill="#F2E8DC"
                    stroke="#E6DAC8"
                    strokeWidth="1"
                  />
                  {/* Bottom Fold Flap */}
                  <polygon
                    points="0,290 215,130 430,290"
                    fill="#FAF5EE"
                    stroke="#E0D2C0"
                    strokeWidth="1"
                  />
                </svg>

                {/* Text and Calligraphy on the Front Envelope Face */}
                <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
                  <span className="font-handwriting text-2xl sm:text-3xl text-[#783D48] tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    To my favourite person
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-4 h-[1px] bg-[#C8A97E]" />
                    <span className="font-serif italic text-base sm:text-lg text-[#857362] font-medium tracking-wide">
                      Kannayaaa ❤️
                    </span>
                    <span className="w-4 h-[1px] bg-[#C8A97E]" />
                  </div>
                </div>
              </div>

              {/* Top Flap (Folds upward in 3D during opening) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={stage === 'opening' ? { rotateX: 180, zIndex: 5 } : { rotateX: 0, zIndex: 30 }}
                transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                }}
                className="absolute inset-x-0 top-0 h-[56%] pointer-events-none"
              >
                <svg
                  viewBox="0 0 430 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-[0_4px_8px_rgba(76,36,44,0.12)]"
                >
                  <polygon
                    points="0,0 215,160 430,0"
                    fill="#FAF5EE"
                    stroke="#DED0BE"
                    strokeWidth="1.2"
                  />
                </svg>

                {/* Burgundy Heart Wax Seal centered at the apex of the top flap */}
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  animate={stage === 'opening' ? { scale: 1.25, opacity: 0 } : { scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-1/2 bottom-[-18px] -translate-x-1/2 flex items-center justify-center pointer-events-auto"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8A4553] via-[#783D48] to-[#4C242C] shadow-[0_6px_14px_rgba(76,36,44,0.35)] flex items-center justify-center border-2 border-[#A15767]/40 ring-2 ring-[#C8A97E]/30 group-hover:scale-105 transition-transform">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#FBF8F3] fill-[#FBF8F3] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Primary Action Button Below Envelope */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <button
                onClick={handleOpenEnvelope}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#783D48] to-[#8A4553] hover:from-[#62313A] hover:to-[#783D48] text-white font-sans text-sm sm:text-base font-medium shadow-[0_10px_25px_rgba(120,61,72,0.28)] hover:shadow-[0_12px_30px_rgba(120,61,72,0.38)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <MailOpen className="w-4 h-4 text-[#D7B8B1]" />
                <span>Open your letter</span>
                <Heart className="w-3.5 h-3.5 text-[#D7B8B1] fill-[#D7B8B1]" />
              </button>
              <p className="font-sans text-[11px] text-[#A18F7E] tracking-wider uppercase mt-3">
                Click envelope or button to open
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 3: FULL UNFOLDED HANDWRITTEN BIRTHDAY LETTER */}
        {stage === 'letter' && (
          <motion.div
            key="unfolded-letter-card"
            initial={{ scale: 0.88, opacity: 0, y: 35 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg sm:max-w-xl max-h-[88vh] overflow-y-auto bg-[#FCFAF6] rounded-2xl shadow-[0_30px_70px_rgba(76,36,44,0.22)] border border-[#EFEBE2] relative z-20 p-6 sm:p-10 my-auto"
          >
            {/* Vintage Lined Letter Texture & Decorative Corner Borders */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#D7B8B1]" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#D7B8B1]" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#D7B8B1]" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#D7B8B1]" />

            {/* Letter Header */}
            <div className="text-center pb-4 mb-6 border-b border-[#EFEBE2]">
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="w-6 h-[1px] bg-[#C8A97E]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#857362] font-semibold">
                  A PERSONAL NOTE
                </span>
                <span className="w-6 h-[1px] bg-[#C8A97E]" />
              </div>
              <h2 className="font-handwriting text-3xl sm:text-4xl text-[#783D48] font-bold">
                Hey Kannayaaa! ❤️
              </h2>
            </div>

            {/* Letter Body — Exact Prompt Specified Text */}
            <div className="space-y-4 font-cormorant text-lg sm:text-xl text-[#242321] leading-relaxed">
              <p>
                Before you start exploring this little surprise, I just want you to know that someone has put together a few memories, a lot of feelings and endless love into these little pages.
              </p>

              <p>
                This is a tiny journey through us, our laughs, our little madness and everything that makes our story special.
              </p>

              <p className="italic text-[#783D48] font-medium">
                So take your time, birthday boy.
              </p>

              <p>
                This one's made especially for you.
              </p>

              {/* Central Birthday Greeting Banner */}
              <div className="my-6 py-4 px-3 bg-[#FAF5EE] rounded-xl border border-[#EADCC8] text-center shadow-inner">
                <div className="inline-flex items-center gap-1.5 mb-1 text-[#C8A97E]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold font-sans">
                    TO MY FAVOURITE HUMAN
                  </span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#783D48] tracking-tight">
                  Happy Birthday, Nannaaaaa! ❤️
                </h3>
              </div>

              {/* Handwritten Sign-off */}
              <div className="pt-2 text-right">
                <p className="font-cormorant italic text-base sm:text-lg text-[#857362]">
                  With lots and lots of love,
                </p>
                <p className="font-handwriting text-3xl sm:text-4xl text-[#783D48] font-bold mt-1">
                  Your favourite girl.
                </p>
              </div>
            </div>

            {/* Action Button: Okay, let's begin ❤️ */}
            <div className="mt-8 pt-6 border-t border-[#EFEBE2] flex flex-col items-center">
              <button
                onClick={handleClose}
                className="inline-flex items-center gap-3 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#783D48] to-[#8A4553] hover:from-[#62313A] hover:to-[#783D48] text-white font-sans text-sm sm:text-base font-medium shadow-[0_12px_28px_rgba(120,61,72,0.3)] hover:shadow-[0_15px_35px_rgba(120,61,72,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Okay, let's begin</span>
                <Heart className="w-4 h-4 text-[#D7B8B1] fill-[#D7B8B1]" />
              </button>
              <p className="font-sans text-[11px] text-[#A18F7E] tracking-wider uppercase mt-3">
                Begins the story with ambient melody
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
