
import React from 'react'
import { TbToolsKitchen2Filled } from 'react-icons/tb'
import BestSellersSwiper from './BestSellersSwiper'
import getFood from '@/code/typescript/api/getFood'
import Link from 'next/link'

const DOORDASH_URL =
  "https://www.doordash.com/store/nona’s-restaurant-lodi-30510461/40175558/?rwg_token=AE37R_gM84b4JesefYU7BWnKjQeS5Oc-hICYPqvkJV0KgiOzQ0EjK62W6F5QwGx5NbdmnHkSpbARoEgT0UQS65VmgY03W1DvKw==&utm_campaign=gpa"

const BestSellers = async () => {
    const foods = await getFood(11)
    console.log(foods)
  return (
    <div className='justify-center text-center items-center bestsellers bg-[#2A2725] px-4 pb-14 sm:px-6'>
      <h1 className='subHeading pt-10 text-2xl font-bold italic text-[#E3D5C3]' data-aos="fade-up">Customer's Favorite</h1>
        <BestSellersSwiper foods={foods || []}/>
        <div className='buttonCons mt-8 flex flex-wrap justify-center gap-4' data-aos="fade-up" data-aos-delay="120">
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
  )
}

export default BestSellers