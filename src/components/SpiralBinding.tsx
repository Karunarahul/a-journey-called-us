import React from 'react';

interface SpiralBindingProps {
  ringCount?: number;
  className?: string;
  isMobile?: boolean;
}

export const SpiralBinding: React.FC<SpiralBindingProps> = ({
  ringCount = 18,
  className = "",
  isMobile = false,
}) => {
  const rings = Array.from({ length: ringCount });

  return (
    <div
      className={`relative z-30 flex flex-col justify-between select-none pointer-events-none py-6 ${
        isMobile ? 'w-8 left-0 top-0 bottom-0' : 'w-12 sm:w-14 mx-auto top-0 bottom-0'
      } ${className}`}
      aria-hidden="true"
    >
      {/* Central Dark Leather Spine Backing */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-gradient-to-r from-[#26150D] via-[#3E2417] to-[#26150D] shadow-2xl rounded-sm border-x border-[#1A0E08]/80">
        {/* Subtle leather spine texture & crease lines */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-black/40" />
        <div className="absolute inset-y-0 left-1 w-[1px] bg-white/5" />
        <div className="absolute inset-y-0 right-1 w-[1px] bg-black/50" />
      </div>

      {/* Array of Realistic Metallic Silver Spiral Wire Loops */}
      {rings.map((_, idx) => (
        <div key={idx} className="relative w-full h-7 flex items-center justify-between px-0.5">
          {/* SVG Twin-Wire Loop with High-Fidelity Cylindrical Chrome Gradient & Shadows */}
          <svg
            viewBox="0 0 64 26"
            className="w-full h-full overflow-visible drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
          >
            <defs>
              {/* Metallic Chrome Highlight Gradient */}
              <linearGradient id={`chromeHighlight-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8A99AD" />
                <stop offset="25%" stopColor="#DDE5ED" />
                <stop offset="45%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#C4D1DF" />
                <stop offset="90%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              {/* Wire Shadow Gradient */}
              <linearGradient id={`wireShadow-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0F172A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1E293B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.8" />
              </linearGradient>

              {/* Punch Hole Inset Gradient */}
              <radialGradient id={`holeInset-${idx}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0B0806" />
                <stop offset="70%" stopColor="#1A120D" />
                <stop offset="100%" stopColor="#3A281E" />
              </radialGradient>
            </defs>

            {/* Left Page Punch Hole */}
            {!isMobile && (
              <g>
                <ellipse cx="9" cy="13" rx="4" ry="6.5" fill={`url(#holeInset-${idx})`} />
                <ellipse
                  cx="9"
                  cy="13"
                  rx="4"
                  ry="6.5"
                  fill="none"
                  stroke="#E8DFC8"
                  strokeWidth="0.75"
                  opacity="0.8"
                />
              </g>
            )}

            {/* Right Page Punch Hole */}
            <g>
              <ellipse cx="55" cy="13" rx="4" ry="6.5" fill={`url(#holeInset-${idx})`} />
              <ellipse
                cx="55"
                cy="13"
                rx="4"
                ry="6.5"
                fill="none"
                stroke="#E8DFC8"
                strokeWidth="0.75"
                opacity="0.8"
              />
            </g>

            {/* Behind-page loop segment (dark metal entering hole) */}
            <path
              d="M 9 16 C 6 18, 4 12, 8 10"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M 55 16 C 58 18, 60 12, 56 10"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />

            {/* Cast Drop Shadow of Wire onto Central Spine */}
            <path
              d="M 9 14 C 20 6, 44 6, 55 14"
              stroke="rgba(0, 0, 0, 0.45)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              transform="translate(0, 2.5)"
            />

            {/* Main Foreground Metallic Wire Loop */}
            <path
              d="M 9 13 C 20 5, 44 5, 55 13"
              stroke={`url(#chromeHighlight-${idx})`}
              strokeWidth="3.6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Top Specular Gleam along wire edge */}
            <path
              d="M 12 11.5 C 22 5.5, 42 5.5, 52 11.5"
              stroke="#FFFFFF"
              strokeWidth="1.1"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
