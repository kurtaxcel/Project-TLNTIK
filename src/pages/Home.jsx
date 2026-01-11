import Hero from '../components/home/Hero';
import MountainCard from '../components/mountains/MountainCard';
import { mountains } from '../data/mountains';

const Home = () => {
  return (
    <main className="bg-mist-500 dark:bg-nature-900 min-h-screen transition-colors duration-300">
      <Hero />
      
      {/* The Showcase Section */}
      <section id="trilogy-section" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sun-500 font-bold tracking-widest uppercase text-sm">The Trilogy</span>
          <h2 className="text-4xl md:text-5xl font-serif text-nature-900 dark:text-white mt-3 transition-colors duration-300">
            Choose Your Summit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mountains.map((mountain) => (
            <MountainCard key={mountain.id} mountain={mountain} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
