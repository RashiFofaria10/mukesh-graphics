"use client";

export default function HomePage() {
  return (
    <main className="bg-[#f7f8fa] text-[#111] overflow-hidden">

      {/* NAVBAR */}

      <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">

        <div className="w-full max-w-7xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full px-8 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-black">
            Mukesh Graphics
          </h1>

          <nav className="hidden md:flex gap-8 font-semibold text-sm">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>

          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition cursor-pointer"
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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-6">
              PREMIUM PRINTING & PACKAGING
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 bg-gradient-to-r from-black to-gray-500 text-transparent bg-clip-text">
              Luxury Packaging Experiences
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Mukesh Graphics delivers elegant packaging, offset printing and branding solutions with modern aesthetics and industrial precision.
            </p>

            <div className="flex gap-5 flex-wrap">

              <a
                href="#portfolio"
                className="bg-black text-white px-8 py-5 rounded-full font-semibold hover:scale-105 transition"
              >
                Explore Work
              </a>

              <a
                href="#contact"
                className="bg-white border border-black/10 px-8 py-5 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Contact Us
              </a>

            </div>

          </div>

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
              alt="hero"
              className="rounded-[40px] shadow-2xl h-[700px] object-cover"
            />

            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[30px] shadow-2xl">

              <h3 className="text-5xl font-black mb-2">
                15+
              </h3>

              <p className="text-gray-600">
                Years Experience
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-40 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="grid grid-cols-2 gap-6">

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[35px] h-[500px] object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[35px] h-[500px] object-cover shadow-xl mt-20"
            />

          </div>

          <div>

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
              ABOUT US
            </p>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Elegant Printing With Precision Craftsmanship
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Mukesh Graphics specializes in luxury mono cartons, FMCG packaging, pharmaceutical printing and premium offset solutions.
            </p>

            <div className="space-y-5">

              <div className="bg-[#f7f8fa] rounded-[25px] p-6 shadow-lg">
                <h3 className="text-2xl font-black mb-2">
                  Modern Infrastructure
                </h3>
                <p className="text-gray-600">
                  Advanced machinery and industrial-grade printing technology.
                </p>
              </div>

              <div className="bg-[#f7f8fa] rounded-[25px] p-6 shadow-lg">
                <h3 className="text-2xl font-black mb-2">
                  Premium Finishing
                </h3>
                <p className="text-gray-600">
                  Luxury finishing techniques with precision packaging quality.
                </p>
              </div>

            </div>

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
              What We Offer
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Packaging",
                image:
                  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Offset Printing",
                image:
                  "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Branding",
                image:
                  "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500"
              >

                <img
                  src={service.image}
                  className="h-[300px] w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-black mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-lg">
                    Premium industrial solutions crafted for modern brands.
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CLIENTS */}

      <section
        id="clients"
        className="py-40 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
            TRUSTED BY
          </p>

          <h2 className="text-5xl font-black mb-20">
            Our Clients
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

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
                className="bg-[#f7f8fa] rounded-[30px] p-12 shadow-lg text-2xl font-black hover:-translate-y-2 transition"
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
        className="py-40 px-6"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-gray-500 font-semibold mb-5">
              CONTACT
            </p>

            <h2 className="text-5xl font-black mb-8">
              Let’s Build Something Premium
            </h2>

            <p className="text-xl text-gray-600 mb-10">
              Contact Mukesh Graphics for luxury printing and packaging solutions.
            </p>

            <div className="space-y-5 text-lg text-gray-700">

              <p>📞 +91 9426272081</p>
              <p>✉ info@mukeshgraphics.com</p>
              <p>📍 Bhavnagar, Gujarat</p>

            </div>

          </div>

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[40px] shadow-2xl h-[650px] object-cover"
            />

            <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-xl p-8 rounded-[30px] shadow-xl">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-5 rounded-2xl border border-black/10 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-5 rounded-2xl border border-black/10 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full mb-4 p-5 rounded-2xl border border-black/10 outline-none"
              />

              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold w-full">
                Send Message
              </button>

            </div>

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
              Premium packaging and printing experiences with modern luxury aesthetics.
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
              <p><a href="#contact">Contact</a></p>

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
