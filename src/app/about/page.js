import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
          className="rounded-3xl"
        />

        <div>
          <h2 className="text-5xl font-bold mb-6">About Us</h2>

          <p className="text-gray-600">
            Mukesh Graphics is a professional printing and packaging company
            delivering high-quality branding and design solutions with modern technology.
          </p>
        </div>

      </section>

      <Footer />
    </main>
  )
}