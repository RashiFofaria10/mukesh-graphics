export default function BookServicePage() {
  return (
    <main className="min-h-screen pt-40 px-6 bg-[#f6f9fc]">

      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl">

        <h1 className="text-5xl font-black text-[#071d45] mb-10 text-center">
          Book A Service
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-5 rounded-2xl text-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-5 rounded-2xl text-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-5 rounded-2xl text-lg"
          />

          <input
            type="text"
            placeholder="Service Type"
            className="border p-5 rounded-2xl text-lg"
          />

        </div>

        <textarea
          placeholder="Project Details"
          rows="6"
          className="border p-5 rounded-2xl text-lg w-full mt-6"
        />

        <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 transition text-white py-5 rounded-2xl text-xl font-bold">
          Submit Request
        </button>

      </div>

    </main>
  );
}