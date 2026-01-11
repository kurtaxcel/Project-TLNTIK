import SectionHeading from '../components/common/SectionHeading';
import { useMountains } from '../hooks/useMountains';
import { motion } from 'framer-motion';

const Trilogy = () => {
  const { data: mountains, loading, error } = useMountains();
  
  if (loading) {
    return (
      <main className="bg-mist-500 dark:bg-nature-900 min-h-screen pt-24 pb-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="The Three Peaks" subtitle="Detailed Guide" />
          <div className="text-center mt-16">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-mist-500 dark:bg-nature-900 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="The Three Peaks" subtitle="Detailed Guide" />
        
        <div className="space-y-32 mt-16">
          {mountains && mountains.length > 0 ? (
            mountains.map((mt, index) => (
              <motion.div 
                id={mt.slug}
                key={mt.id || index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img src={mt.image} alt={mt.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-serif text-nature-900 dark:text-white transition-colors duration-300">
                      {mt.name}
                    </span>
                    <span className="px-3 py-1 bg-nature-900 text-sun-500 text-xs font-bold uppercase rounded-full">{mt.height}</span>
                  </div>

                  <p className="text-lg text-nature-800/80 dark:text-mist-500/80 leading-relaxed font-light transition-colors duration-300">
                    {mt.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-nature-900/10 dark:border-white/10 pt-6">
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-nature-900/50 dark:text-white/50 mb-1">
                        Difficulty
                      </span>
                      <span className="text-xl font-serif text-nature-900 dark:text-white transition-colors duration-300">
                        {mt.difficulty}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-nature-900/50 dark:text-white/50 mb-1">
                        Hours to Summit
                      </span>
                      <span className="text-xl font-serif text-nature-900 dark:text-white transition-colors duration-300">
                        {mt.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-nature-900/60 dark:text-white/60">No mountains data available.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Trilogy;
