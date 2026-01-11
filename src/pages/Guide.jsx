import SectionHeading from '../components/common/SectionHeading';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, Facebook, BadgeCheck } from 'lucide-react';

// Mock Data for Guides (You can move this to a separate file later)
const guides = [
  { 
    id: 1,
    name: "Juan Dela Cruz", 
    verification: "Brgy. ID: 2025-001", 
    type: "Local Guide",
    contact: "0917-123-4567",
    link: "tel:09171234567"
  },
  { 
    id: 2,
    name: "Maria Santos", 
    verification: "DENR Accredited: #4A-23", 
    type: "Master Guide",
    contact: "m.me/mariasantos",
    link: "https://messenger.com"
  },
  { 
    id: 3,
    name: "Pedro Penduko", 
    verification: "Tourism Certificate: TO-88", 
    type: "Local Guide",
    contact: "0998-987-6543",
    link: "tel:09989876543"
  },
  { 
    id: 4,
    name: "Ana Reyes", 
    verification: "Assoc. ID: TG-012", 
    type: "Sweeper",
    contact: "0912-345-6789",
    link: "tel:09123456789"
  },
];

const Guide = () => {
  return (
    <main className="bg-mist-500 dark:bg-nature-900 min-h-screen pt-32 pb-20 transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Verified Guides" 
          subtitle="Safety First" 
        />

        {/* Introduction Text */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-nature-900/80 dark:text-mist-500/80 text-lg leading-relaxed">
            For your safety, please only transact with verified guides listed below. 
            These individuals are registered with the Barangay and Local Tourism Office.
          </p>
        </div>

        {/* The Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-white/5 rounded-2xl shadow-xl overflow-hidden border border-nature-900/10 dark:border-white/10"
        >
          <div className="overflow-x-auto"> {/* Handles horizontal scroll on mobile */}
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-nature-900 text-white border-b border-nature-800 dark:border-white/10">
                  <th className="py-5 px-6 font-serif text-lg tracking-wide">Guide Name</th>
                  <th className="py-5 px-6 font-sans text-sm font-bold uppercase tracking-widest text-sun-500">Verification</th>
                  <th className="py-5 px-6 font-sans text-sm font-bold uppercase tracking-widest text-sun-500">Contact</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-nature-900/10 dark:divide-white/10">
                {guides.map((guide) => (
                  <tr 
                    key={guide.id} 
                    className="hover:bg-nature-900/5 dark:hover:bg-white/5 transition-colors duration-200 group"
                  >
                    
                    {/* Name Column */}
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        {/* Avatar Placeholder */}
                        <div className="w-10 h-10 rounded-full bg-nature-100 dark:bg-nature-800 flex items-center justify-center text-nature-900 dark:text-white font-bold">
                          {guide.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-nature-900 dark:text-white flex items-center gap-2">
                            {guide.name}
                            <BadgeCheck className="w-4 h-4 text-blue-500" /> {/* Verified Check */}
                          </p>
                          <span className="text-xs text-nature-900/50 dark:text-white/50 uppercase tracking-wider">
                            {guide.type}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Verification Column */}
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 text-nature-800 dark:text-mist-500">
                        <ShieldCheck className="w-5 h-5 text-nature-900/40 dark:text-white/40" />
                        <span className="font-mono text-sm">{guide.verification}</span>
                      </div>
                    </td>

                    {/* Contact Column */}
                    <td className="py-5 px-6">
                      <a 
                        href={guide.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-nature-100 dark:bg-white/10 text-nature-900 dark:text-white text-sm font-bold rounded-lg hover:bg-sun-500 hover:text-nature-900 transition-colors"
                      >
                        {guide.contact.includes('09') ? <Phone size={16} /> : <Facebook size={16} />}
                        {guide.contact}
                      </a>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Disclaimer Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-nature-900/40 dark:text-white/30 uppercase tracking-widest">
            Last Updated: January 2026 • Brgy. Kayrilaw Tourism Office
          </p>
        </div>

      </div>
    </main>
  );
};

export default Guide;
