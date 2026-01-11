import SectionHeading from '../components/common/SectionHeading';
import { motion } from 'framer-motion';
import { Target, Map, ShieldCheck, Code, Facebook, Instagram, Mail, Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <main className="bg-mist-500 dark:bg-nature-900 min-h-screen pt-32 pb-20 transition-colors duration-300">
      
      {/* 1. THE MISSION */}
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <SectionHeading title="My Mission" subtitle="Project TLNTIK" />
          <p className="text-xl md:text-2xl font-serif leading-relaxed text-nature-900 dark:text-white mb-8">
            "To bridge the gap between the raw beauty of Nasugbu's peaks and the modern hiker's journey."
          </p>
          <p className="text-nature-900/80 dark:text-mist-500/80 text-lg leading-relaxed max-w-2xl mx-auto">
            The Nasugbu Trilogy (Talamitam, Lantik, Apayang) is a local treasure. Project TLNTIK was born from a desire to showcase these mountains not just as destinations, but as a heritage. We aim to promote sustainable eco-tourism, support local verified guides, and provide accurate, accessible information for everyone.
          </p>
        </motion.div>
      </section>

      {/* 2. THE TECH */}
      <section className="bg-white dark:bg-white/5 py-24 mb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif text-nature-900 dark:text-white mb-6">
                Hiking Meets Modern Tech
              </h3>
              <p className="text-nature-900/80 dark:text-mist-500/80 text-lg leading-relaxed mb-6">
                Gone are the days of relying on outdated blog posts or vague directions. Project TLNTIK leverages modern web technologies to give you a seamless planning experience.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-sun-500 rounded-lg text-nature-900"><Map size={20}/></div>
                  <div>
                    <strong className="block text-nature-900 dark:text-white">Interactive & Verified</strong>
                    <span className="text-sm text-nature-900/60 dark:text-white/60">Curated data on trail difficulty, summit hours, and official jump-off points.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-sun-500 rounded-lg text-nature-900"><ShieldCheck size={20} /></div>
                  <div>
                    <strong className="block text-nature-900 dark:text-white">Safe & Legitimate</strong>
                    <span className="text-sm text-nature-900/60 dark:text-white/60">Direct access to verified local guides to ensure your safety and support the local economy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-sun-500 rounded-lg text-nature-900"><Code size={20}/></div>
                  <div>
                    <strong className="block text-nature-900 dark:text-white">Built for Performance</strong>
                    <span className="text-sm text-nature-900/60 dark:text-white/60">A lightning-fast React application designed to work perfectly on your phone, even with spotty signal.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Visual Side */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative h-[400px] bg-nature-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="text-center z-10">
                <span className="text-sun-500 font-mono text-sm tracking-widest mb-2 block">CURRENT VERSION</span>
                <span className="text-5xl font-bold text-white block mb-4">v1.0</span>
                <span className="px-4 py-2 border border-white/20 rounded-full text-white/60 text-xs uppercase tracking-widest">
                  React + Vite + Tailwind
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. THE CREATOR (Personal Touch) */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <SectionHeading title="Meet the Developer" subtitle="Behind the Code" />
        </div>
        
        <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-nature-900/10 dark:border-white/10 inline-block w-full max-w-lg">
          
          {/* PROFILE PICTURE */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img 
              src="/images/profile.jpg" 
              alt="Kurt Axcel N. Peñano" 
              className="w-full h-full object-cover rounded-full border-4 border-nature-100 dark:border-nature-800 shadow-md"
            />
          </div>

          <h4 className="text-2xl font-serif text-nature-900 dark:text-white mb-2">Kurt Axcel N. Peñano</h4>
          <p className="text-sun-500 font-bold text-xs uppercase tracking-widest mb-6">Student & Aspiring Developer</p>
          <p className="text-nature-900/80 dark:text-white/80 leading-relaxed italic mb-8">
            "I built this project because I'm curious about how things work."
          </p>
          
          {/* SOCIAL LINKS (Using links from your uploaded file) */}
          <div className="flex justify-center gap-6">
             <a 
               href="https://facebook.com/itzmekurt.axcel" 
               target="_blank" 
               rel="noreferrer" 
               className="text-nature-900/60 dark:text-white/60 hover:text-[#1877F2] hover:scale-110 transition-all duration-300"
               aria-label="Facebook"
             >
               <Facebook size={24} />
             </a>
             
             <a 
               href="https://www.instagram.com/rene.dkrts/" 
               target="_blank" 
               rel="noreferrer" 
               className="text-nature-900/60 dark:text-white/60 hover:text-[#E4405F] hover:scale-110 transition-all duration-300"
               aria-label="Instagram"
             >
               <Instagram size={24} />
             </a>

             <a 
               href="https://linkedin.com/in/pe%C3%B1anokurtaxcel" 
               target="_blank" 
               rel="noreferrer" 
               className="text-nature-900/60 dark:text-white/60 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
               aria-label="LinkedIn"
             >
               <Linkedin size={24} />
             </a>

             <a 
               href="https://github.com/kurtaxcel" 
               target="_blank" 
               rel="noreferrer" 
               className="text-nature-900/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
               aria-label="GitHub"
             >
               <Github size={24} />
             </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
