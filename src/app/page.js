"use client";

export default function Page() {
  return (
    <main className="bg-[#f6f7fb] text-[#111] overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">
        <div className="w-full max-w-7xl bg-white/70 backdrop-blur-xl border shadow-xl rounded-full px-8 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-black tracking-wide">
            Mukesh Graphics
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Work</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Book Now
          </a>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-36">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <p className="uppercase tracking-[6px] text-gray-500 mb-6">
              Premium Packaging & Branding Studio
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 bg-gradient-to-r from-black to-gray-500 text-transparent bg-clip-text">
              Luxury Design Experiences
            </h1>

            <p className="text-xl text-gray-600 mb-10">
              We create premium packaging, branding systems, and industrial printing solutions for modern global brands.
            </p>

            <a href="#services" className="bg-black text-white px-8 py-5 rounded-full font-semibold">
              Explore Services
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
            className="rounded-[40px] shadow-2xl h-[700px] object-cover"
          />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="grid grid-cols-2 gap-6">

            <img
              src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[35px] h-[520px] object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[35px] h-[520px] object-cover shadow-xl mt-20"
            />

          </div>

          <div>
            <p className="uppercase tracking-[6px] text-gray-500 mb-5">
              About Us
            </p>

            <h2 className="text-5xl font-black mb-8">
              Precision Craftsmanship for Premium Brands
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              We specialize in luxury packaging design, FMCG branding, pharmaceutical cartons, and high-end offset printing solutions.
            </p>

            <div className="space-y-5">

              <div className="bg-[#f6f7fb] p-6 rounded-[25px] shadow-lg">
                <h3 className="text-2xl font-black mb-2">Advanced Production</h3>
                <p className="text-gray-600">
                  Industrial-grade printing with modern automation systems.
                </p>
              </div>

              <div className="bg-[#f6f7fb] p-6 rounded-[25px] shadow-lg">
                <h3 className="text-2xl font-black mb-2">Luxury Finishing</h3>
                <p className="text-gray-600">
                  Foil stamping, embossing, UV coating & premium detailing.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-40 px-6">

        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[6px] text-gray-500 mb-5">
            Services
          </p>
          <h2 className="text-5xl font-black">What We Offer</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Luxury Packaging",
              img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Offset Printing",
              img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Brand Identity",
              img: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop",
            },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-[35px] shadow-xl overflow-hidden hover:-translate-y-3 transition">

              <img src={s.img} className="h-[340px] w-full object-cover" />

              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">{s.title}</h3>
                <p className="text-gray-600">
                  Premium industrial-grade solutions for modern brands.
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-40 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black">Our Work</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {[
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1600",
            "https://images.unsplash.com/photo-1622554665555-1e9c3b6f2a8f?q=80&w=1600",
            "https://images.unsplash.com/photo-1616627561836-6f2f1f5c3a51?q=80&w=1600",
            "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600",
          ].map((img) => (
            <img
              key={img}
              src={img}
              className="rounded-[30px] shadow-xl h-[360px] object-cover"
            />
          ))}

        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-40 px-6">

        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black">Trusted By</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          {["Sun Pharma", "Zydus", "Cipla", "Nestlé", "Amul", "Cadbury", "Torrent", "Ajanta"].map((c) => (
            <div key={c} className="bg-white p-10 rounded-[30px] shadow-xl font-black text-center">
              {c}
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT (FIXED - NOT SIDE BY SIDE) */}
      <section id="contact" className="py-40 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center mb-16">

          <h2 className="text-5xl font-black mb-6">
            Let’s Build Something Premium
          </h2>

          <p className="text-xl text-gray-600">
            Contact us for luxury packaging & branding solutions.
          </p>

        </div>

        <div className="max-w-3xl mx-auto bg-[#f6f7fb] p-10 rounded-[35px] shadow-2xl">

          <div className="text-center mb-10 text-gray-600">
            📞 +91 9426272081 <br />
            ✉ info@mukeshgraphics.com <br />
            📍 Bhavnagar, Gujarat
          </div>

          <div className="space-y-4">

            <input className="w-full p-5 rounded-xl border" placeholder="Your Name" />
            <input className="w-full p-5 rounded-xl border" placeholder="Your Email" />
            <textarea rows="5" className="w-full p-5 rounded-xl border" placeholder="Your Message" />

            <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:scale-105 transition">
              Send Message
            </button>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center bg-white border-t">
        <h2 className="text-2xl font-black mb-2">Mukesh Graphics</h2>
        <p className="text-gray-500">© 2026 All Rights Reserved</p>
      </footer>

    </main>
  );
}
