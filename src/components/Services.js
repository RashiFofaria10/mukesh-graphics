export default function Services() {
  return (
    <section className="py-32 px-8 bg-white">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-gray-500 mb-4">
          Services
        </p>

        <h2 className="text-6xl font-bold mb-20">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-10 border rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold mb-4">
              Packaging Design
            </h3>

            <p className="text-gray-600">
              Innovative luxury packaging tailored for modern brands.
            </p>
          </div>

          <div className="p-10 border rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold mb-4">
              Offset Printing
            </h3>

            <p className="text-gray-600">
              High-quality premium printing solutions with precision.
            </p>
          </div>

          <div className="p-10 border rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold mb-4">
              Label Solutions
            </h3>

            <p className="text-gray-600">
              Custom labels crafted for branding excellence.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}
