'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { Review } from '@/code/typescript/types'

interface ReviewCarouselProps {
  reviews: Review[]
}

const renderStars = (count: number) =>
  Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`text-sm ${index < count ? 'text-[#C86632]' : 'text-[#2A2725]/40'}`}>
      ★
    </span>
  ))

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)
  const description = review.acf.description || ''
  const shouldTruncate = description.length > 160
  const truncatedText = shouldTruncate ? `${description.slice(0, 160).trim()}...` : description

  return (
    <article className="flex h-full flex-col rounded-[32px] border bg-[#2A2725] p-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {review.acf.image ? (
            <div className="h-14 w-14 overflow-hidden rounded-full border border-[#C86632]/30 bg-[#1c1a15]">
              <img src={review.acf.image} alt={review.acf.name} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C86632]/30 bg-[#1c1a15] text-[#C86632]">
              <span className="text-xl">?</span>
            </div>
          )}
          <div>
            <p className="text-lg font-semibold text-[#E3D5C3]">{review.acf.name}</p>
            <p className="text-sm text-[#E3D5C3]/70">{review.acf.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">{renderStars(Number(review.acf.stars))}</div>
      </div>

      <div className="flex-1">
        <p className="text-sm leading-relaxed text-[#E3D5C3]/90">
          “{expanded || !shouldTruncate ? description : truncatedText}”
        </p>
        {shouldTruncate ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 inline-flex items-center rounded-full border border-[#C86632]/40 bg-[#C86632]/10 px-3 py-2 text-sm font-semibold text-[#C86632] transition hover:bg-[#C86632] hover:text-[#2A2725]"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        ) : null}
      </div>

    </article>
  )
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="rounded-[32px] bg-[#2A2725] border p-10 text-center text-[#E3D5C3]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <p className="text-lg font-semibold">No reviews available yet.</p>
        <p className="mt-3 text-sm text-[#E3D5C3]/70">Please check back later or verify your review endpoint configuration.</p>
      </div>
    )
  }

  return (
    <div data-aos="fade-up" data-aos-delay="120" data-aos-anchor-placement="top-bottom">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="py-4"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}
