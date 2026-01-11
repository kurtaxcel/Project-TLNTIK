import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mountain, Sun, Moon } from 'lucide-react';
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

  // LOGIC: Text color determination
  // 1. If Scrolled: Always White (because nav background is dark green/black)
  // 2. If Home & Not Scrolled: White (because it's over the dark hero image)
  // 3. If Other Page & Not Scrolled: Dark Green (so it's visible on white bg)
  const textColorClass = isScrolled || isHome || theme === 'dark'
    ? 'text-white' 
    : 'text-nature-900';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-nature-900/90 dark:bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Logo Box - adapts color */}
            <div className={`p-2 rounded-lg backdrop-blur-sm transition-colors duration-300 ${
              isScrolled || isHome ? 'bg-white/10' : 'bg-nature-900/10'
            } group-hover:bg-sun-500`}>
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
              onClick={() => window.open('https://maps.app.goo.gl/9XYF9DU8VYZ4o1yg8 ', '_blank')}
              className={`px-5 py-2 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 text-sm border ${
               isScrolled || isHome 
                 ? 'bg-white/10 text-white border-white/20 hover:bg-sun-500' 
                 : 'bg-nature-900 text-white border-transparent hover:bg-sun-500 hover:text-nature-900'
            }`}
            >
              Get Directions
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
