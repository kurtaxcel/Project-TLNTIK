const SectionHeading = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-12 text-${align}`}>
    <span className="text-sun-500 uppercase tracking-widest text-sm font-bold mb-2 block">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-serif text-nature-900 dark:text-white transition-colors duration-300">
      {title}
    </h2>
  </div>
);
export default SectionHeading;
