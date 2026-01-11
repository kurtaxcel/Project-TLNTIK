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
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
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
          background: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 0, 0, 0.2)',
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
        '.glass-light-navbar': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(244, 246, 245, 0.90) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(26, 60, 52, 0.15)',
          borderTop: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(26, 60, 52, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        },
        '.glass-light-navbar-scrolled': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(244, 246, 245, 0.95) 100%)',
          backdropFilter: 'blur(32px) saturate(200%)',
          WebkitBackdropFilter: 'blur(32px) saturate(200%)',
          border: '1px solid rgba(26, 60, 52, 0.20)',
          borderTop: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 12px 40px rgba(26, 60, 52, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        },
        '.glass-dark-navbar': {
          background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.90) 0%, rgba(0, 0, 0, 0.85) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderTop: '1px solid rgba(255, 255, 255, 0.20)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        },
        '.glass-dark-navbar-scrolled': {
          background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.95) 0%, rgba(0, 0, 0, 0.90) 100%)',
          backdropFilter: 'blur(32px) saturate(200%)',
          WebkitBackdropFilter: 'blur(32px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderTop: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.20)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
