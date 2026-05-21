export default function HomePage() {
  return (
    <main className="bg-[#f6f9fc] overflow-hidden">

      <section className="min-h-screen flex items-center pt-32 px-6 bg-gradient-to-br from-[#071d45] via-[#0b2d57] to-[#133b6c]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="text-white">

            <p className="uppercase tracking-[5px] text-orange-400 font-bold mb-6">
              PREMIUM PRINTING & PACKAGING
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">
              Transforming Packaging Into Brand Power
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Mukesh Graphics delivers high-quality industrial printing, mono cartons, FMCG packaging and pharmaceutical packaging solutions with modern technology.
            </p>

            <div className="flex flex-wrap gap-6">

              <a
                href="/portfolio"
                className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-lg font-bold"
              >
                Explore Portfolio
              </a>

              <a
                href="/contact"
                className="border border-white/20 hover:bg-white/10 transition px-10 py-5 rounded-full text-lg font-bold"
              >
                Contact Us
              </a>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
              alt="printing"
              className="rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-white rounded-[35px] p-10 shadow-xl text-center">

            <div className="text-6xl mb-6">📦</div>

            <h2 className="text-3xl font-black mb-4">
              Packaging
            </h2>

            <p className="text-gray-600 text-lg">
              Premium industrial packaging solutions.
            </p>

          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl text-center">

            <div className="text-6xl mb-6">🖨️</div>

            <h2 className="text-3xl font-black mb-4">
              Offset Printing
            </h2>

            <p className="text-gray-600 text-lg">
              Advanced high-quality printing solutions.
            </p>

          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl text-center">

            <div className="text-6xl mb-6">🎨</div>

            <h2 className="text-3xl font-black mb-4">
              Branding
            </h2>

            <p className="text-gray-600 text-lg">
              Creative branding and design services.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
