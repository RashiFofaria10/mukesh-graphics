"use client";

/* ================= SAFE ICONS (NO EXTERNAL LIBS → NO BUILD ERRORS) ================= */

const Icon = {
  Facebook: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h4v16H4V4zm2 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 4h4v2h.1A4 4 0 0 1 20 12v8h-4v-7c0-1-.5-2-2-2s-2 1-2 2v7h-4V10h4z"/>
    </svg>
  ),
};

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#06152e] via-[#072b57] to-[#0b3d78] text-white">

      <div className="max-w-7xl mx-auto px-6 pt-24">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div>
            <p className="uppercase tracking-[4px] text-orange-400 font-bold mb-4">
              LET'S WORK TOGETHER
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Build Packaging That Stands Out
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl">
              Premium printing and packaging solutions crafted with precision and luxury design.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-bold"
          >
            Contact Us
          </a>

        </div>
      </div>

      {/* FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-4 md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-black mb-6">Mukesh Graphics</h2>
          <p className="text-gray-300 mb-8">
            Premium printing and packaging solutions.
          </p>

          <div className="flex gap-4">
            <Icon.Facebook />
            <Icon.Instagram />
            <Icon.Linkedin />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black mb-6">Navigation</h3>
          <div className="space-y-3 text-gray-300">
            {["home", "about", "services", "portfolio", "contact"].map((i) => (
              <a key={i} href={`#${i}`} className="block hover:text-orange-400">
                {i}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black mb-6">Contact</h3>
          <div className="space-y-3 text-gray-300">
            <p>📍 Bhavnagar, Gujarat</p>
            <p>📞 +91 9426272081</p>
            <p>✉ info@mukeshgraphics.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black mb-6">Hours</h3>
          <div className="space-y-3 text-gray-300">
            <p>Mon–Fri: 9AM–7PM</p>
            <p>Sat: 9AM–5PM</p>
            <p>Sunday Closed</p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-300">
        © 2026 Mukesh Graphics. All Rights Reserved.
      </div>

    </footer>
  );
}

/* ================= PAGE ================= */

export default function Page() {
  return (
    <main className="bg-[#f6f7fb] text-black overflow-hidden">

      {/* NAVBAR (UNCHANGED STRUCTURE) */}
      <header className="fixed top-5 w-full flex justify-center z-50">
        <div className="bg-white/70 backdrop-blur-xl px-8 py-4 rounded-full shadow-lg flex gap-8 font-semibold">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl items-center">

          <div>
            <h1 className="text-6xl font-black mb-6">
              Luxury Packaging Studio
            </h1>
            <p className="text-gray-600 text-lg">
              Premium branding, packaging & printing solutions.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop"
            className="rounded-3xl shadow-2xl h-[600px] object-cover"
          />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
            className="rounded-3xl h-[500px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-black mb-4">About Us</h2>
            <p className="text-gray-600 text-lg">
              We create premium packaging and branding for global companies.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Packaging",
            "Printing",
            "Branding",
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden">

              <img
                src={`https://source.unsplash.com/900x700/?packaging,printing,design&sig=${i}`}
                className="h-[300px] w-full object-cover"
              />

              <div className="p-6 font-black text-xl">{t}</div>

            </div>
          ))}

        </div>

      </section>

      {/* PORTFOLIO / WORK */}
      <section id="portfolio" className="py-32 bg-white px-6">

        <h2 className="text-4xl font-black text-center mb-12">Our Work</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {[
            "packaging luxury box design",
            "printing factory machines",
            "branding identity studio desk",
            "cosmetic packaging mockup",
          ].map((q, i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/1200x800/?${q}`}
              className="rounded-3xl h-[350px] w-full object-cover shadow-xl"
            />
          ))}

        </div>

      </section>

      {/* TRUSTED BY (REAL LOGOS FIXED) */}
      <section id="clients" className="py-32 px-6 bg-[#f7f8fa]">

        <h2 className="text-4xl font-black text-center mb-12">
          Trusted By
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

          {[
            "https://upload.wikimedia.org/wikipedia/en/4/4a/Amul_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zydus_Lifesciences_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cipla_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Nestle_textlogo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Cadbury_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Torrent_Pharmaceuticals_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dr_Reddy%27s_Laboratories_Logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sun_Pharma_logo.svg",
          ].map((logo, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex justify-center items-center">
              <img src={logo} className="h-12 object-contain" />
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 text-center bg-white">

        <h2 className="text-4xl font-black mb-8">Contact Us</h2>

        <div className="max-w-xl mx-auto space-y-4">
          <input className="w-full p-4 border rounded-xl" placeholder="Name" />
          <input className="w-full p-4 border rounded-xl" placeholder="Email" />
          <textarea className="w-full p-4 border rounded-xl" rows="5" placeholder="Message" />
          <button className="w-full bg-black text-white py-4 rounded-full">
            Send Message
          </button>
        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
