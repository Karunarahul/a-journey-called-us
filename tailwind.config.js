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
          DEFAULT: '#F7F4EE',
          50: '#FCFAF6',
          100: '#F7F4EE',
          200: '#EFEBE2',
          300: '#E5DFD4',
        },
        paper: {
          DEFAULT: '#FCFAF6',
          warm: '#F7F4EE',
        },
        burgundy: {
          DEFAULT: '#783D48',
          50: '#F8EEF0',
          100: '#EED6DB',
          200: '#DEACB6',
          600: '#8A4553',
          700: '#783D48',
          800: '#62313A',
          900: '#4C242C',
          950: '#32151B',
        },
        dustyrose: {
          DEFAULT: '#D7B8B1',
          light: '#E6CEC8',
          dark: '#C49E96',
        },
        taupe: {
          DEFAULT: '#A18F7E',
          light: '#BDB0A3',
          dark: '#857362',
        },
        charcoal: {
          DEFAULT: '#242321',
          light: '#3A3835',
          dark: '#181716',
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
