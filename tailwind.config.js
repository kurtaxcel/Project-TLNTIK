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
      // Enhanced glassmorphism utilities
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glass-xl': '0 35px 60px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    // Custom glassmorphism plugin
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.glass-strong-dark': {
          background: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        },
        '.glass-subtle': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-subtle-dark': {
          background: 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.glass-nature': {
          background: 'rgba(26, 60, 52, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(26, 60, 52, 0.2)',
        },
        '.glass-nature-strong': {
          background: 'rgba(26, 60, 52, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(26, 60, 52, 0.3)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
