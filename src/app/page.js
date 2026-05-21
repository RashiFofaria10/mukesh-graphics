"use client";

/* ================= PAGE ================= */

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-bold">Mukesh Graphics</h2>
        <p className="text-gray-400 text-sm mt-1">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="bg-[#f7f8fa] text-black overflow-hidden">

      {/* ================= FULL WIDTH NAVBAR ================= */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-2xl font-black">
            Mukesh Graphics
          </h1>

          <nav className="flex gap-10 font-semibold text-gray-700">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-black text-white px-5 py-2 rounded-full text-sm"
          >
            Book Service
          </a>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-40">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              Premium Packaging <br /> & Printing Studio
            </h1>

            <p className="text-gray-600 text-lg">
              High-quality packaging, branding and offset printing solutions for modern businesses.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl h-[600px] w-full object-cover shadow-xl"
          />

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-32 bg-white px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl h-[520px] w-full object-cover shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-black mb-4">About Us</h2>
            <p className="text-gray-600 text-lg">
              We specialize in luxury packaging design, FMCG cartons, labels, and industrial printing with precision and creativity.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Packaging Design",
              img: "https://images.unsplash.com/photo-1615486364137-7a2b0e3c1c78?auto=format&fit=crop&w=1600&q=80",
            },
            {
              title: "Offset Printing",
              img: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=1600&q=80",
            },
            {
              title: "Brand Identity",
              img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80",
            },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden">

              <img
                src={s.img}
                className="h-[320px] w-full object-cover"
              />

              <div className="p-6 font-bold text-xl">
                {s.title}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="py-32 bg-white px-6">

        <h2 className="text-4xl font-black text-center mb-12">
          Our Work
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <img src="https://images.unsplash.com/photo-1616627561836-6f2f1f5c3a51?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl h-[350px] w-full object-cover" />

          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl h-[350px] w-full object-cover" />

          <img src="https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl h-[350px] w-full object-cover" />

          <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl h-[350px] w-full object-cover" />

        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section id="clients" className="py-32 px-6 bg-[#f7f8fa]">

        <h2 className="text-4xl font-black text-center mb-12">
          Trusted By Leading Brands
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

          {[
            "https://upload.wikimedia.org/wikipedia/en/4/4a/Amul_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zydus_Lifesciences_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cipla_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Nestle_textlogo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Cadbury_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sun_Pharma_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Torrent_Pharmaceuticals_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dr_Reddy%27s_Laboratories_Logo.svg",
          ].map((logo, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow flex justify-center items-center">
              <img src={logo} className="h-10 object-contain" />
            </div>
          ))}

        </div>
      </section>

      {/* ================= CONTACT ================= */}
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

      {/* ================= FOOTER ================= */}
      <Footer />

    </main>
  );
}
