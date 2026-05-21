"use client";

export default function HomePage() {
  return (
    <main className="bg-[#f7f8fa] text-[#111] overflow-hidden">

      {/* NAVBAR */}

      <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">

        <div className="w-full max-w-7xl bg-white/60 backdrop-blur-xl backdrop-saturate-150 border border-white/30 shadow-2xl rounded-full px-8 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-black tracking-wide">
            Mukesh Graphics
          </h1>

          <nav className="hidden md:flex gap-8 text-[15px] font-semibold">

            <a href="#home" className="hover:text-gray-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-gray-500 transition">
              About
            </a>

            <a href="#services" className="hover:text-gray-500 transition">
              Services
            </a>

            <a href="#portfolio" className="hover:text-gray-500 transition">
              Portfolio
            </a>

            <a href="#clients" className="hover:text-gray-500 transition">
              Clients
            </a>

            <a href="#contact" className="hover:text-gray-500 transition">
              Contact
            </a>

          </nav>

          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#222] hover:scale-105 transition duration-300"
          >
            Book Service
          </a>

        </div>

      </header>

      {/* HERO */}

      <section
        id="home"
        className="min-h-screen flex items-center px-6 pt-36"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-6">
              PREMIUM PRINTING & PACKAGING
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 bg-gradient-to-r from-black to-gray-500 text-transparent bg-clip-text">
              Luxury Packaging Solutions
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Mukesh Graphics creates premium packaging, industrial printing and branding experiences with modern aesthetics and precision quality.
            </p>

            <div className="flex gap-5 flex-wrap">

              <a
                href="#portfolio"
                className="bg-black text-white px-8 py-5 rounded-full font-semibold hover:bg-[#222] hover:scale-105 transition duration-300"
              >
                Explore Work
              </a>

              <a
                href="#contact"
                className="border border-black/10 bg-white px-8 py-5 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300"
              >
                Contact Us
              </a>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
              alt="hero"
              className="rounded-[40px] shadow-2xl hover:scale-[1.02] transition duration-700"
            />

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-40 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt="about"
              className="rounded-[40px] shadow-xl hover:scale-[1.02] transition duration-700"
            />

          </div>

          <div>

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
              ABOUT US
            </p>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Elegant Printing With Modern Precision
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Mukesh Graphics specializes in premium mono cartons, FMCG packaging, pharmaceutical boxes and offset printing services.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed">
              We combine luxury aesthetics with industrial performance to deliver world-class packaging experiences.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="py-40 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
              SERVICES
            </p>

            <h2 className="text-5xl font-black">
              Premium Solutions
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500">

              <h3 className="text-3xl font-black mb-5">
                Packaging
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Elegant industrial packaging crafted for premium businesses.
              </p>

            </div>

            <div className="bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500">

              <h3 className="text-3xl font-black mb-5">
                Offset Printing
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Advanced high-quality printing technology and precision production.
              </p>

            </div>

            <div className="bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500">

              <h3 className="text-3xl font-black mb-5">
                Branding
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Modern visual identity and luxury branding experiences.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section
        id="portfolio"
        className="py-40 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
              PORTFOLIO
            </p>

            <h2 className="text-5xl font-black">
              Selected Work
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[35px] h-[420px] object-cover w-full shadow-xl hover:scale-105 transition duration-700"
            />

            <img
              src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[35px] h-[420px] object-cover w-full shadow-xl hover:scale-105 transition duration-700"
            />

            <img
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[35px] h-[420px] object-cover w-full shadow-xl hover:scale-105 transition duration-700"
            />

          </div>

        </div>

      </section>

      {/* CLIENTS */}

      <section
        id="clients"
        className="py-40 px-6"
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
            TRUSTED BY
          </p>

          <h2 className="text-5xl font-black mb-20">
            Our Clients
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              "Sun Pharma",
              "Torrent Pharma",
              "Zydus",
              "Amul",
              "Cadbury",
              "Nestlé",
              "Cipla",
              "Ajanta Pharma",
            ].map((client) => (
              <div
                key={client}
                className="bg-white rounded-[30px] p-12 shadow-lg text-2xl font-black hover:-translate-y-2 transition duration-500"
              >
                {client}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-40 px-6 bg-white"
      >

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
              CONTACT
            </p>

            <h2 className="text-5xl font-black mb-6">
              Let’s Build Something Premium
            </h2>

            <p className="text-xl text-gray-600">
              Get in touch for packaging and printing solutions.
            </p>

          </div>

          <div className="bg-[#f7f8fa] rounded-[40px] p-12 shadow-xl">

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <input
                type="text"
                placeholder="Your Name"
                className="p-5 rounded-2xl border border-black/10 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-5 rounded-2xl border border-black/10 outline-none"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-5 rounded-2xl border border-black/10 outline-none mb-6"
            />

            <button className="bg-black text-white px-10 py-5 rounded-full font-semibold hover:bg-[#222] transition">
              Send Message
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-white border-t border-black/10 py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          <div>

            <h2 className="text-3xl font-black mb-5">
              Mukesh Graphics
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Premium printing, packaging and branding solutions with modern luxury aesthetics.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-black mb-5">
              Quick Links
            </h3>

            <div className="space-y-3 text-gray-600">

              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#services">Services</a></p>
              <p><a href="#portfolio">Portfolio</a></p>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-black mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600">

              <p>📞 +91 9426272081</p>
              <p>✉ info@mukeshgraphics.com</p>
              <p>📍 Bhavnagar, Gujarat</p>

            </div>

          </div>

        </div>

        <div className="border-t border-black/10 mt-12 pt-6 text-center text-gray-500">
          © 2026 Mukesh Graphics. All Rights Reserved.
        </div>

      </footer>

    </main>
  );
}
