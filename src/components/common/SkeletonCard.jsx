const SkeletonCard = () => {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden relative glass-subtle dark:glass-subtle-dark animate-pulse shadow-glass">
      {/* Glass background with shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/2"></div>
      
      {/* Fake Text Lines with Glass Panel */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="glass-strong dark:glass-strong-dark rounded-2xl p-6 backdrop-blur-lg border border-white/20 shadow-glass-lg space-y-4">
          <div className="h-4 w-16 bg-white/20 dark:bg-white/10 rounded animate-pulse"></div>
          <div className="h-8 w-3/4 bg-white/20 dark:bg-white/10 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-white/20 dark:bg-white/10 rounded animate-pulse"></div>
          <div className="h-4 w-2/3 bg-white/20 dark:bg-white/10 rounded animate-pulse"></div>
          <div className="h-4 w-24 bg-white/20 dark:bg-white/10 rounded mt-4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;