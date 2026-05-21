import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mukesh Graphics",
  description: "Premium Printing & Packaging Solutions",
};

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#071d45]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-black text-white tracking-wide"
        >
          Mukesh Graphics
        </Link>

        <nav className="flex gap-8 text-white font-semibold text-lg">

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

          <Link href="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071d45] text-white pt-20 pb-10 mt-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">

        <div>

          <h2 className="text-3xl font-black mb-6">
            Mukesh Graphics
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Premium printing and packaging company delivering innovative branding and industrial packaging solutions.
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <div className="space-y-3 text-lg">

            <p><Link href="/">Home</Link></p>
            <p><Link href="/about">About</Link></p>
            <p><Link href="/services">Services</Link></p>
            <p><Link href="/portfolio">Portfolio</Link></p>
            <p><Link href="/contact">Contact</Link></p>

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">
            Contact
          </h2>

          <div className="space-y-3 text-lg text-gray-300">

            <p>📞 +91 9426272081</p>
            <p>✉ info@mukeshgraphics.com</p>
            <p>📍 Bhavnagar, Gujarat</p>

          </div>

        </div>

      </div>

      <div className="border-t border-white/20 mt-16 pt-6 text-center text-gray-400">
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
