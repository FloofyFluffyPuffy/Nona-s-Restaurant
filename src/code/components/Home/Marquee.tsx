import React from 'react'

export const Marquee = () => {
  return (
    <div className="overflow-hidden border-y border-[#2A2725]/15 bg-[#2A2725] py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-10">
            {['Handmade', 'Italian Cuisine', 'Family Recipes', 'Fresh Daily', "Lodi's #1", 'Since 1978'].map((t) => (
              <span key={t} className="flex items-center gap-10 font-display text-2xl italic text-[#E3D5C3]">
                {t}
                <span className="text-[#E3D5C3]/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export const MarqueeReverse = () => {
  return (
    <div className="overflow-hidden border-y border-[#2A2725]/15 bg-[#2A2725] py-4">
      <div className="flex w-max animate-marquee-reverse gap-10 whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-10">
            {['Handmade', 'Italian Cuisine', 'Family Recipes', 'Fresh Daily', "Lodi's #1", 'Since 1978'].map((t) => (
              <span key={t} className="flex items-center gap-10 font-display text-2xl italic text-[#E3D5C3]">
                {t}
                <span className="text-[#E3D5C3]/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee