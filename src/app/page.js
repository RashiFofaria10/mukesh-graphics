// =========================================
// src/app/page.js
// =========================================

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-[#0b2d57] mb-6">
          Mukesh Graphics
        </h1>

        <p className="text-2xl text-gray-600">
          Premium Printing & Packaging Solutions
        </p>

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="/about"
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold"
          >
            About
          </a>

          <a
            href="/services"
            className="bg-[#0b2d57] text-white px-8 py-4 rounded-full font-bold"
          >
            Services
          </a>

        </div>
      </div>
    </main>
  )
}


// =========================================
// src/app/about/page.js
// =========================================

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-6xl font-black text-[#0b2d57] mb-8">
          About Mukesh Graphics
        </h1>

        <p className="text-2xl text-gray-600 leading-relaxed">
          Mukesh Graphics is a professionally managed printing and packaging company specializing in mono cartons, pharmaceutical boxes and FMCG packaging solutions.
        </p>

      </div>
    </main>
  )
}


// =========================================
// src/app/services/page.js
// =========================================

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] px-6 py-20">

      <h1 className="text-6xl font-black text-center text-[#0b2d57] mb-20">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-white p-10 rounded-[30px] shadow-xl text-center">
          <div className="text-6xl mb-6">📦</div>
          <h2 className="text-3xl font-black mb-4">
            Packaging Design
          </h2>
          <p className="text-gray-600 text-lg">
            Creative packaging for premium brands.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[30px] shadow-xl text-center">
          <div className="text-6xl mb-6">🖨️</div>
          <h2 className="text-3xl font-black mb-4">
            Offset Printing
          </h2>
          <p className="text-gray-600 text-lg">
            High-quality industrial printing solutions.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[30px] shadow-xl text-center">
          <div className="text-6xl mb-6">🎨</div>
          <h2 className="text-3xl font-black mb-4">
            Branding
          </h2>
          <p className="text-gray-600 text-lg">
            Professional branding and packaging identity.
          </p>
        </div>

      </div>

    </main>
  )
}


// =========================================
// src/app/portfolio/page.js
// =========================================

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">

      <h1 className="text-6xl font-black text-center text-[#0b2d57] mb-20">
        Our Portfolio
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-[#f6f9fc] rounded-[30px] overflow-hidden shadow-xl">

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
              Premium carton packaging projects.
            </p>
          </div>

        </div>

        <div className="bg-[#f6f9fc] rounded-[30px] overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
            className="h-[300px] w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-black mb-4">
              Pharma Packaging
            </h2>
            <p className="text-gray-600 text-lg">
              Pharmaceutical packaging solutions.
            </p>
          </div>

        </div>

        <div className="bg-[#f6f9fc] rounded-[30px] overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
            className="h-[300px] w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-black mb-4">
              FMCG Packaging
            </h2>
            <p className="text-gray-600 text-lg">
              Attractive retail packaging designs.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}


// =========================================
// src/app/contact/page.js
// =========================================

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] flex items-center justify-center px-6">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-[30px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8 text-[#0b2d57]">
            Mr Bhupat
          </h2>

          <div className="space-y-5 text-xl text-gray-700">

            <p>📞 +91 9426272081</p>
            <p>✉ info@mukeshgraphics.com</p>
            <p>📍 Bhavnagar, Gujarat</p>

          </div>

        </div>

        <div className="bg-white rounded-[30px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8 text-[#0b2d57]">
            Mr Yagnik
          </h2>

          <div className="space-y-5 text-xl text-gray-700">

            <p>📞 +91 9825982727</p>
            <p>✉ sales@mukeshgraphics.com</p>
            <p>📍 Gujarat Industrial Development Corporation</p>

          </div>

        </div>

      </div>

    </main>
  )
}
