import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link

const MountainCard = ({ mountain }) => {
  // Handle missing mountain data gracefully
  if (!mountain) {
    return (
      <div className="h-[500px] w-full rounded-2xl overflow-hidden relative bg-nature-900/10 dark:bg-white/5 animate-pulse">
        <div className="absolute bottom-0 left-0 p-8 w-full space-y-4">
          <div className="h-4 w-16 bg-nature-900/20 dark:bg-white/10 rounded"></div>
          <div className="h-8 w-3/4 bg-nature-900/20 dark:bg-white/10 rounded"></div>
          <div className="h-4 w-full bg-nature-900/20 dark:bg-white/10 rounded"></div>
          <div className="h-4 w-2/3 bg-nature-900/20 dark:bg-white/10 rounded"></div>
          <div className="h-4 w-24 bg-nature-900/20 dark:bg-white/10 rounded mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[500px] w-full overflow-hidden rounded-2xl cursor-pointer shadow-glass hover:shadow-glass-xl transition-all duration-500"
    >
      {/* 2. Wrap the whole card content in a Link for better UX */}
      <Link to={`/trilogy#${mountain.slug || mountain.id}`} className="block h-full w-full">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={mountain.image} 
            alt={mountain.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nature-900/80 via-nature-900/20 to-transparent" />
          {/* Glass overlay that appears on hover */}
          <div className="absolute inset-0 glass-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Panel with Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="glass-strong dark:glass-strong-dark rounded-2xl p-6 backdrop-blur-lg border border-white/20 shadow-glass-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-sun-500 text-xs font-bold tracking-widest uppercase mb-2 block">
              {mountain.height}
            </span>
            <h3 className="text-3xl font-serif text-white dark:text-white mb-2 group-hover:text-sun-500 transition-colors duration-300">{mountain.name}</h3>
            <p className="text-white/90 dark:text-white/90 line-clamp-2 mb-6 font-light">
              {mountain.desc}
            </p>
            
            <div className="flex items-center gap-2 text-white dark:text-white font-medium group-hover:text-sun-500 transition-all duration-300">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      
      </Link>
    </motion.div>
  );
};

export default MountainCard;
