import SectionHeading from '../components/common/SectionHeading';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, Facebook, BadgeCheck } from 'lucide-react';

// Verified Guides Data - Real Guide Directory
const guides = [
  { 
    id: 1,
    name: "Delly", 
    verification: "Brgy. ID: 2026-001", 
    type: "Local Guide",
    contact: "0992 535 6659",
    link: "tel:09925356659"
  },
  { 
    id: 2,
    name: "Josh Garcia", 
    verification: "Brgy. ID: 2026-002", 
    type: "Local Guide",
    contact: "0950 274 6207",
    link: "tel:09502746207"
  },
  { 
    id: 3,
    name: "Kim Badlis", 
    verification: "Brgy. ID: 2026-003", 
    type: "Local Guide",
    contact: "0997 167 7923",
    link: "tel:09971677923"
  },
  { 
    id: 4,
    name: "Marlyn Almario", 
    verification: "Brgy. ID: 2026-004", 
    type: "Local Guide",
    contact: "0927 287 7321",
    link: "tel:09272877321"
  },
  { 
    id: 5,
    name: "Emmanuel Dimapilis", 
    verification: "Brgy. ID: 2026-005", 
    type: "Local Guide",
    contact: "0935 899 0079",
    link: "tel:09358990079"
  },
  { 
    id: 6,
    name: "Maricel Badlis", 
    verification: "Brgy. ID: 2026-006", 
    type: "Local Guide",
    contact: "0926 201 4074",
    link: "tel:09262014074"
  },
  { 
    id: 7,
    name: "Myrna Obado", 
    verification: "Brgy. ID: 2026-007", 
    type: "Local Guide",
    contact: "0994 276 1379",
    link: "tel:09942761379"
  },
  { 
    id: 8,
    name: "Sherwin Bacquian", 
    verification: "Brgy. ID: 2026-008", 
    type: "Local Guide",
    contact: "0965 139 7480",
    link: "tel:09651397480"
  },
  { 
    id: 9,
    name: "Monica Saldania", 
    verification: "Brgy. ID: 2026-009", 
    type: "Local Guide",
    contact: "0992 514 9845",
    link: "tel:09925149845"
  },
  { 
    id: 10,
    name: "Lydia Flores", 
    verification: "Brgy. ID: 2026-010", 
    type: "Local Guide",
    contact: "0955 449 2244",
    link: "tel:09554492244"
  },
  { 
    id: 11,
    name: "Ella Badlis", 
    verification: "Brgy. ID: 2026-011", 
    type: "Local Guide",
    contact: "0952 559 2230",
    link: "tel:09525592230"
  },
  { 
    id: 12,
    name: "Mario Fontanilla", 
    verification: "Brgy. ID: 2026-012", 
    type: "Local Guide",
    contact: "0975 461 0071",
    link: "tel:09754610071"
  },
  { 
    id: 13,
    name: "C Jay Flores", 
    verification: "Brgy. ID: 2026-013", 
    type: "Local Guide",
    contact: "0955 059 1859",
    link: "tel:09550591859"
  },
  { 
    id: 14,
    name: "Edil Almario", 
    verification: "Brgy. ID: 2026-014", 
    type: "Local Guide",
    contact: "0955 391 0247",
    link: "tel:09553910247"
  },
  { 
    id: 15,
    name: "Manny Badlis", 
    verification: "Brgy. ID: 2026-015", 
    type: "Local Guide",
    contact: "0997 167 7914",
    link: "tel:09971677914"
  },
  { 
    id: 16,
    name: "Jenilyn Vislenio", 
    verification: "Brgy. ID: 2026-016", 
    type: "Local Guide",
    contact: "0991 579 4974",
    link: "tel:09915794974"
  },
  { 
    id: 17,
    name: "Salvador Alonzo", 
    verification: "Brgy. ID: 2026-017", 
    type: "Local Guide",
    contact: "0955 390 1197",
    link: "tel:09553901197"
  },
  { 
    id: 18,
    name: "Mark Anthony Umila", 
    verification: "Brgy. ID: 2026-018", 
    type: "Local Guide",
    contact: "0965 754 9221",
    link: "tel:09657549221"
  },
  { 
    id: 19,
    name: "Florida Paez", 
    verification: "Brgy. ID: 2026-019", 
    type: "Local Guide",
    contact: "0948 888 6815",
    link: "tel:09488886815"
  },
  { 
    id: 20,
    name: "Leonardo Perey", 
    verification: "Brgy. ID: 2026-020", 
    type: "Local Guide",
    contact: "0950 902 5272",
    link: "tel:09509025272"
  },
  { 
    id: 21,
    name: "Loida Palmiano", 
    verification: "Brgy. ID: 2026-021", 
    type: "Local Guide",
    contact: "0955 755 1536",
    link: "tel:09557551536"
  },
  { 
    id: 22,
    name: "Michael Badlis", 
    verification: "Brgy. ID: 2026-022", 
    type: "Local Guide",
    contact: "0926 201 4074",
    link: "tel:09262014074"
  },
  { 
    id: 23,
    name: "Rolly Resurreccion", 
    verification: "Brgy. ID: 2026-023", 
    type: "Local Guide",
    contact: "0906 142 6317",
    link: "tel:09061426317"
  },
  { 
    id: 24,
    name: "Ernie Resurreccion", 
    verification: "Brgy. ID: 2026-024", 
    type: "Local Guide",
    contact: "0916 170 0248",
    link: "tel:09161700248"
  },
  { 
    id: 25,
    name: "Danilo Esteva", 
    verification: "Brgy. ID: 2026-025", 
    type: "Local Guide",
    contact: "0969 019 4748",
    link: "tel:09690194748"
  },
  { 
    id: 26,
    name: "Noriel Palmiano", 
    verification: "Brgy. ID: 2026-026", 
    type: "Local Guide",
    contact: "0965 142 5178",
    link: "tel:09651425178"
  },
  { 
    id: 27,
    name: "Shedrick Ulayon", 
    verification: "Brgy. ID: 2026-027", 
    type: "Local Guide",
    contact: "0997 554 0565",
    link: "tel:09975540565"
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
