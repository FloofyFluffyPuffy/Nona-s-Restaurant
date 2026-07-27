export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8EEE4] px-4 py-24 sm:px-6 lg:px-8">
      <section id="about" className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[32px] border border-[#C86632]/15 bg-white p-8 shadow-[0_20px_60px_rgba(42,39,37,0.08)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C86632]">About Nona’s</p>
        <h1 className="text-3xl font-bold tracking-tight text-[#2A2725] sm:text-4xl">
          A warm neighborhood kitchen inspired by family tradition.
        </h1>
        <p className="text-base leading-8 text-[#2A2725]/80">
          Nona’s Restaurant brings together handmade pasta, comforting sauces, and genuine hospitality in one inviting space.
          Every dish reflects the care of a family recipe and the comfort of a meal shared with loved ones.
        </p>
      </section>
    </main>
  );
}
