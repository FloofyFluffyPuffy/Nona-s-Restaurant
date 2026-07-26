import React from 'react'
import Link from 'next/link'
import { TbToolsKitchen2Filled } from 'react-icons/tb'

const DOORDASH_URL =
  "https://www.doordash.com/store/nona’s-restaurant-lodi-30510461/40175558/"

const HomeHero = () => {
  return (
    <section className='hero h-screen flex items-center justify-center text-center bg-no-repeat bg-fixed bg-cover bg-center'>
      <div className='heroContent relative z-10 mx-auto w-full max-w-5xl px-6 text-center text-[#E3D5C3]'>
          <img src={"/assets/logo.png"} alt="Nona's Restaurant" className="reveal mx-auto h-28 w-28 rounded-full bg-white object-contain shadow-2xl ring-4 ring-white" />
          <p className="reveal text-[#C86632] mt-8 text-sm font-semibold uppercase tracking-[0.35em]">Authentic Italian Kitchen</p>
          <h1 className="reveal font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">Cooked like family,<br />served with love</h1>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-[#E3D5C3]/85">Handmade pasta, wood-fired classics, and recipes passed down through generations — the way Nona always intended.</p>
          <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/menu" className="inline-flex items-center gap-2 rounded-full scale-90 hover:scale-100 border-[#E3D5C3] border-2 bg-transparent px-6 py-3.5 font-semibold text-[#E3D5C3] transition hover:text-[#2A2725] hover:bg-[#E3D5C3]">
              <TbToolsKitchen2Filled className="h-5 w-5" />
              <span>Menu</span>
            </Link>
            <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" className="scale-90 hover:scale-100 inline-flex items-center gap-2 rounded-full bg-[#E3D5C3] px-6 py-3.5 font-semibold text-[#2A2725] transition hover:bg-[#C86632] hover:text-[#E3D5C3]">
              <img src="/assets/imgi_116_logo144.ico" alt="DoorDash" className="h-5 w-5" />
              <span>Order</span>
            </a>
          </div>
      </div>
    </section>
  )
}

export default HomeHero