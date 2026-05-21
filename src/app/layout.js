import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mukesh Graphics",
  description: "Luxury Printing & Packaging Solutions",
};

function Navbar() {
  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">

      <div className="w-full max-w-7xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-8 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-black text-white tracking-wide"
        >
          Mukesh Graphics
        </Link>

        <nav className="hidden lg:flex gap-8 text-white font-semibold">

          <Link href="/" className="hover:text-orange-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-orange-400 transition">
            About
          </Link>

          <Link href="/services" className="hover:text-orange-400 transition">
            Services
          </Link>

          <Link href="/portfolio" className="hover:text-orange-400 transition">
            Portfolio
          </Link>

          <Link href="/gallery" className="hover:text-orange-400 transition">
            Gallery
          </Link>

          <Link href="/clients" className="hover:text-orange-400 transition">
            Clients
          </Link>

          <Link href="/testimonials" className="hover:text-orange-400 transition">
            Testimonials
          </Link>

          <Link href="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>

        </nav>

        <Link
          href="/book-service"
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-7 py-3 rounded-full font-bold"
        >
          Book Service
        </Link>

      </div>

    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#04152d] text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6">

        <div>

          <h2 className="text-3xl font-black mb-6">
            Mukesh Graphics
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Premium industrial printing, packaging and branding solutions for modern businesses.
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <div className="space-y-3 text-gray-300">

            <p><Link href="/">Home</Link></p>
            <p><Link href="/about">About</Link></p>
            <p><Link href="/services">Services</Link></p>
            <p><Link href="/portfolio">Portfolio</Link></p>

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">
            Services
          </h2>

          <div className="space-y-3 text-gray-300">

            <p>Offset Printing</p>
            <p>Packaging Design</p>
            <p>Luxury Branding</p>
            <p>Industrial Printing</p>

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">
            Contact
          </h2>

          <div className="space-y-3 text-gray-300">

            <p>📞 +91 9426272081</p>
            <p>✉ info@mukeshgraphics.com</p>
            <p>📍 Bhavnagar, Gujarat</p>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500">
        © 2026 Mukesh Graphics. All Rights Reserved.
      </div>

    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}
