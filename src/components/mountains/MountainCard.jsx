import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link

const MountainCard = ({ mountain }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[500px] w-full overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* 2. Wrap the whole card content in a Link for better UX */}
      <Link to={`/trilogy#${mountain.id}`} className="block h-full w-full">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={mountain.image} 
            alt={mountain.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-nature-900/20 to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <span className="text-sun-500 text-xs font-bold tracking-widest uppercase mb-2 block">
            {mountain.height}
          </span>
          <h3 className="text-3xl font-serif text-white mb-2">{mountain.name}</h3>
          <p className="text-white/80 line-clamp-2 mb-6 font-light">
            {mountain.desc}
          </p>
          
          <div className="flex items-center gap-2 text-white font-medium group-hover:text-sun-500 transition-colors">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      
      </Link>
    </motion.div>
  );
};

export default MountainCard;
