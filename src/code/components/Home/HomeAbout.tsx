"use client";

import { useEffect, useState } from 'react'

const HomeAbout = () => {
  const images = ['/assets/homeAbout1.png', '/assets/homeabout2.jpg']
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 2600)

    return () => window.clearInterval(interval)
  }, [images.length])

  return (
    <section className="bg-[#E3D5C3] px-4 py-12 sm:px-6 sm:py-16 lg:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 lg:grid-cols-4 lg:gap-8">
        <div className="group aspect-[4/5] overflow-hidden rounded-3xl border border-[#C86632]/20 shadow-[0_20px_60px_rgba(0,0,0,0.30)] lg:hidden" data-aos="fade-right">
          <img 
            src={images[activeImage]}
            alt="Nona's restaurant kitchen"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="hidden group aspect-[4/5] overflow-hidden rounded-3xl border border-[#C86632]/20 shadow-[0_20px_60px_rgba(0,0,0,0.30)] lg:block lg:col-span-1" data-aos="fade-right">
          <img 
            src={images[0]}
            alt="Nona's restaurant exterior"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="hidden group aspect-[4/5] overflow-hidden rounded-3xl border border-[#C86632]/20 shadow-[0_20px_60px_rgba(0,0,0,0.30)] lg:block lg:col-span-1 lg:translate-y-8" data-aos="fade-left" data-aos-delay="100">
          <img 
            src={images[1]}
            alt="Nona's restaurant interior"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="space-y-6 text-[#2A2725] lg:col-span-2 lg:pl-6" data-aos="fade-up" data-aos-delay="160">
          <div className="space-y-3 sm:space-y-4">
            <span className="block text-2xl font-bold italic text-[#C86632]">Our Story</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#2A2725] sm:text-4xl">The Heart of Nona’s Kitchen</h2>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-[#2A2725]/90 sm:text-base">
            Our story began with a family recipe and a love for bold, authentic flavors. Every dish is crafted to celebrate tradition, warmth, and the simple joy of sharing a meal with the people you care about.
          </p>

          <p className="max-w-2xl text-sm italic leading-relaxed text-[#2A2725]/80">
            From handmade pasta to carefully selected ingredients, Nona’s Restaurant brings a timeless menu to life with a modern feel and a cozy neighborhood spirit.
          </p>

          <div>
            <a href="/menu" className="inline-flex scale-90 items-center gap-2 rounded-full border-2 border-[#2A2725] bg-transparent px-5 py-3 text-sm font-semibold text-[#2A2725] transition hover:scale-100 hover:bg-[#2A2725] hover:text-[#E3D5C3] sm:px-6 sm:py-3.5">
              <span>Our Story</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout