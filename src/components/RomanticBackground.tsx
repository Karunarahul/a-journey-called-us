import React, { useMemo } from 'react';

interface PetalSpec {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  driftX: string;
  rotDeg: string;
  opacity: number;
  colorType: 'dustyrose' | 'blush' | 'warmivory';
}

interface SymbolSpec {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  driftX: string;
  opacity: number;
}

export const RomanticBackground: React.FC = () => {
  // Generate a deterministic, stable set of 20 organic falling flower petals
  const petals = useMemo<PetalSpec[]>(() => {
    const specs: PetalSpec[] = [
      { id: 1, left: '4%', size: 16, duration: '14s', delay: '0s', driftX: '45px', rotDeg: '280deg', opacity: 0.45, colorType: 'dustyrose' },
      { id: 2, left: '12%', size: 13, duration: '18s', delay: '3.5s', driftX: '-35px', rotDeg: '-220deg', opacity: 0.4, colorType: 'blush' },
      { id: 3, left: '19%', size: 18, duration: '15s', delay: '7s', driftX: '55px', rotDeg: '340deg', opacity: 0.5, colorType: 'dustyrose' },
      { id: 4, left: '26%', size: 12, duration: '20s', delay: '1s', driftX: '-40px', rotDeg: '190deg', opacity: 0.35, colorType: 'warmivory' },
      { id: 5, left: '33%', size: 15, duration: '16s', delay: '5.2s', driftX: '30px', rotDeg: '-310deg', opacity: 0.42, colorType: 'blush' },
      { id: 6, left: '41%', size: 17, duration: '17s', delay: '8.8s', driftX: '-50px', rotDeg: '260deg', opacity: 0.48, colorType: 'dustyrose' },
      { id: 7, left: '48%', size: 14, duration: '19s', delay: '2.4s', driftX: '40px', rotDeg: '-180deg', opacity: 0.38, colorType: 'blush' },
      { id: 8, left: '55%', size: 19, duration: '14.5s', delay: '6.1s', driftX: '-45px', rotDeg: '320deg', opacity: 0.5, colorType: 'dustyrose' },
      { id: 9, left: '62%', size: 13, duration: '21s', delay: '11s', driftX: '35px', rotDeg: '-240deg', opacity: 0.35, colorType: 'warmivory' },
      { id: 10, left: '69%', size: 16, duration: '15.5s', delay: '4s', driftX: '-30px', rotDeg: '290deg', opacity: 0.45, colorType: 'blush' },
      { id: 11, left: '76%', size: 15, duration: '18.5s', delay: '9.3s', driftX: '50px', rotDeg: '-330deg', opacity: 0.4, colorType: 'dustyrose' },
      { id: 12, left: '83%', size: 18, duration: '16.5s', delay: '1.8s', driftX: '-40px', rotDeg: '210deg', opacity: 0.46, colorType: 'blush' },
      { id: 13, left: '90%', size: 14, duration: '17.5s', delay: '8.1s', driftX: '45px', rotDeg: '-270deg', opacity: 0.42, colorType: 'dustyrose' },
      { id: 14, left: '96%', size: 16, duration: '19.5s', delay: '12.5s', driftX: '-35px', rotDeg: '300deg', opacity: 0.38, colorType: 'warmivory' },
      { id: 15, left: '8%', size: 14, duration: '16s', delay: '10s', driftX: '35px', rotDeg: '-190deg', opacity: 0.4, colorType: 'blush' },
      { id: 16, left: '22%', size: 17, duration: '15s', delay: '13.2s', driftX: '-45px', rotDeg: '310deg', opacity: 0.45, colorType: 'dustyrose' },
      { id: 17, left: '38%', size: 13, duration: '20.5s', delay: '14s', driftX: '40px', rotDeg: '-250deg', opacity: 0.36, colorType: 'warmivory' },
      { id: 18, left: '59%', size: 16, duration: '17s', delay: '15.4s', driftX: '-30px', rotDeg: '270deg', opacity: 0.44, colorType: 'blush' },
      { id: 19, left: '72%', size: 18, duration: '14s', delay: '16.2s', driftX: '45px', rotDeg: '-320deg', opacity: 0.48, colorType: 'dustyrose' },
      { id: 20, left: '87%', size: 14, duration: '18s', delay: '5.8s', driftX: '-40px', rotDeg: '230deg', opacity: 0.4, colorType: 'blush' },
    ];
    return specs;
  }, []);

  // Subtle floating outline love symbols (hearts and delicate stars)
  const symbols = useMemo<SymbolSpec[]>(() => {
    return [
      { id: 1, left: '15%', size: 18, duration: '22s', delay: '2s', driftX: '40px', opacity: 0.28 },
      { id: 2, left: '35%', size: 14, duration: '26s', delay: '9s', driftX: '-35px', opacity: 0.22 },
      { id: 3, left: '52%', size: 20, duration: '24s', delay: '4.5s', driftX: '30px', opacity: 0.3 },
      { id: 4, left: '71%', size: 15, duration: '28s', delay: '13s', driftX: '-45px', opacity: 0.2 },
      { id: 5, left: '88%', size: 17, duration: '23s', delay: '7s', driftX: '35px', opacity: 0.26 },
    ];
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Falling Flower Petals */}
      {petals.map((petal) => (
        <div
          key={`petal-${petal.id}`}
          className="absolute top-0 animate-petal pointer-events-none"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            ['--drift-x' as any]: petal.driftX,
            ['--rot-deg' as any]: petal.rotDeg,
            ['--petal-opacity' as any]: petal.opacity,
          }}
        >
          <svg
            viewBox="0 0 24 32"
            fill="none"
            className="w-full h-full drop-shadow-[0_1px_2px_rgba(120,61,72,0.1)]"
          >
            <path
              d="M12 0C4 8 0 16 0 22C0 27.5 5.4 32 12 32C18.6 32 24 27.5 24 22C24 16 20 8 12 0Z"
              fill={
                petal.colorType === 'dustyrose'
                  ? '#D7B8B1'
                  : petal.colorType === 'blush'
                  ? '#E7C1BD'
                  : '#FAF5EE'
              }
              opacity="0.9"
            />
            {/* Soft inner organic highlight vein */}
            <path
              d="M12 4C11.5 12 11 20 12 28"
              stroke="#FFFFFF"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>
      ))}

      {/* Floating Outline Love Symbols */}
      {symbols.map((symbol) => (
        <div
          key={`symbol-${symbol.id}`}
          className="absolute bottom-0 animate-love-symbol pointer-events-none"
          style={{
            left: symbol.left,
            width: `${symbol.size}px`,
            height: `${symbol.size}px`,
            animationDuration: symbol.duration,
            animationDelay: symbol.delay,
            ['--symbol-drift-x' as any]: symbol.driftX,
            opacity: symbol.opacity,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#783D48"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
