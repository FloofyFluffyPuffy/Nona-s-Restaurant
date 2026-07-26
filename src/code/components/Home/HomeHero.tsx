import React from 'react'
import Link from 'next/link'
import { TbToolsKitchen2Filled } from 'react-icons/tb'

const DOORDASH_URL =
  "https://www.doordash.com/store/nona’s-restaurant-lodi-30510461/40175558/"

const HomeHero = () => {
  return (
    <section className='hero flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-16 text-center sm:px-6'>
      <div className='heroContent relative z-10 mx-auto w-full max-w-5xl px-2 text-center text-[#E3D5C3] sm:px-6'>
        <img src={"/assets/logo.png"} alt="Nona's Restaurant" className="reveal mx-auto h-20 w-20 rounded-full bg-white object-contain shadow-2xl ring-4 ring-white sm:h-28 sm:w-28" />
        <p className="reveal mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#C86632] sm:mt-8 sm:text-sm">Authentic Italian Kitchen</p>
        <h1 className="reveal mt-4 font-display text-3xl font-extrabold leading-[1.05] sm:text-5xl md:text-7xl">Cooked like family,<br />served with love</h1>
        <p className="reveal mx-auto mt-4 max-w-xl text-sm leading-6 text-[#E3D5C3]/85 sm:mt-6 sm:text-lg">Handmade pasta, wood-fired classics, and recipes passed down through generations — the way Nona always intended.</p>
        <div className="reveal mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
          <Link href="/menu" className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#E3D5C3] bg-transparent px-5 py-3 text-sm font-semibold text-[#E3D5C3] transition hover:scale-100 hover:bg-[#E3D5C3] hover:text-[#2A2725] sm:w-auto sm:px-6 sm:py-3.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E3D5C3] text-[#2A2725] sm:h-8 sm:w-8">
              <TbToolsKitchen2Filled className="h-5 w-5" />
            </span>
            <span>Menu</span>
          </Link>
          <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E3D5C3] px-5 py-3 text-sm font-semibold text-[#2A2725] transition hover:bg-[#C86632] hover:text-[#E3D5C3] sm:w-auto sm:px-6 sm:py-3.5">
            <img src="/assets/imgi_116_logo144.ico" alt="DoorDash" className="h-5 w-5" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeHero