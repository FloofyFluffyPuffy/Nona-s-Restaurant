import React from 'react'

const Footer = () => {
  return (
    <footer id='location' className="bg-[#2A2725] text-[#E3D5C3]" data-aos="fade-up">
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <img src="/assets/logo.png" alt="Nona's Restaurant" className="h-10 w-10 rounded-full border border-[#E3D5C3]/20 bg-white object-contain" />
                <h2 className="text-2xl font-bold text-[#E3D5C3]">Nona&apos;s Restaurant</h2>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#E3D5C3]/75">
                Enjoy authentic Italian comfort food in Lodi with fresh ingredients, warm hospitality, and delicious family recipes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.yelp.com/biz/nona-s-restaurant-lodi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#C86632]/30 bg-[#2a2620] transition hover:border-[#E3D5C3] hover:scale-110 hover:bg-[#E3D5C3]"
              >
                <img
                  src="/assets/imgi_16_yelp_icon-icons.com_62753.png"
                  alt="Yelp"
                  className="h-6 w-6"
                />
              </a>

              <a
                href="https://www.facebook.com/p/Nonas-Restaurant-61560794832344/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#C86632]/30 bg-[#2a2620] transition hover:border-[#E3D5C3] hover:scale-110 hover:bg-[#E3D5C3]"
              >
                <img
                  src="/assets/imgi_12_960px-2023_Facebook_icon.svg.png"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>

              <a
                href="https://www.doordash.com/store/nona’s-restaurant-lodi-30510461/40175558/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#C86632]/30 bg-[#2a2620] transition hover:border-[#E3D5C3] hover:scale-110 hover:bg-[#E3D5C3]"
              >
                <img
                  src="/assets/imgi_116_logo144.ico"
                  alt="DoorDash"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#E3D5C3]">Contact Us</h3>
            <div className="rounded-[28px] border border-[#E3D5C3] bg-[#231f19] p-6">
              <div className="space-y-4 text-sm text-[#E3D5C3]/85">
                <div>
                  <p className="font-semibold text-[#E3D5C3]">Address</p>
                  <p className="text-[#E3D5C3]">1110 W Kettleman Ln Ste 18-1, Lodi, CA 95240</p>
                </div>
                <div>
                  <p className="font-semibold text-[#E3D5C3]">Phone</p>
                  <a href="tel:+12092637023" className="text-[#E3D5C3] font-semibold hover:text-[#E3D5C3]">+1 209-263-7023</a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#E3D5C3]">Opening Hours</h3>
            <div className="rounded-[28px] border border-[#E3D5C3] bg-[#231f19] p-6">
              <div className="space-y-2 text-sm text-[#E3D5C3]/90">
                <p className="font-semibold text-[#E3D5C3]">Monday — Sunday</p>
                <p className="text-[#E3D5C3] font-semibold">11:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#C86632]/20">
          <iframe
            title="Nona's Restaurant Google Map"
            src="https://www.google.com/maps?q=Nona%27s+Restaurant+Lodi,+CA&z=17&output=embed"
            className="h-72 w-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="border-t border-[#C86632]/10 pt-6 text-center text-sm text-[#E3D5C3]/60">
         © {new Date().getFullYear()}&nbsp;Nona&apos;s Restaurant
        </div>
      </div>
    </footer>
  )
}

export default Footer
