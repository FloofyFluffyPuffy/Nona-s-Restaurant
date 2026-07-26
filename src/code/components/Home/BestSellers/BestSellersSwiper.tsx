"use client"
import React from 'react'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Food } from '../../../typescript/types';

interface BsMenuProps {
  foods: Food[];
}

const BestSellersSwiper: React.FC<BsMenuProps> = ({ foods = [] }) => {
  if (!foods || foods.length === 0) {
    return <div className="text-[#E3D5C3] text-center p-6">No items available</div>;
  }

  return (
    <div className="py-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="px-2"
      >
        {foods.map((food) => (
          <SwiperSlide key={food.id}>
            <div className='swiperCon cursor-pointer scale-94 hover:scale-99 transition-all duration-250 hover:border-4 hover:border-[#C86632] bg-[#E3D5C3] p-6 rounded-lg text-[#E3D5C3] text-center'>
              <div className='ImageCard aspect-video w-full mx-auto mb-4 overflow-hidden rounded-md bg-[#E3D5C3] flex items-center justify-center'>
                <img 
                  src={food.acf?.image} 
                  alt={food.acf?.alt || food.title?.rendered}
                  className="w-full h-full object-cover object-center transition-transform duration-300" 
                />
              </div>
              <h2 className="text-[#2A2725] font-bold text-2xl mb-2">{food?.title?.rendered}</h2>
              <h3 className="text-[#2A2725] text-2xl font-semibold mt-2">${food.acf?.price}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BestSellersSwiper