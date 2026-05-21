// src/app/page.js

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] overflow-hidden">

      <Navbar />

      {/* HERO */}

      <section
        id="home"
        className="pt-40 pb-32 px-6 bg-gradient-to-r from-[#071d45] via-[#101827] to-[#f5f5f5]"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="text-white">

            <p className="uppercase tracking-[5px] text-orange-400 mb-8 text-xl">
              ABOUT COMPANY
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-10">
              Transforming Packaging
              Into Powerful Brand Stories
            </h1>

            <div className="w-20 h-1 bg-orange-500 mb-10"></div>

            <p className="text-2xl text-gray-300 leading-relaxed">
              Since 2009, Mukesh Graphics has been delivering
              innovative printing and packaging solutions with precision,
              creativity, and industrial-scale manufacturing excellence.
            </p>

          </div>

          <div className="space-y-14">

            <div>
              <h2 className="text-4xl font-black mb-5">
                Who We Are
              </h2>

              <p className="text-gray-700 text-xl leading-relaxed">
                Mukesh Graphics is a professionally managed printing and packaging company specializing in mono cartons, pharmaceutical boxes, FMCG packaging and customized printing solutions.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black mb-5">
                Our Vision
              </h2>

              <p className="text-gray-700 text-xl leading-relaxed">
                To become a trusted national leader in packaging innovation by continuously upgrading technology, processes and creative design.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black mb-5">
                Our Mission
              </h2>

              <p className="text-gray-700 text-xl leading-relaxed">
                Deliver world-class packaging solutions that enhance brand identity while maintaining strict quality and compliance standards.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GOODNESS */}

      <section
        id="about"
        className="py-32 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[4px] text-orange-500 font-bold mb-4">
              OUR GOODNESS
            </p>

            <h2 className="text-6xl font-black text-orange-500">
              What Makes Us Special
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#f7f7f7] rounded-[35px] p-10 shadow-lg">

              <h3 className="text-3xl font-black mb-5">
                100% Satisfaction Assured
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                We deliver top-quality printing and packaging solutions with precision and care.
              </p>

            </div>

            <div className="bg-[#f7f7f7] rounded-[35px] p-10 shadow-lg">

              <h3 className="text-3xl font-black mb-5">
                Support Online
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our dedicated support team is always ready to assist you at every step.
              </p>

            </div>

            <div className="bg-[#f7f7f7] rounded-[35px] p-10 shadow-lg">

              <h3 className="text-3xl font-black mb-5">
                Reliability & Punctuality
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Mukesh Graphics is committed to delivering every project on time without compromising quality.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-32 px-6 bg-[#f5f5f5]"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div className="space-y-10">

            <div className="bg-white rounded-[35px] p-10 border-t-4 border-orange-500 shadow-lg">

              <h3 className="text-4xl font-black mb-6">
                Mr Bhupat
              </h3>

              <p className="text-2xl text-gray-700 mb-5">
                +91 9426272081
              </p>

              <p className="text-2xl text-gray-700">
                info@mukeshgraphics.com
              </p>

            </div>

            <div className="bg-white rounded-[35px] p-10 border-t-4 border-orange-500 shadow-lg">

              <h3 className="text-4xl font-black mb-6">
                Mr Yagnik
              </h3>

              <p className="text-2xl text-gray-700 mb-5">
                +91 9825982727
              </p>

              <p className="text-2xl text-gray-700">
                sales@mukeshgraphics.com
              </p>

            </div>

          </div>

          <iframe
            src="https://maps.google.com/maps?q=bhavnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[650px] rounded-[35px] shadow-2xl"
          ></iframe>

        </div>

      </section>

      <Footer />

    </main>
  )
}
