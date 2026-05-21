// src/components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-[#072b57] text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 pb-16">

        <div>

          <h2 className="text-4xl font-black mb-6">
            Mukesh Graphics
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Mukesh Graphics is a premium printing,
            packaging and designing company delivering
            quality, precision and innovation.
          </p>

        </div>

        <div>

          <h3 className="font-bold text-2xl mb-6">
            Quick Navigation
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">

            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#clients">Our Clients</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>

          </div>

        </div>

        <div>

          <h3 className="font-bold text-2xl mb-6">
            Get In Touch
          </h3>

          <div className="flex flex-col gap-5 text-gray-300 leading-relaxed">

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

          <h3 className="font-bold text-2xl mb-6">
            Working Hours
          </h3>

          <div className="flex flex-col gap-5 text-gray-300">

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

      <div className="border-t border-white/10 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-gray-300">

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
