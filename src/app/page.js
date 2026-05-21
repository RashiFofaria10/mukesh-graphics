"use client";

/* ================= PAGE ================= */

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Mukesh Graphics</h2>
        <p className="text-gray-400 text-sm">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="bg-[#f7f8fa] text-black overflow-hidden">

      {/* ================= NAVBAR (UNCHANGED AS REQUESTED) ================= */}
      <header className="fixed top-5 w-full flex justify-center z-50">
        <div className="bg-white/70 backdrop-blur-xl px-10 py-5 rounded-full shadow-lg flex gap-10 font-semibold text-base">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-40">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              Luxury Packaging <br /> & Branding Studio
            </h1>

            <p className="text-gray-600 text-lg">
              High-end printing, packaging and brand identity solutions.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338"
            className="rounded-3xl h-[600px] w-full object-cover shadow-2xl"
          />

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-32 bg-white px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
            className="rounded-3xl h-[520px] w-full object-cover"
          />

          <div>
            <h2 className="text-4xl font-black mb-4">About Us</h2>
            <p className="text-gray-600 text-lg">
              We design premium packaging and branding for modern global companies with precision and creativity.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Packaging",
              img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
            },
            {
              title: "Printing",
              img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282",
            },
            {
              title: "Branding",
              img: "https://images.unsplash.com/photo-1557683316-973673baf926",
            },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden">

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

        <h2 className="text-4xl font-black text-center mb-12">Our Work</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <img
            src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a"
            className="rounded-3xl h-[350px] w-full object-cover shadow-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1616627561836-6f2f1f5c3a51"
            className="rounded-3xl h-[350px] w-full object-cover shadow-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
            className="rounded-3xl h-[350px] w-full object-cover shadow-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1622554665555-1e9c3b6f2a8f"
            className="rounded-3xl h-[350px] w-full object-cover shadow-xl"
          />

        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section id="clients" className="py-32 px-6 bg-[#f7f8fa]">

        <h2 className="text-4xl font-black text-center mb-12">
          Trusted By
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

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
            <div key={i} className="bg-white p-6 rounded-2xl shadow flex items-center justify-center">
              <img src={logo} className="h-10 object-contain" />
            </div>
          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-32 px-6 bg-white text-center">

        <h2 className="text-4xl font-black mb-10">Contact Us</h2>

        <div className="max-w-xl mx-auto space-y-4">
          <input className="w-full p-4 border rounded-xl" placeholder="Name" />
          <input className="w-full p-4 border rounded-xl" placeholder="Email" />
          <textarea className="w-full p-4 border rounded-xl" rows="5" placeholder="Message" />
          <button className="w-full bg-black text-white py-4 rounded-full">
            Send Message
          </button>
        </div>

      </section>

      {/* ================= FOOTER (BLACK SMALL) ================= */}
      <Footer />

    </main>
  );
}
