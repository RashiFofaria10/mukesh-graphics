// ===============================
// src/app/page.js
// ===============================

export default function HomePage() {
  return (
    <main className="bg-[#f6f9fc] overflow-hidden">

      <section className="relative min-h-screen flex items-center pt-32 px-6 bg-gradient-to-br from-[#071d45] via-[#0b2d57] to-[#133b6c]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="text-white">

            <p className="uppercase tracking-[5px] text-orange-400 font-bold mb-6">
              PREMIUM PRINTING & PACKAGING
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Transforming Packaging Into Powerful Brand Stories
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Mukesh Graphics provides innovative printing and packaging solutions with modern technology and industrial excellence.
            </p>

            <div className="flex flex-wrap gap-6">

              <a
                href="/portfolio"
                className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-lg font-bold"
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
              alt="printing"
              className="rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

    </main>
  )
}


// ===============================
// src/app/about/page.js
// ===============================

export function AboutPage() {
  return (
    <main className="bg-[#f6f9fc] min-h-screen pt-32 px-6 pb-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
            ABOUT COMPANY
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-[#111827] leading-tight mb-8">
            Innovation Meets Industrial Excellence
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mukesh Graphics is a professionally managed printing and packaging company specializing in mono cartons, pharmaceutical boxes and FMCG packaging.
          </p>

          <p className="text-xl text-gray-600 leading-relaxed">
            We combine creativity, technology and industrial precision to deliver world-class packaging solutions.
          </p>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
            alt="about"
            className="rounded-[40px] shadow-2xl"
          />

        </div>

      </div>

    </main>
  )
}


// ===============================
// src/app/services/page.js
// ===============================

export function ServicesPage() {
  return (
    <main className="bg-white min-h-screen pt-32 px-6 pb-24">

      <div className="max-w-7xl mx-auto text-center mb-24">

        <h1 className="text-5xl md:text-7xl font-black text-[#111827] mb-6">
          Our Services
        </h1>

        <p className="text-xl text-gray-600">
          Premium printing and packaging solutions
        </p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-[#f6f9fc] rounded-[35px] p-10 shadow-xl">
          <div className="text-6xl mb-8">📦</div>
          <h2 className="text-3xl font-black mb-5">Packaging Design</h2>
          <p className="text-gray-600 text-lg">
            Premium packaging solutions for all industries.
          </p>
        </div>

        <div className="bg-[#f6f9fc] rounded-[35px] p-10 shadow-xl">
          <div className="text-6xl mb-8">🖨️</div>
          <h2 className="text-3xl font-black mb-5">Offset Printing</h2>
          <p className="text-gray-600 text-lg">
            Advanced printing solutions with vibrant finishing.
          </p>
        </div>

        <div className="bg-[#f6f9fc] rounded-[35px] p-10 shadow-xl">
          <div className="text-6xl mb-8">🎨</div>
          <h2 className="text-3xl font-black mb-5">Custom Branding</h2>
          <p className="text-gray-600 text-lg">
            Creative branding and advertising materials.
          </p>
        </div>

      </div>

    </main>
  )
}


// ===============================
// src/app/portfolio/page.js
// ===============================

export function PortfolioPage() {
  return (
    <main className="bg-[#f6f9fc] min-h-screen pt-32 px-6 pb-24">

      <div className="max-w-7xl mx-auto text-center mb-24">

        <h1 className="text-5xl md:text-7xl font-black text-[#111827] mb-6">
          Our Portfolio
        </h1>

        <p className="text-xl text-gray-600">
          Packaging and printing projects
        </p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-white rounded-[35px] overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
            className="h-[300px] w-full object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-black mb-4">
              Mono Cartons
            </h2>

            <p className="text-gray-600 text-lg">
              Premium carton packaging solutions.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}


// ===============================
// src/app/contact/page.js
// ===============================

export function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-32 px-6 pb-24">

      <div className="max-w-7xl mx-auto text-center mb-24">

        <h1 className="text-5xl md:text-7xl font-black text-[#111827] mb-6">
          Contact Us
        </h1>

        <p className="text-xl text-gray-600">
          Let’s connect together
        </p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-[#f6f9fc] rounded-[35px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8">
            Mr Bhupat
          </h2>

          <div className="space-y-5 text-xl text-gray-700">

            <p>📞 +91 9426272081</p>
            <p>✉ info@mukeshgraphics.com</p>
            <p>📍 Bhavnagar, Gujarat</p>

          </div>

        </div>

      </div>

    </main>
  )
}
