import Hero from '../components/home/Hero';
import MountainCard from '../components/mountains/MountainCard';
import SkeletonCard from '../components/common/SkeletonCard'; 
import { useMountains } from '../hooks/useMountains';

const Home = () => {
  const { data: mountains, loading, error } = useMountains();

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
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-600 dark:text-red-400 mb-4">Failed to load mountains data</p>
              <p className="text-nature-900/60 dark:text-white/60 text-sm">{error}</p>
            </div>
          ) : mountains && mountains.length > 0 ? (
            mountains.map((mountain) => (
              <MountainCard key={mountain.id || mountain.slug} mountain={mountain} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-nature-900/60 dark:text-white/60">No mountains data available.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
