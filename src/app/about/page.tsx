export default function AboutPage() {
  const IMG = {
    interior: 'https://images.hostinger.com/a854b0ed-1714-484a-b5b3-4517ce0d26e6.png',
    chef: 'https://images.hostinger.com/b552399a-9f51-443a-8a13-1679c978b634.png',
  };

  return (
    /* Full-width background wrapper */
    <section id="about" className="w-full bg-[#E3D5C3] px-6 py-24 lg:py-32">
      {/* Centered content container */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="reveal relative">
          <img
            src={IMG.interior}
            alt="Nona's dining room"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
          <img
            src={IMG.chef}
            alt="Chef at work"
            className="absolute -bottom-8 -right-4 hidden w-48 rounded-xl border-4 border-[#E3D5C3] object-cover shadow-2xl sm:block lg:w-56"
          />
        </div>

        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C86632]">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            A table where everyone belongs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#2A2725]/80">
            Nona's began in 1978 with a single wood-fired oven and a handwritten book of family recipes. Four decades later, we still roll our pasta by hand each morning and simmer our ragu low and slow, just as Nona did.
          </p>
          <p className="mt-4 leading-relaxed text-[#2A2725]/70">
            Every plate carries a little of her spirit — generous, honest, and made to be shared.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ['45+', 'Years serving'],
              ['30', 'Family recipes'],
              ['5★', 'Guest rated'],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-[#2A2725] p-4 text-center text-[#E3D5C3]">
                <div className="font-display text-3xl font-bold">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-[#E3D5C3]/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}