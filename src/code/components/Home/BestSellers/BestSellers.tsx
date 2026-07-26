
import React from 'react'
import BestSellersSwiper from './BestSellersSwiper'
import getFood from '@/code/typescript/api/getFood'
import Link from 'next/link'
// Define a quick interface for clean props handling

const BestSellers = async () => {
    const foods = await getFood(11)
    console.log(foods)
  return (
    <div className='justify-center text-center items-center bestsellers bg-[#2A2725] pb-14'>
      <h1 className='subHeading font-bold italic text-2xl text-[#E3D5C3]'>Customer's Favorite</h1>
        <BestSellersSwiper foods={foods || []}/>
        <div className='buttonCons'>
          <button className="rounded-full bg-[#E3D5C3] px-7 py-3.5 font-semibold text-[#2A2725] transition hover:bg-white">Reserve a Table</button>
        <button className="rounded-full border border-[#E3D5C3]/50 px-7 py-3.5 font-semibold text-[#E3D5C3] transition hover:bg-[#E3D5C3]/10">Order Now!</button>
        <Link href="/menu" className="rounded-full border border-[#E3D5C3]/50 px-7 py-3.5 font-semibold text-[#E3D5C3] transition hover:bg-[#E3D5C3]/10">View Full Menu</Link>
        </div>
    </div>
  )
}

export default BestSellers