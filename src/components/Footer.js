// src/components/Footer.js

import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#06152e] via-[#072b57] to-[#0b3d78] text-white">

      {/* TOP GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      {/* CTA SECTION */}

      <div className="max-w-7xl mx-auto px-6 pt-24">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">

          <div>

            <p className="uppercase tracking-[4px] text-orange-400 font-bold mb-4">
              LET'S WORK TOGETHER
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Build Packaging That
              <br />
              Stands Out Everywhere
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Premium printing and packaging solutions crafted with innovation,
              precision and modern industrial excellence.
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

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-4 md:grid-cols-2 gap-16 relative z-10">

        {/* BRAND */}

        <div>

          <h2 className="text-5xl font-black mb-6">
            Mukesh Graphics
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Mukesh Graphics is a premium printing,
            packaging and designing company delivering
            quality, precision and innovation.
          </p>

          <div className="flex items-center gap-5">

            <a className="w-14 h-14 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center cursor-pointer">
              <Facebook />
            </a>

            <a className="w-14 h-14 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center cursor-pointer">
              <Instagram />
            </a>

            <a className="w-14 h-14 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center cursor-pointer">
              <Linkedin />
            </a>

          </div>

        </div>

        {/* NAVIGATION */}

        <div>

          <h3 className="text-3xl font-black mb-8">
            Quick Navigation
          </h3>

          <div className="flex flex-col gap-5 text-lg">

            {[
              "Home",
              "Portfolio",
              "Our Clients",
              "About Us",
              "Contact Us",
            ].map((item, index) => (

              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-gray-300 hover:text-orange-400 transition flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {item}
              </a>

            ))}

          </div>

        </div>

        {/* CONTACT */}

        <div>

          <h3 className="text-3xl font-black mb-8">
            Get In Touch
          </h3>

          <div className="space-y-8 text-lg text-gray-300">

            <div className="flex gap-4">

              <MapPin className="text-orange-400 mt-1" />

              <p className="leading-relaxed">
                PLOT NO. 58, VISHWAKARMA ESTATE,
                Chitra Gujarat Industrial Development Corporation,
                Bhavnagar, Gujarat 364004
              </p>

            </div>

            <div className="flex gap-4">

              <Phone className="text-orange-400 mt-1" />

              <div>
                <p>+91 9426272081</p>
                <p>+91 9825982727</p>
              </div>

            </div>

            <div className="flex gap-4">

              <Mail className="text-orange-400 mt-1" />

              <div className="text-orange-400">
                <p>info@mukeshgraphics.com</p>
                <p>sales@mukeshgraphics.com</p>
              </div>

            </div>

          </div>

        </div>

        {/* WORKING HOURS */}

        <div>

          <h3 className="text-3xl font-black mb-8">
            Working Hours
          </h3>

          <div className="space-y-8 text-lg text-gray-300">

            <div className="flex gap-4">

              <Clock3 className="text-orange-400 mt-1" />

              <div>

                <p className="font-semibold text-white">
                  Monday – Friday
                </p>

                <p>09:00 AM – 07:00 PM</p>

              </div>

            </div>

            <div className="flex gap-4">

              <Clock3 className="text-orange-400 mt-1" />

              <div>

                <p className="font-semibold text-white">
                  Saturday
                </p>

                <p>09:00 AM – 05:00 PM</p>

              </div>

            </div>

            <div className="flex gap-4">

              <Clock3 className="text-orange-400 mt-1" />

              <div>

                <p className="font-semibold text-white">
                  Sunday
                </p>

                <p>Closed</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-gray-300">

          <p>
            © 2026 All Rights Reserved by Mukesh Graphics
          </p>

          <p>
            Designed & Developed with Modern UI Experience
          </p>

        </div>

      </div>

    </footer>
  )
}
