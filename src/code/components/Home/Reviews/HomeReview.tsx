import getReview from '@/code/typescript/api/getReview'
import { Review } from '@/code/typescript/types'
import ReviewCarousel from './ReviewCarousel'

const HomeReview = async () => {
  const reviews = await getReview()
  const reviewData: Review[] = reviews ?? []

  return (
    <section className="reviewSection bg-[#2A2725] py-16 px-6 text-[#E3D5C3]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-[#C86632] text-sm uppercase tracking-[0.3em]">From Yelp</p>
          <h2 className="mt-3 text-3xl font-bold">What Guests Are Saying</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#E3D5C3]/80">
            Real reviews from local guests who love our food, atmosphere, and hospitality.
          </p>
        </div>

        <ReviewCarousel reviews={reviewData} />

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.yelp.com/biz/nona-s-restaurant-lodi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#E3D5C3] px-6 py-3.5 font-semibold text-[#2A2725] transition hover:bg-[#C86632] hover:text-[#E3D5C3]"
          >
            <img
              src="/assets/imgi_16_yelp_icon-icons.com_62753.png"
              alt="Yelp"
              className="h-5 w-5"
            />
            <span>More on Yelp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeReview