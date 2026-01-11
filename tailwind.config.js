/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- ADD THIS LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          900: '#1A3C34', // Deep Green (Primary)
          800: '#2C4A42',
        },
        earth: {
          500: '#8C6239', // Clay/Trail (Secondary)
        },
        sun: {
          500: '#F2A900', // Gold (Accent)
        },
        mist: {
          500: '#F4F6F5', // Off-white background
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
