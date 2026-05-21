"use client";

/* ================= FOOTER ICONS SAFE ================= */

const Icon = {
  Facebook: () => <span>📘</span>,
  Instagram: () => <span>📸</span>,
  Linkedin: () => <span>💼</span>,
};

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#06152e] via-[#072b57] to-[#0b3d78] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-3xl font-black mb-4">Mukesh Graphics</h2>
          <p className="text-gray-300">
            Premium packaging & printing solutions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-black mb-4">Navigation</h3>
          <div className="space-y-2 text-gray-300">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black mb-4">Contact</h3>
          <p className="text-gray-300">📍 Bhavnagar</p>
          <p className="text-gray-300">📞 +91 9426272081</p>
          <p className="text-gray-300">✉ info@mukeshgraphics.com</p>
        </div>

        <div>
          <h3 className="text-xl font-black mb-4">Follow</h3>
          <div className="flex gap-3 text-2xl">
            <Icon.Facebook />
            <Icon.Instagram />
            <Icon.Linkedin />
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-300">
        © 2026 Mukesh Graphics
      </div>

    </footer>
  );
}

/* ================= MAIN PAGE ================= */

export default function Page() {
  return (
    <main className="bg-[#f7f8fa] text-black">

      {/* NAVBAR */}
      <header className="fixed top-5 w-full flex justify-center z-50">
        <div className="bg-white/70 backdrop-blur-xl px-8 py-4 rounded-full shadow-lg flex gap-8 font-semibold">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
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
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl shadow-2xl h-[600px] object-cover"
          />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <img
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=80"
            className="rounded-3xl h-[500px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-black mb-4">About Us</h2>
            <p className="text-gray-600 text-lg">
              We create premium packaging and branding for top global companies.
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
                src={`https://source.unsplash.com/800x600/?packaging,printing,design&sig=${i}`}
                className="h-[300px] w-full object-cover"
              />

              <div className="p-6 font-black text-xl">{t}</div>

            </div>
          ))}

        </div>

      </section>

      {/* OUR WORK (FIXED IMAGES) */}
      <section id="work" className="py-32 bg-white px-6">

        <h2 className="text-4xl font-black text-center mb-12">Our Work</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {[
            "packaging box luxury design",
            "printing machine factory",
            "branding identity design studio",
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

      {/* TRUSTED BY (REAL LOGOS) */}
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
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-center">
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
