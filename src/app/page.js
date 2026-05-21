export default function HomePage() {
  return (
    <main className="bg-[#03152c] text-white overflow-hidden">

      <section className="min-h-screen flex items-center px-6 pt-36 bg-gradient-to-br from-[#03152c] via-[#08264d] to-[#133b6c]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-orange-400 font-bold mb-6">
              Luxury Packaging & Printing
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              Premium Packaging That Builds Brands
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Mukesh Graphics delivers world-class industrial printing, premium packaging and creative branding solutions with modern innovation.
            </p>

            <div className="flex flex-wrap gap-6">

              <a
                href="/portfolio"
                className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full font-bold text-lg"
              >
                Explore Portfolio
              </a>

              <a
                href="/book-service"
                className="border border-white/20 hover:bg-white/10 transition px-10 py-5 rounded-full font-bold text-lg"
              >
                Book Service
              </a>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
              alt="hero"
              className="rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      <section className="py-28 px-6 bg-white text-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-[#f6f9fc] p-10 rounded-[35px] shadow-xl">
            <div className="text-6xl mb-6">📦</div>
            <h2 className="text-3xl font-black mb-4">
              Packaging
            </h2>
            <p className="text-gray-600 text-lg">
              Luxury packaging solutions for premium businesses.
            </p>
          </div>

          <div className="bg-[#f6f9fc] p-10 rounded-[35px] shadow-xl">
            <div className="text-6xl mb-6">🖨️</div>
            <h2 className="text-3xl font-black mb-4">
              Offset Printing
            </h2>
            <p className="text-gray-600 text-lg">
              High-end industrial printing technology.
            </p>
          </div>

          <div className="bg-[#f6f9fc] p-10 rounded-[35px] shadow-xl">
            <div className="text-6xl mb-6">🎨</div>
            <h2 className="text-3xl font-black mb-4">
              Branding
            </h2>
            <p className="text-gray-600 text-lg">
              Creative visual identity and branding solutions.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
