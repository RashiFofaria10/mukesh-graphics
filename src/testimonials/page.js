export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-40 px-6 bg-[#f6f9fc]">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black text-center text-[#071d45] mb-20">
          Testimonials
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-10 rounded-[35px] shadow-xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              “Excellent packaging quality and outstanding printing service.”
            </p>
            <h2 className="text-2xl font-black">
              — Rajesh Patel
            </h2>
          </div>

          <div className="bg-white p-10 rounded-[35px] shadow-xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              “Professional team with premium industrial solutions.”
            </p>
            <h2 className="text-2xl font-black">
              — Amit Shah
            </h2>
          </div>

          <div className="bg-white p-10 rounded-[35px] shadow-xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              “Luxury branding and packaging at its best.”
            </p>
            <h2 className="text-2xl font-black">
              — Neha Mehta
            </h2>
          </div>

        </div>

      </div>

    </main>
  );
}