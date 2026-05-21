// src/components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-[#072b57] text-white pt-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14 pb-16">

        <div>

          <div className="flex items-center gap-3 mb-8">

            <img
              src="https://i.imgur.com/3r8QZ6D.png"
              alt=""
              className="w-16"
            />

            <div>
              <h2 className="text-4xl font-black leading-none">
                MUKESH
              </h2>

              <p className="text-xl font-semibold text-gray-300">
                GRAPHICS
              </p>
            </div>

          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            Mukesh Graphics is a premium printing,
            packaging, and designing company delivering quality,
            precision, and innovation.
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-bold mb-8">
            Quick Navigation
          </h3>

          <div className="flex flex-col gap-5 text-lg text-gray-300">

            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#clients">Our Clients</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>

          </div>

        </div>

        <div>

          <h3 className="text-3xl font-bold mb-8">
            Get In Touch
          </h3>

          <div className="space-y-6 text-lg text-gray-300">

            <p>
              PLOT NO. 58, VISHWAKARMA ESTATE,
              Chitra Gujarat Industrial Development Corporation,
              Bhavnagar, Gujarat 364004
            </p>

            <p>
              +91 9426272081
              <br />
              +91 9825982727
            </p>

            <p className="text-orange-400">
              info@mukeshgraphics.com
              <br />
              sales@mukeshgraphics.com
            </p>

          </div>

        </div>

        <div>

          <h3 className="text-3xl font-bold mb-8">
            Working Hours
          </h3>

          <div className="space-y-5 text-lg text-gray-300">

            <p>
              Monday – Friday
              <br />
              <span className="font-bold text-white">
                09:00 AM – 07:00 PM
              </span>
            </p>

            <p>
              Saturday
              <br />
              <span className="font-bold text-white">
                09:00 AM – 05:00 PM
              </span>
            </p>

            <p>
              Sunday
              <br />
              <span className="font-bold text-white">
                Closed
              </span>
            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 py-8 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-gray-300">

          <p>
            © 2026 All Rights Reserved by Mukesh Graphics
          </p>

          <p>
            Designed by WEB SEAS TECHNOLOGY
          </p>

        </div>

      </div>

    </footer>
  )
}
