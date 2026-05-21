"use client";

/* ================= SAFE ICONS (NO LUCIDE = NO BUILD ERROR) ================= */

const Icon = {
  Facebook: () => (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 4h4v16H4V4zm2 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 4h4v2h.1A4 4 0 0 1 20 12v8h-4v-7c0-1-.5-2-2-2s-2 1-2 2v7h-4V10h4z"/>
    </svg>
  ),
};

/* ================= FOOTER (YOUR ORIGINAL DESIGN - SAFE VERSION) ================= */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#06152e] via-[#072b57] to-[#0b3d78] text-white">

      {/* CTA */}
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
              Premium printing and packaging solutions crafted with precision.
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

      {/* FOOTER MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-4 md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-black mb-6">Mukesh Graphics</h2>
          <p className="text-gray-300 mb-8">
            Premium printing and packaging solutions delivering luxury design.
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

/* ================= MAIN PAGE ================= */

export default function Page() {
  return (
    <main className="bg-[#f6f7fb] text-[#111] overflow-hidden">

      {/* NAVBAR (RESTORED EXACT STYLE) */}
      <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">
        <div className="w-full max-w-7xl bg-white/70 backdrop-blur-xl border shadow-xl rounded-full px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-black">Mukesh Graphics</h1>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full">
            Book Service
          </a>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-36">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <p className="uppercase tracking-[6px] text-gray-500 mb-6">
              Premium Packaging Studio
            </p>

            <h1 className="text-6xl md:text-8xl font-black mb-8">
              Luxury Branding & Printing
            </h1>

            <p className="text-xl text-gray-600 mb-10">
              We design premium packaging, branding systems & industrial printing solutions.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop"
            className="rounded-[40px] h-[650px] object-cover shadow-2xl"
          />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-40 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
            className="rounded-[35px] h-[500px] object-cover shadow-xl"
          />

          <div>
            <h2 className="text-5xl font-black mb-6">
              Precision & Luxury Craft
            </h2>

            <p className="text-xl text-gray-600">
              High-end packaging and branding solutions for global brands.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-40 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop",
          ].map((img, i) => (
            <div key={i} className="bg-white rounded-[30px] shadow-xl overflow-hidden">

              <img src={img} className="h-[320px] w-full object-cover" />

              <div className="p-8 font-black text-xl">
                Service {i + 1}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-40 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {[
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1622554665555-1e9c3b6f2a8f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616627561836-6f2f1f5c3a51?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2000&auto=format&fit=crop",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-[30px] h-[350px] object-cover shadow-xl"
            />
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-6 bg-white text-center">

        <h2 className="text-5xl font-black mb-10">Contact Us</h2>

        <div className="max-w-2xl mx-auto space-y-4">
          <input className="w-full p-5 border rounded-xl" placeholder="Name" />
          <input className="w-full p-5 border rounded-xl" placeholder="Email" />
          <textarea className="w-full p-5 border rounded-xl" rows="5" placeholder="Message" />
          <button className="w-full bg-black text-white py-4 rounded-full">
            Send
          </button>
        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
