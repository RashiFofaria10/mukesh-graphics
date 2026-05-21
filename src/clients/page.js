export default function ClientsPage() {
  return (
    <main className="min-h-screen pt-40 px-6 bg-white">

      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-6xl font-black text-[#071d45] mb-6">
          Our Clients
        </h1>

        <p className="text-xl text-gray-600 mb-20">
          Trusted by premium businesses and brands
        </p>

        <div className="grid md:grid-cols-4 gap-10">

          {["Nestle", "Amul", "Cadbury", "Reliance"].map((client) => (
            <div
              key={client}
              className="bg-[#f6f9fc] rounded-[30px] p-14 shadow-xl text-3xl font-black"
            >
              {client}
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}