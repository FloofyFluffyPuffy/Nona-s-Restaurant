import React from 'react'
import Link from 'next/link'
import { TbToolsKitchen2Filled } from 'react-icons/tb'

const DOORDASH_URL =
  "https://www.doordash.com/store/nona’s-restaurant-lodi-30510461/40175558/"

const HomeHero = () => {
  return (
    <section className='hero flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 text-center sm:px-6 sm:py-24'>
      <div className='heroContent relative z-10 mx-auto w-full max-w-5xl px-2 text-center text-[#E3D5C3] sm:px-6'>
        <img src={"/assets/logo.png"} alt="Nona's Restaurant" className="mx-auto h-20 w-20 rounded-full bg-white object-contain shadow-2xl ring-4 ring-white sm:h-28 sm:w-28" data-aos="zoom-in" data-aos-duration="700" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#C86632] sm:mt-8 sm:text-sm" data-aos="fade-up" data-aos-delay="100">Authentic Italian Kitchen</p>
        <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] sm:text-5xl md:text-7xl" data-aos="fade-up" data-aos-delay="180">Cooked like family,<br />served with love</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#E3D5C3]/85 sm:mt-6 sm:text-lg" data-aos="fade-up" data-aos-delay="260">Handmade pasta, wood-fired classics, and recipes passed down through generations — the way Nona always intended.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4" data-aos="fade-up" data-aos-delay="340" data-aos-anchor-placement="top-bottom">
          <Link href="/menu" className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#E3D5C3] bg-transparent px-5 py-3 text-sm font-semibold text-[#E3D5C3] transition hover:scale-[1.02] hover:bg-[#E3D5C3] hover:text-[#2A2725] sm:w-auto sm:px-6 sm:py-3.5" data-aos="fade-up" data-aos-delay="360" data-aos-anchor-placement="top-bottom">
            <TbToolsKitchen2Filled className="h-5 w-5" />
            <span>Menu</span>
          </Link>
          <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E3D5C3] px-5 py-3 text-sm font-semibold text-[#2A2725] transition hover:scale-[1.02] hover:bg-[#C86632] hover:text-[#E3D5C3] sm:w-auto sm:px-6 sm:py-3.5" data-aos="fade-up" data-aos-delay="420" data-aos-anchor-placement="top-bottom">
            <img src="/assets/imgi_116_logo144.ico" alt="DoorDash" className="h-5 w-5" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeHero