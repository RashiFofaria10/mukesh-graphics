export default function Portfolio() {
  return (
    <section className="py-32 px-8 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-gray-500 mb-4">
          Portfolio
        </p>

        <h2 className="text-6xl font-bold mb-20">
          Featured Packaging
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="group relative overflow-hidden rounded-3xl h-[450px] bg-black text-white flex items-end p-8 hover:scale-105 transition duration-500">

            <div>
              <p className="text-sm uppercase tracking-[3px] text-gray-300">
                Luxury Box
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Cosmetic Packaging
              </h3>
            </div>

          </div>

          <div className="group relative overflow-hidden rounded-3xl h-[450px] bg-gray-800 text-white flex items-end p-8 hover:scale-105 transition duration-500">

            <div>
              <p className="text-sm uppercase tracking-[3px] text-gray-300">
                Premium Print
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Product Labels
              </h3>
            </div>

          </div>

          <div className="group relative overflow-hidden rounded-3xl h-[450px] bg-zinc-700 text-white flex items-end p-8 hover:scale-105 transition duration-500">

            <div>
              <p className="text-sm uppercase tracking-[3px] text-gray-300">
                Branding
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Food Packaging
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}