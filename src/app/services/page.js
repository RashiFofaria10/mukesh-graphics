export default function ServicesPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-[#f6f9fc] min-h-screen">

      <div className="max-w-7xl mx-auto text-center mb-24">

        <h1 className="text-6xl font-black text-[#0b2d57] mb-6">
          Our Services
        </h1>

        <p className="text-xl text-gray-600">
          Premium printing and packaging solutions
        </p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-white rounded-[35px] p-10 shadow-xl">
          <div className="text-6xl mb-8">📦</div>
          <h2 className="text-3xl font-black mb-5">
            Packaging Design
          </h2>
          <p className="text-gray-600 text-lg">
            Creative packaging solutions for industrial brands.
          </p>
        </div>

        <div className="bg-white rounded-[35px] p-10 shadow-xl">
          <div className="text-6xl mb-8">🖨️</div>
          <h2 className="text-3xl font-black mb-5">
            Offset Printing
          </h2>
          <p className="text-gray-600 text-lg">
            Advanced offset printing with modern technology.
          </p>
        </div>

        <div className="bg-white rounded-[35px] p-10 shadow-xl">
          <div className="text-6xl mb-8">🎨</div>
          <h2 className="text-3xl font-black mb-5">
            Branding
          </h2>
          <p className="text-gray-600 text-lg">
            Attractive branding and visual identity solutions.
          </p>
        </div>

      </div>

    </main>
  );
}
