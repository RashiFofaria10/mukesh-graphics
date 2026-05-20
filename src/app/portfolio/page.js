import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PortfolioPage() {
  const images = [
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    "https://images.unsplash.com/photo-1558655146-d09347e92766",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
  ]

  return (
    <main>
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Portfolio
        </h2>

        {/* CLEAN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </main>
  )
}
