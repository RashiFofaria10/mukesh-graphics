export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-6xl font-black text-[#0b2d57] mb-6">
          Mukesh Graphics
        </h1>

        <p className="text-2xl text-gray-600 mb-10">
          Premium Printing & Packaging Solutions
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="/about"
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold"
          >
            About
          </a>

          <a
            href="/services"
            className="bg-[#0b2d57] text-white px-8 py-4 rounded-full font-bold"
          >
            Services
          </a>

        </div>

      </div>
    </main>
  )
}
