// src/app/page.js

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="bg-[#f6f9fc] overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center pt-32 px-6 bg-gradient-to-br from-[#071d45] via-[#0b2d57] to-[#133b6c]">

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,115,0,0.18),transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          <div className="text-white">

            <p className="uppercase tracking-[5px] text-orange-400 font-bold mb-6">
              PREMIUM PRINTING & PACKAGING
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Transforming Packaging Into Powerful Brand Stories
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Mukesh Graphics provides innovative printing and packaging
              solutions with modern technology and industrial excellence.
            </p>

            <div className="flex flex-wrap gap-6">

              <a
                href="/portfolio"
                className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-lg font-bold shadow-xl"
              >
                Explore Portfolio
              </a>

              <a
                href="/contact"
                className="border border-white/20 hover:bg-white/10 transition px-10 py-5 rounded-full text-lg font-bold"
              >
                Contact Us
              </a>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center mb-24">

          <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
            OUR SERVICES
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
            Complete Printing Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl">

            <div className="text-6xl mb-8">
              📦
            </div>

            <h2 className="text-3xl font-black mb-5">
              Packaging Design
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Premium packaging designs crafted for modern businesses and brands.
            </p>

          </div>

          <div className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl">

            <div className="text-6xl mb-8">
              🖨️
            </div>

            <h2 className="text-3xl font-black mb-5">
              Offset Printing
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Advanced printing solutions with vibrant colors and sharp finishing.
            </p>

          </div>

          <div className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl">

            <div className="text-6xl mb-8">
              🎨
            </div>

            <h2 className="text-3xl font-black mb-5">
              Branding
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Creative branding materials for impactful business identity.
            </p>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section className="py-32 px-6 bg-[#f6f9fc]">

        <div className="max-w-7xl mx-auto text-center mb-24">

          <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
            OUR PORTFOLIO
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
            Packaging & Printing Projects
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Mono Cartons",
              img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Pharmaceutical Boxes",
              img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "FMCG Packaging",
              img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-[40px] overflow-hidden shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.img}
                  alt=""
                  className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-10">

                <h2 className="text-3xl font-black mb-5">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium packaging solutions with modern printing techniques.
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CLIENTS */}

      <section className="py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center mb-24">

          <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
            OUR CLIENTS
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
            Trusted By Leading Industries
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            "Pharmaceutical Industries",
            "Packaging Brands",
            "Retail Companies",
            "Export Businesses",
            "Food Industries",
            "Corporate Clients",
            "Manufacturing Units",
            "FMCG Companies",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#f6f9fc] rounded-[35px] p-10 text-center shadow-lg hover:bg-[#072b57] hover:text-white transition duration-500"
            >

              <div className="text-5xl mb-6">
                🏢
              </div>

              <h3 className="text-2xl font-black leading-snug">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-32 px-6 bg-[#f6f9fc]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
              ABOUT COMPANY
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#111827] leading-tight mb-8">
              Innovation Meets Industrial Excellence
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Mukesh Graphics is a professionally managed printing and packaging company specializing in mono cartons, pharmaceutical boxes and FMCG packaging.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              We combine creativity, technology and industrial precision to deliver world-class packaging solutions.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center mb-24">

          <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
            CONTACT US
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
            Let’s Connect Together
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl">

            <h2 className="text-4xl font-black mb-8">
              Mr Bhupat
            </h2>

            <div className="space-y-6 text-gray-700 text-xl">

              <p>📞 +91 9426272081</p>

              <p>✉ info@mukeshgraphics.com</p>

              <p>📍 Bhavnagar, Gujarat</p>

            </div>

          </div>

          <div className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl">

            <h2 className="text-4xl font-black mb-8">
              Mr Yagnik
            </h2>

            <div className="space-y-6 text-gray-700 text-xl">

              <p>📞 +91 9825982727</p>

              <p>✉ sales@mukeshgraphics.com</p>

              <p>📍 Gujarat Industrial Development Corporation</p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
