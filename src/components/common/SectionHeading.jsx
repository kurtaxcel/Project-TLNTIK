const SectionHeading = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-12 text-${align}`}>
    <div className="inline-block glass-subtle dark:glass-subtle-dark rounded-2xl px-6 py-4 backdrop-blur-lg border border-white/10 shadow-glass mb-4">
      <span className="text-sun-500 uppercase tracking-widest text-sm font-bold block">
        {subtitle}
      </span>
    </div>
    <h2 className="text-4xl md:text-5xl font-serif text-nature-900 dark:text-white transition-colors duration-300">
      {title}
    </h2>
  </div>
);
export default SectionHeading;
