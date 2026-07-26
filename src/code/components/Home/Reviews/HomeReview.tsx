import React from 'react'

const reviews = [
  {
    name: 'Samantha R.',
    rating: 5,
    location: 'Lodi, CA',
    text: 'Absolutely delicious! The pasta was rich, the sauce was perfectly balanced, and the service felt warm and genuine. A must-visit for anyone looking for authentic Italian comfort food.',
  },
  {
    name: 'Miguel H.',
    rating: 4,
    location: 'Stockton, CA',
    text: 'Great atmosphere, tasty cocktails, and the portions were generous. The smoked bourbon old fashioned was a standout. Will be back for date night.',
  },
  {
    name: 'Aisha K.',
    rating: 5,
    location: 'Sacramento, CA',
    text: 'Best neighborhood restaurant in town. The meatballs were incredible and the staff was so friendly. Felt like dining at a friend’s home.',
  },
]

const renderStars = (count: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`text-sm ${index < count ? 'text-[#C86632]' : 'text-[#2A2725]/40'}`}>
      ★
    </span>
  ))
}

const HomeReview = () => {
  return (
    <section className="reviewSection bg-[#E3D5C3] py-16 px-6 text-[#2A2725]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-[#C86632] text-sm uppercase tracking-[0.3em]">From Yelp</p>
          <h2 className="mt-3 text-3xl font-bold">What Guests Are Saying</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#E3D5C3]/80">
            Real reviews from local guests who love our food, atmosphere, and hospitality.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[32px] border border-[#E3D5C3]/10 bg-[#2A2725]/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-[#E3D5C3]">{review.name}</p>
                  <p className="text-sm text-[#E3D5C3]/70">{review.location}</p>
                </div>
                <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
              </div>
              <p className="text-sm leading-relaxed text-[#E3D5C3]/90">“{review.text}”</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C86632]/40 bg-[#C86632]/10 px-3 py-2 text-sm font-semibold text-[#C86632]">
                <span>Yelp</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#C86632]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeReview