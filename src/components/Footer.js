export default function Footer() {
  return (
    <footer className="bg-white border-t py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            Studio X
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Modern creative studio focused on branding,
            digital experiences, and premium visual design solutions.
          </p>

        </div>

        {/* NAVIGATION */}
        <div>

          <h3 className="font-semibold text-xl mb-4">
            Navigation
          </h3>

          <div className="flex flex-col gap-3 text-gray-600">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
          </div>

        </div>

        {/* SERVICES */}
        <div>

          <h3 className="font-semibold text-xl mb-4">
            Services
          </h3>

          <div className="flex flex-col gap-3 text-gray-600">
            <p>Brand Identity</p>
            <p>Web Design</p>
            <p>UI/UX Design</p>
            <p>Creative Strategy</p>
          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="font-semibold text-xl mb-4">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-gray-600">
            <p>Ahmedabad, India</p>
            <p>hello@studiox.com</p>
            <p>+91 98765 43210</p>
          </div>

        </div>

      </div>

    </footer>
  )
}