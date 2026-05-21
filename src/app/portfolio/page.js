export default function PortfolioPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-white min-h-screen">

      <div className="max-w-7xl mx-auto text-center mb-24">

        <h1 className="text-6xl font-black text-[#0b2d57] mb-6">
          Portfolio
        </h1>

        <p className="text-xl text-gray-600">
          Explore our premium projects
        </p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-[#f6f9fc] rounded-[35px] overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
            className="h-[300px] w-full object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-black mb-4">
              Mono Cartons
            </h2>

            <p className="text-gray-600 text-lg">
              Premium carton packaging projects.
            </p>

          </div>

        </div>

        <div className="bg-[#f6f9fc] rounded-[35px] overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
            className="h-[300px] w-full object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-black mb-4">
              Pharma Packaging
            </h2>

            <p className="text-gray-600 text-lg">
              Pharmaceutical packaging solutions.
            </p>

          </div>

        </div>

        <div className="bg-[#f6f9fc] rounded-[35px] overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
            className="h-[300px] w-full object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-black mb-4">
              FMCG Packaging
            </h2>

            <p className="text-gray-600 text-lg">
              Attractive retail packaging designs.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
