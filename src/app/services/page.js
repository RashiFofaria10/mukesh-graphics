import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1585386959984-a41552231693",
      title: "Packaging Design",
      desc: "High-end custom packaging for brands and products.",
    },
    {
      img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab",
      title: "Offset Printing",
      desc: "Premium bulk printing with precision and quality.",
    },
    {
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
      title: "Brand Identity",
      desc: "Complete branding solutions including logos and labels.",
    },
  ]

  return (
    <main>
      <Navbar />

      {/* HEADER */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold">Our Services</h2>
        <p className="text-gray-600 mt-4">
          Professional printing & branding solutions for modern businesses
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">

        {services.map((s, i) => (
          <div
            key={i}
            className="rounded-3xl overflow-hidden shadow-lg group bg-white"
          >
            <img
              src={s.img}
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          </div>
        ))}

      </section>

      <Footer />
    </main>
  )
}