export default function AboutPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-white min-h-screen">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-5">
            ABOUT COMPANY
          </p>

          <h1 className="text-6xl font-black text-[#0b2d57] mb-8 leading-tight">
            Excellence In Printing & Packaging
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mukesh Graphics is a professionally managed company specializing in mono cartons, pharmaceutical boxes, FMCG packaging and offset printing solutions.
          </p>

          <p className="text-xl text-gray-600 leading-relaxed">
            We combine innovation, creativity and industrial precision to deliver world-class results for modern businesses.
          </p>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
            alt="about"
            className="rounded-[40px] shadow-2xl"
          />

        </div>

      </div>

    </main>
  );
}
