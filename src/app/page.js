// src/app/page.js

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-[#f5f7fb] overflow-hidden">

      <Navbar />

      {/* HERO */}

      <section
        id="home"
        className="min-h-screen flex items-center px-6 pt-32 bg-gradient-to-r from-[#071d45] via-[#0f172a] to-[#1e293b]"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="text-white">

            <p className="uppercase tracking-[4px] text-orange-400 mb-6 text-lg">
              ABOUT COMPANY
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Transforming Packaging Into Powerful Brand Stories
            </h1>

            <div className="w-24 h-1 bg-orange-500 mb-10"></div>

            <p className="text-xl text-gray-300 leading-relaxed">
              Since 2009, Mukesh Graphics has been delivering innovative
              printing and packaging solutions with precision,
              creativity and industrial-scale manufacturing excellence.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-2xl">

            <div className="space-y-10 text-white">

              <div>

                <h2 className="text-3xl font-black mb-4">
                  Who We Are
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                  Mukesh Graphics is a professionally managed printing and packaging company specializing in mono cartons, pharmaceutical boxes, FMCG packaging and customized printing solutions.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black mb-4">
                  Our Vision
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                  To become a trusted national leader in packaging innovation by continuously upgrading technology, processes and creative design.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black mb-4">
                  Our Mission
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                  Deliver world-class packaging solutions that enhance brand identity while maintaining strict quality and compliance standards.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="about"
        className="py-28 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[4px] text-orange-500 font-bold mb-4">
              OUR GOODNESS
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
              What Makes Us Special
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#f8fafc] rounded-[35px] p-10 shadow-lg hover:-translate-y-2 transition">

              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-8">
                ⭐
              </div>

              <h3 className="text-3xl font-black mb-5">
                100% Satisfaction Assured
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                We deliver top-quality printing and packaging solutions with precision and care.
              </p>

            </div>

            <div className="bg-[#f8fafc] rounded-[35px] p-10 shadow-lg hover:-translate-y-2 transition">

              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-8">
                💬
              </div>

              <h3 className="text-3xl font-black mb-5">
                Support Online
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Our dedicated support team is always ready to assist you at every step.
              </p>

            </div>

            <div className="bg-[#f8fafc] rounded-[35px] p-10 shadow-lg hover:-translate-y-2 transition">

              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-8">
                ⏰
              </div>

              <h3 className="text-3xl font-black mb-5">
                Reliability & Punctuality
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Mukesh Graphics is committed to delivering every project on time without compromising quality.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-28 px-6 bg-[#f5f7fb]"
      >

        <div className="max-w-6xl mx-auto text-center mb-16">

          <p className="uppercase tracking-[4px] text-orange-500 font-bold mb-4">
            CONTACT US
          </p>

          <h2 className="text-5xl font-black text-[#111827]">
            Get In Touch
          </h2>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-[35px] p-12 shadow-xl border-t-4 border-orange-500">

            <h3 className="text-4xl font-black mb-8">
              Mr Bhupat
            </h3>

            <div className="space-y-5 text-gray-700 text-xl">

              <p>
                📞 +91 9426272081
              </p>

              <p>
                ✉ info@mukeshgraphics.com
              </p>

            </div>

          </div>

          <div className="bg-white rounded-[35px] p-12 shadow-xl border-t-4 border-orange-500">

            <h3 className="text-4xl font-black mb-8">
              Mr Yagnik
            </h3>

            <div className="space-y-5 text-gray-700 text-xl">

              <p>
                📞 +91 9825982727
              </p>

              <p>
                ✉ sales@mukeshgraphics.com
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
