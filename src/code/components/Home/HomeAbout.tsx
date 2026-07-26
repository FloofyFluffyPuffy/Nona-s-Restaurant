import React from 'react'

const HomeAbout = () => {
  return (
    <section className="homeAbout bg-[#C86632] py-16 px-6">
      <div className="homeAboutContentContainer max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        
        <div className="imageOne col-span-1 aspect-[3/4] overflow-hidden rounded-3xl border border-[#C86632]/20 shadow-[0_20px_60px_rgba(0,0,0,0.30)]">
          <img 
            src="/assets/homeAbout1.png" 
            alt="Nona's restaurant kitchen" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="imageTwo col-span-1 lg:translate-y-10 aspect-[3/4] overflow-hidden rounded-3xl border border-[#C86632]/20 shadow-[0_20px_60px_rgba(0,0,0,0.30)]">
          <img 
            src="/assets/homeabout2.jpg" 
            alt="Chef at work" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="homeAboutContent col-span-1 lg:col-span-2 space-y-8 lg:pl-10 text-[#E3D5C3]">
          <div className="space-y-4">
            <span className="block text-[#E3D5C3] text-2xl font-bold italic">Our Story</span>
            <h2 className="text-4xl font-bold tracking-tight">The Heart of Nona’s Kitchen</h2>
          </div>

          <p className="text-base leading-relaxed text-[#E3D5C3] max-w-2xl">
            Our story began with a family recipe and a love for bold, authentic flavors. Every dish is crafted to celebrate tradition, warmth, and the simple joy of sharing a meal with the people you care about.
          </p>

          <p className="text-sm italic leading-relaxed text-[#2A2725] max-w-2xl">
            From handmade pasta to carefully selected ingredients, Nona’s Restaurant brings a timeless menu to life with a modern feel and a cozy neighborhood spirit.
          </p>

          <div>
            <a href="/menu" className="inline-flex items-center gap-2 rounded-full border-2 border-[#E3D5C3] bg-transparent px-6 py-3.5 font-semibold hover:text-[#2A2725] text-[#E3D5C3] transition scale-90 hover:scale-100 hover:bg-[#E3D5C3]">
              <span>Our Story</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HomeAbout