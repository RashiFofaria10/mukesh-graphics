// src/app/page.js

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-[#f6f9fc] overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative min-h-screen flex items-center pt-32 px-6 bg-gradient-to-br from-[#071d45] via-[#0b2d57] to-[#133b6c]"
      >

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,115,0,0.18),transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}

          <div className="text-white">

            <p className="uppercase tracking-[5px] text-orange-400 font-bold mb-6">
              PREMIUM PRINTING & PACKAGING COMPANY
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Transforming Packaging
              Into Powerful Brand Stories
            </h1>

            <div className="w-24 h-1 bg-orange-500 rounded-full mb-10"></div>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Mukesh Graphics delivers innovative printing and packaging solutions
              with modern technology, industrial precision and premium quality standards.
            </p>

            <div className="flex flex-wrap gap-6">

              <a
                href="#portfolio"
                className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-lg font-bold shadow-xl"
              >
                Explore Portfolio
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:bg-white/10 transition px-10 py-5 rounded-full text-lg font-bold"
              >
                Contact Us
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="rounded-[30px] h-[550px] object-cover w-full"
              />

            </div>

            <div className="absolute -bottom-8 -left-8 bg-white rounded-[30px] p-8 shadow-2xl">

              <h3 className="text-5xl font-black text-orange-500">
                15+
              </h3>

              <p className="text-gray-600 text-lg">
                Years Experience
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        className="py-32 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
              OUR SERVICES
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
              Complete Printing Solutions
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Packaging Design",
                desc: "Creative and modern packaging designs tailored for branding excellence.",
                icon: "📦",
              },
              {
                title: "Offset Printing",
                desc: "Premium offset printing solutions with sharp quality and vibrant finishing.",
                icon: "🖨️",
              },
              {
                title: "Custom Branding",
                desc: "Innovative branding materials designed for impactful business identity.",
                icon: "🎨",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl hover:-translate-y-3 transition duration-500"
              >

                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-5xl mb-8">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-black mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section
        id="portfolio"
        className="py-32 px-6 bg-[#f6f9fc]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 mb-24">

            <div>

              <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
                OUR PORTFOLIO
              </p>

              <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
                Packaging & Printing
              </h2>

            </div>

            <p className="text-gray-600 text-xl max-w-2xl leading-relaxed">
              We specialize in mono cartons, pharmaceutical boxes,
              FMCG packaging and customized industrial printing solutions.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

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
                className="group bg-white rounded-[40px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.img}
                    alt=""
                    className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-10">

                  <h3 className="text-3xl font-black mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    Premium packaging solutions crafted with modern printing techniques and industrial precision.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CLIENTS */}

      <section
        id="clients"
        className="py-32 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
              OUR CLIENTS
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
              Trusted By Leading Industries
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

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

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-32 px-6 bg-[#f6f9fc]"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

          </div>

          <div>

            <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
              ABOUT US
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#111827] leading-tight mb-8">
              Innovation Meets Industrial Excellence
            </h2>

            <p className="text-gray-600 text-xl leading-relaxed mb-8">
              Mukesh Graphics is a professionally managed printing and packaging company delivering world-class packaging solutions with unmatched quality standards.
            </p>

            <p className="text-gray-600 text-xl leading-relaxed mb-12">
              Our mission is to create packaging that enhances product value,
              strengthens branding and delivers long-lasting customer impressions.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white rounded-[30px] p-8 shadow-lg">

                <h3 className="text-4xl font-black text-orange-500 mb-2">
                  500+
                </h3>

                <p className="text-gray-600">
                  Successful Projects
                </p>

              </div>

              <div className="bg-white rounded-[30px] p-8 shadow-lg">

                <h3 className="text-4xl font-black text-orange-500 mb-2">
                  100%
                </h3>

                <p className="text-gray-600">
                  Quality Focused
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-32 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
              CONTACT US
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#111827]">
              Let’s Connect Together
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl border-t-4 border-orange-500 hover:-translate-y-2 transition">

              <h3 className="text-4xl font-black mb-8">
                Mr Bhupat
              </h3>

              <div className="space-y-6 text-gray-700 text-xl">

                <p>
                  📞 +91 9426272081
                </p>

                <p>
                  ✉ info@mukeshgraphics.com
                </p>

                <p>
                  📍 Bhavnagar, Gujarat
                </p>

              </div>

            </div>

            <div className="bg-[#f6f9fc] rounded-[40px] p-12 shadow-xl border-t-4 border-orange-500 hover:-translate-y-2 transition">

              <h3 className="text-4xl font-black mb-8">
                Mr Yagnik
              </h3>

              <div className="space-y-6 text-gray-700 text-xl">

                <p>
                  📞 +91 9825982727
                </p>

                <p>
                  ✉ sales@mukeshgraphics.com
                </p>

                <p>
                  📍 Gujarat Industrial Development Corporation
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
