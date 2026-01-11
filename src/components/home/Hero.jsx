import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/mt-talamitam.jpg" 
          alt="Mt. Talamitam" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-900/30 via-transparent to-nature-900/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        {/* Glass Panel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-strong dark:glass-strong-dark rounded-3xl p-8 md:p-12 backdrop-blur-2xl border border-white/20 shadow-glass-xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-sun-500" />
            <span className="text-white/90 text-sm tracking-[0.3em] uppercase font-sans font-medium">
              Brgy. Kayrilaw, Nasugbu
            </span>
            <div className="h-[1px] w-12 bg-sun-500" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-2xl"
          >
            The Nasugbu Trilogy
          </motion.h1>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.4 }}
          >
            <button 
              onClick={() => document.getElementById('trilogy-section').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-sun-500 text-nature-900 font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-sun-500/50 hover:border-white/50"
            >
              Explore the Peaks
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Glass Accent Elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute -left-4 top-1/4 glass-subtle rounded-2xl p-4 backdrop-blur-lg border border-white/10 shadow-glass hidden lg:block"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-sun-500/20 to-transparent rounded-xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="absolute -right-4 top-3/4 glass-subtle rounded-2xl p-4 backdrop-blur-lg border border-white/10 shadow-glass hidden lg:block"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-nature-900/20 to-transparent rounded-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
