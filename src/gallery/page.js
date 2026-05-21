export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-40 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black text-center text-[#071d45] mb-20">
          Gallery
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[35px] shadow-xl h-[350px] object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[35px] shadow-xl h-[350px] object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[35px] shadow-xl h-[350px] object-cover w-full"
          />

        </div>

      </div>

    </main>
  );
}