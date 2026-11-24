import React from 'react';

/**
 * Hand-painted style SVG botanical ornaments and landscape illustrations
 * for the physical romantic storybook experience.
 */

export const BotanicalLaurel: React.FC<{ className?: string }> = ({ className = "w-40 h-20" }) => (
  <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 32C45 28 80 18 100 32C120 18 155 28 190 32"
      stroke="#C8A97E"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* Left Leaves */}
    <path d="M35 29C30 22 24 20 20 22C23 27 28 30 35 29Z" fill="#722F3E" opacity="0.6" />
    <path d="M48 26C45 18 38 16 34 18C38 23 42 26 48 26Z" fill="#C8A97E" opacity="0.7" />
    <path d="M62 23C60 15 53 14 49 16C52 21 57 24 62 23Z" fill="#722F3E" opacity="0.6" />
    <path d="M76 22C75 14 69 13 65 15C67 20 72 23 76 22Z" fill="#C8A97E" opacity="0.7" />
    <path d="M90 25C91 17 86 15 82 17C83 22 87 25 90 25Z" fill="#722F3E" opacity="0.6" />
    {/* Right Leaves */}
    <path d="M165 29C170 22 176 20 180 22C177 27 172 30 165 29Z" fill="#722F3E" opacity="0.6" />
    <path d="M152 26C155 18 162 16 166 18C162 23 158 26 152 26Z" fill="#C8A97E" opacity="0.7" />
    <path d="M138 23C140 15 147 14 151 16C148 21 143 24 138 23Z" fill="#722F3E" opacity="0.6" />
    <path d="M124 22C125 14 131 13 135 15C133 20 128 23 124 22Z" fill="#C8A97E" opacity="0.7" />
    <path d="M110 25C109 17 114 15 118 17C117 22 113 25 110 25Z" fill="#722F3E" opacity="0.6" />
    {/* Center Rose Bud */}
    <circle cx="100" cy="32" r="3.5" fill="#722F3E" />
    <circle cx="100" cy="32" r="5.5" stroke="#C8A97E" strokeWidth="0.8" />
  </svg>
);

export const WindingRoadLandscape: React.FC<{ className?: string }> = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="skyWash" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FAF5EC" stopOpacity="0" />
        <stop offset="100%" stopColor="#EADCC8" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="hill1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#C8A97E" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#D9A6A0" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#806B5A" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#722F3E" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <rect width="400" height="120" fill="url(#skyWash)" />
    {/* Distant Rolling Hills */}
    <path d="M0 70Q100 45 200 65T400 50V120H0Z" fill="url(#hill1)" />
    <path d="M0 85Q130 65 240 80T400 70V120H0Z" fill="#FAF5EC" opacity="0.7" />
    {/* Winding Road */}
    <path
      d="M200 65C190 75 220 85 180 98C140 110 160 120 160 120"
      stroke="url(#roadGrad)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeDasharray="4 2"
    />
    {/* Delicate birds in sky */}
    <path d="M120 30Q125 25 130 30Q135 25 140 30" stroke="#806B5A" strokeWidth="0.8" opacity="0.5" fill="none" />
    <path d="M145 22Q149 18 153 22Q157 18 161 22" stroke="#806B5A" strokeWidth="0.7" opacity="0.4" fill="none" />
  </svg>
);

export const BookFlourish: React.FC<{ className?: string }> = ({ className = "w-28 h-5" }) => (
  <svg viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 10H45M75 10H110" stroke="#C8A97E" strokeWidth="0.8" strokeLinecap="round" />
    <circle cx="60" cy="10" r="2.5" fill="#722F3E" />
    <circle cx="52" cy="10" r="1.5" fill="#C8A97E" />
    <circle cx="68" cy="10" r="1.5" fill="#C8A97E" />
  </svg>
);

export const CornerBrassOrnament: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({ position, className = "w-8 h-8" }) => {
  const rotation = {
    tl: '',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90',
  }[position];

  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} ${rotation} pointer-events-none`}>
      <path d="M2 2H38V8H8V38H2V2Z" fill="#C8A97E" opacity="0.8" />
      <path d="M8 8H26V12H12V26H8V8Z" fill="#DFCA9B" opacity="0.9" />
      <circle cx="12" cy="12" r="2" fill="#722F3E" />
    </svg>
  );
};
