// src/app/page.js

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-[#f8fafc] overflow-hidden text-[#111] scroll-smooth">

      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-44 pb-28 overflow-hidden"
      >

        <img
          src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6 max-w-6xl text-white">

          <p className="uppercase tracking-[8px] mb-8 text-sm">
            Premium Printing & Packaging Studio
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.95] mb-10 tracking-[-3px]">
            Creative Branding
            <br />
            That Feels Premium
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Luxury packaging, innovative printing and modern branding
            experiences designed for ambitious businesses.
          </p>

          <div className="flex gap-6 justify-center mt-16 flex-wrap">

            <a
              href="#services"
              className="bg-white text-black px-10 py-5 rounded-full hover:scale-105 transition duration-300"
            >
              Explore Services
            </a>

            <a
              href="#portfolio"
              className="border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              View Portfolio
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 px-6 bg-white scroll-mt-32"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="rounded-[40px] shadow-2xl"
          />

          <div>

            <p className="uppercase tracking-[5px] text-orange-500 mb-5">
              About Us
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Modern Printing
              <br />
              Meets Luxury
            </h2>

            <p className="text-gray-600 text-xl leading-relaxed mb-8">
              Mukesh Graphics specializes in premium branding,
              modern packaging and high-quality printing
              solutions for growing businesses.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-[#f7f7f7] p-6 rounded-[30px]">
                <h3 className="text-4xl font-black mb-2">
                  10+
                </h3>

                <p className="text-gray-600">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#f7f7f7] p-6 rounded-[30px]">
                <h3 className="text-4xl font-black mb-2">
                  500+
                </h3>

                <p className="text-gray-600">
                  Projects Completed
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-32 px-6 bg-[#f7f7f7] scroll-mt-32"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[5px] text-orange-500 mb-4">
              Services
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              What We Offer
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Packaging Design
                </h3>

                <p className="text-gray-600">
                  Premium packaging concepts tailored for luxury brands.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Offset Printing
                </h3>

                <p className="text-gray-600">
                  High-quality printing with sharp finishing.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Branding
                </h3>

                <p className="text-gray-600">
                  Creative identity and visual strategy solutions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section
        id="whychoose"
        className="py-32 px-6 bg-white scroll-mt-32"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[5px] text-orange-500 mb-4 font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-2px]">
              Excellence In Every Print
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#f7f7f7] rounded-[35px] p-10 text-center shadow-lg">
              <div className="text-5xl mb-6">⭐</div>
              <h3 className="text-2xl font-bold mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                High-end printing and luxury finishing solutions.
              </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-[35px] p-10 text-center shadow-lg">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick turnaround with guaranteed quality.
              </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-[35px] p-10 text-center shadow-lg">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold mb-4">
                Creative Designs
              </h3>
              <p className="text-gray-600">
                Modern branding and eye-catching packaging.
              </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-[35px] p-10 text-center shadow-lg">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold mb-4">
                Trusted Support
              </h3>
              <p className="text-gray-600">
                Dedicated assistance for every project.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="py-32 px-6 bg-[#111] text-white scroll-mt-32"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[5px] text-gray-400 mb-4">
              Our Process
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              How We Work
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-10">
              <div className="text-7xl font-black text-white/20 mb-8">01</div>
              <h3 className="text-3xl font-bold mb-5">Strategy</h3>
              <p className="text-gray-300">
                Understanding client goals and brand identity.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-10">
              <div className="text-7xl font-black text-white/20 mb-8">02</div>
              <h3 className="text-3xl font-bold mb-5">Design</h3>
              <p className="text-gray-300">
                Creating premium visual concepts and layouts.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-10">
              <div className="text-7xl font-black text-white/20 mb-8">03</div>
              <h3 className="text-3xl font-bold mb-5">Printing</h3>
              <p className="text-gray-300">
                Precision printing with luxury finishing.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-10">
              <div className="text-7xl font-black text-white/20 mb-8">04</div>
              <h3 className="text-3xl font-bold mb-5">Delivery</h3>
              <p className="text-gray-300">
                Fast and quality-assured final delivery.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="py-32 px-6 bg-white scroll-mt-32"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[5px] text-orange-500 mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              Featured Projects
            </h2>

          </div>

        </div>

      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="py-32 px-6 bg-[#f7f7f7] scroll-mt-32"
      >

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-orange-500 mb-5">
              Book Consultation
            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Let’s Build
              <br />
              Your Brand
            </h2>

          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-xl">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-5 rounded-2xl mb-5"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-5 rounded-2xl mb-5"
            />

            <textarea
              placeholder="Project Details"
              className="w-full border p-5 rounded-2xl mb-5 h-40"
            ></textarea>

            <button className="w-full bg-black text-white py-5 rounded-2xl">
              Book Now
            </button>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 bg-white scroll-mt-32"
      >

        <div className="max-w-3xl mx-auto bg-[#f7f7f7] p-12 rounded-[40px] shadow-2xl">

          <h2 className="text-5xl font-black text-center mb-10">
            Contact Us
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-5 rounded-2xl mb-6"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-5 rounded-2xl mb-6"
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-5 rounded-2xl mb-6 h-40"
          ></textarea>

          <button className="w-full bg-black text-white py-5 rounded-2xl">
            Send Message
          </button>

        </div>

      </section>

      <Footer />

    </main>
  )
}
