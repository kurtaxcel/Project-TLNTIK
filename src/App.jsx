import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { useEffect } from 'react'; // Import useEffect
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Trilogy from './pages/Trilogy'; // Import the real file
import Guide from './pages/Guide'; // Import the real file
import About from './pages/About'; // Import the real file
import Admin from './pages/Admin'; // Import the admin page

// Helper Component to handle scrolling
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there is a hash (e.g. #talamitam), scroll to it
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <--- Add this here inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trilogy" element={<Trilogy />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
