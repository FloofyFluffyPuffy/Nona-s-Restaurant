const MenuHero = () => {
  return (
    <section className="bg-[linear-gradient(135deg,#2A2725_0%,#1F1B18_100%)] px-4 py-20 text-[#E3D5C3] sm:px-6 sm:py-24 lg:px-8" data-aos="fade-up">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-5 flex justify-center">
          <img
            src="/assets/logo.png"
            alt="Nona's Restaurant"
            className="h-20 w-20 rounded-full border-4 border-[#E3D5C3]/70 bg-white object-contain shadow-[0_15px_45px_rgba(0,0,0,0.25)] sm:h-24 sm:w-24"
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C86632]">Nona’s Italian Table</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Served with warmth. Tastes like home.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#E3D5C3]/80 sm:text-lg">
          From handmade pasta and slow-simmered sauces to rustic sides and indulgent desserts, every dish carries the soul of Italian hospitality.
        </p>
      </div>
    </section>
  );
};

export default MenuHero;
