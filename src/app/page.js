"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

/* ================= FOOTER (YOUR EXACT VERSION) ================= */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#06152e] via-[#072b57] to-[#0b3d78] text-white">

      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">

          <div>
            <p className="uppercase tracking-[4px] text-orange-400 font-bold mb-4">
              LET'S WORK TOGETHER
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Build Packaging That Stands Out Everywhere
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl">
              Premium printing and packaging solutions crafted with innovation and precision.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-bold flex items-center gap-3 shadow-xl"
          >
            Contact Us
            <ArrowUpRight size={24} />
          </a>

        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-4 md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-black mb-6">Mukesh Graphics</h2>
          <p className="text-gray-300 mb-8">
            Premium printing and packaging solutions delivering luxury design excellence.
          </p>

          <div className="flex gap-4">
            <Facebook />
            <Instagram />
            <Linkedin />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black mb-6">Navigation</h3>
          <div className="space-y-4 text-gray-300">
            {["home", "about", "services", "portfolio", "contact"].map((i) => (
              <a key={i} href={`#${i}`} className="block hover:text-orange-400">
                {i}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black mb-6">Contact</h3>

          <div className="space-y-4 text-gray-300">
            <p className="flex gap-3"><MapPin /> Bhavnagar, Gujarat</p>
            <p className="flex gap-3"><Phone /> +91 9426272081</p>
            <p className="flex gap-3"><Mail /> info@mukeshgraphics.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black mb-6">Hours</h3>

          <div className="space-y-4 text-gray-300">
            <p className="flex gap-3"><Clock3 /> Mon–Fri: 9AM–7PM</p>
            <p className="flex gap-3"><Clock3 /> Sat: 9AM–5PM</p>
            <p className="flex gap-3"><Clock3 /> Sunday Closed</p>
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

      {/* NAVBAR */}
      <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">
        <div className="w-full max-w-7xl bg-white/70 backdrop-blur-xl border shadow-xl rounded-full px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-black">Mukesh Graphics</h1>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Work</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full">
            Book Now
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

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05]">
              Luxury Branding & Packaging
            </h1>

            <p className="text-xl text-gray-600 mb-10">
              We design high-end packaging, branding systems and industrial print solutions.
            </p>

            <a href="#services" className="bg-black text-white px-8 py-5 rounded-full">
              Explore Services
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1800&auto=format&fit=crop"
            className="rounded-[40px] shadow-2xl h-[700px] object-cover"
          />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-40 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="grid grid-cols-2 gap-6">

            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[35px] h-[520px] object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1616627561836-6f2f1f5c3a51?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[35px] h-[520px] object-cover shadow-xl mt-20"
            />

          </div>

          <div>
            <h2 className="text-5xl font-black mb-8">
              Precision Craftsmanship for Modern Brands
            </h2>

            <p className="text-xl text-gray-600">
              We specialize in luxury packaging, FMCG branding, and premium printing solutions.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-40 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
            "https://images.unsplash.com/photo-1586880244406-556ebe35f282",
            "https://images.unsplash.com/photo-1557683316-973673baf926",
          ].map((img, i) => (
            <div key={i} className="bg-white rounded-[30px] shadow-xl overflow-hidden">

              <img src={img + "?q=80&w=1600&auto=format&fit=crop"} className="h-[320px] w-full object-cover" />

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
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
            "https://images.unsplash.com/photo-1622554665555-1e9c3b6f2a8f",
            "https://images.unsplash.com/photo-1616627561836-6f2f1f5c3a51",
            "https://images.unsplash.com/photo-1520975916090-3105956dac38",
          ].map((img) => (
            <img
              key={img}
              src={img + "?q=80&w=1600&auto=format&fit=crop"}
              className="rounded-[30px] shadow-xl h-[360px] object-cover"
            />
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center mb-16">

          <h2 className="text-5xl font-black mb-6">
            Let’s Work Together
          </h2>

          <p className="text-xl text-gray-600">
            Get premium branding & packaging solutions.
          </p>

        </div>

        <div className="max-w-3xl mx-auto bg-[#f6f7fb] p-10 rounded-[35px] shadow-2xl">

          <input className="w-full p-5 mb-4 border rounded-xl" placeholder="Name" />
          <input className="w-full p-5 mb-4 border rounded-xl" placeholder="Email" />
          <textarea className="w-full p-5 mb-4 border rounded-xl" rows="5" placeholder="Message" />

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
