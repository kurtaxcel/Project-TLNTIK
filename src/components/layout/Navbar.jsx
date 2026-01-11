import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mountain, Sun, Moon, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // ADDED: useLocation
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useTheme();
  
  // ADDED: Check current page path
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Trilogy', path: '/trilogy' },
    { name: 'Plan Your Hike', path: '/guide' },
    { name: 'About', path: '/about' },
  ];

  // LOGIC: Enhanced text color determination for maximum contrast and visibility
  // 1. If Home & Not Scrolled: White (over dark hero image)
  // 2. If Dark Theme: Always White for optimal contrast
  // 3. If Light Theme & Scrolled: Dark Green (over opaque white background)
  // 4. If Light Theme & Other Page: Dark Green with enhanced background
  const textColorClass = (isHome && !isScrolled) || theme === 'dark'
    ? 'text-white drop-shadow-lg' 
    : 'text-nature-900 drop-shadow-sm';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? theme === 'light' 
              ? 'glass-light-navbar-scrolled'
              : 'glass-dark-navbar-scrolled'
            : !isHome && theme === 'light'
              ? 'glass-light-navbar'
              : theme === 'dark' && !isHome
                ? 'glass-dark-navbar'
                : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Logo Box - adapts color */}
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled || isHome || theme === 'dark' 
                ? 'glass-subtle' 
                : 'glass-nature bg-white/10 border-nature-900/20'
            } group-hover:bg-sun-500 group-hover:border-sun-500/50`}>
              <Mountain className={`w-6 h-6 transition-colors ${textColorClass}`} />
            </div>
            <span className={`font-serif text-xl tracking-wider font-bold transition-colors ${textColorClass}`}>
              TLNTIK
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-sun-500 transition-colors font-medium ${textColorClass}`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className={`p-2 hover:text-sun-500 transition-colors ${textColorClass}`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              onClick={() => window.open('https://maps.app.goo.gl/TKMgd8Cm8tVLMvo4A ', '_blank')}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 ${
               theme === 'dark'
                 ? 'bg-sun-500 text-nature-900 border border-sun-500/50 hover:bg-white hover:text-nature-900 hover:border-white/50'
                 : isScrolled || isHome 
                   ? 'bg-sun-500 text-nature-900 border border-sun-500/50 hover:bg-white hover:text-nature-900 hover:border-white/50' 
                   : 'bg-nature-900 text-white border border-nature-900 hover:bg-sun-500 hover:text-nature-900 hover:border-sun-500'
            }`}
            >
              <MapPin size={16} />
              Registration Office
            </button>
          </div>

          {/* Mobile Menu Button Color Fix */}
          <button 
            className={`md:hidden p-2 ${textColorClass}`} 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-nature-900 dark:bg-black md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className="text-3xl font-serif text-white hover:text-sun-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button onClick={toggleTheme} className="text-white p-4">
              {theme === 'light' ? <span className="flex items-center gap-2"><Moon /> Dark Mode</span> : <span className="flex items-center gap-2"><Sun /> Light Mode</span>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
