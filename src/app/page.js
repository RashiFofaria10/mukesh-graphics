export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f6f9fc]">
      <div className="text-center">

        <h1 className="text-6xl font-bold text-[#0b2d57] mb-6">
          Mukesh Graphics
        </h1>

        <p className="text-2xl text-gray-600 mb-10">
          Premium Printing & Packaging Solutions
        </p>

        <div className="flex gap-5 justify-center">

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

          <a
            href="/portfolio"
            className="bg-black text-white px-8 py-4 rounded-full font-bold"
          >
            Portfolio
          </a>

          <a
            href="/contact"
            className="bg-gray-700 text-white px-8 py-4 rounded-full font-bold"
          >
            Contact
          </a>

        </div>

      </div>
    </main>
  );
}
