/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F0E6',
          50: '#FDFCF9',
          100: '#FAF6F0',
          200: '#F7F0E6',
          300: '#EFE5D5',
        },
        cream: {
          DEFAULT: '#EADCC8',
          light: '#F3EADA',
          dark: '#DEC7AA',
        },
        burgundy: {
          DEFAULT: '#722F3E',
          50: '#F5E8EB',
          100: '#EBD1D7',
          200: '#D7A3AF',
          600: '#8A394B',
          700: '#722F3E',
          800: '#5A2531',
          900: '#431C25',
          950: '#2C1017',
        },
        dustyrose: {
          DEFAULT: '#D9A6A0',
          light: '#E7C1BD',
          dark: '#C88C85',
        },
        mutedbrown: {
          DEFAULT: '#806B5A',
          light: '#9E8875',
          dark: '#635345',
        },
        charcoal: {
          DEFAULT: '#292522',
          light: '#3D3834',
          dark: '#1C1917',
        },
        vintagegold: {
          DEFAULT: '#C8A97E',
          light: '#DFC7A3',
          dark: '#B08E5F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'journal': '0 20px 40px -15px rgba(41, 37, 34, 0.12), 0 0 0 1px rgba(114, 47, 62, 0.05)',
        'polaroid': '0 12px 30px -10px rgba(41, 37, 34, 0.2), 0 4px 6px -2px rgba(41, 37, 34, 0.05)',
        'wax': '0 4px 12px rgba(114, 47, 62, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
        'envelope': '0 25px 50px -12px rgba(41, 37, 34, 0.25)',
      },
      backgroundImage: {
        'paper-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
