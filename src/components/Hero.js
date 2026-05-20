export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-white">

      <p className="uppercase tracking-[6px] text-gray-500 mb-6">
        Premium Packaging Solutions
      </p>

      <h1 className="text-7xl md:text-8xl font-bold leading-tight max-w-6xl">
        Designing Packaging
        <br />
        That Creates Impact
      </h1>

      <p className="mt-8 text-gray-600 text-xl max-w-3xl leading-relaxed">
        We craft luxurious, modern, and high-quality packaging &
        printing solutions for ambitious brands worldwide.
      </p>

      <div className="flex gap-6 mt-12">

        <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300">
          Explore Work
        </button>

        <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition duration-300">
          Get Quote
        </button>

      </div>

    </section>
  )
}