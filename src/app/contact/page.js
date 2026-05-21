export default function ContactPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-[#f6f9fc] min-h-screen">

      <div className="max-w-7xl mx-auto text-center mb-24">

        <h1 className="text-6xl font-black text-[#0b2d57] mb-6">
          Contact Us
        </h1>

        <p className="text-xl text-gray-600">
          Let’s work together
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-[35px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8 text-[#0b2d57]">
            Office Contact
          </h2>

          <div className="space-y-5 text-xl text-gray-700">

            <p>📞 +91 9426272081</p>
            <p>✉ info@mukeshgraphics.com</p>
            <p>📍 Bhavnagar, Gujarat</p>

          </div>

        </div>

        <div className="bg-white rounded-[35px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8 text-[#0b2d57]">
            Business Enquiry
          </h2>

          <div className="space-y-5 text-xl text-gray-700">

            <p>📞 +91 9825982727</p>
            <p>✉ sales@mukeshgraphics.com</p>
            <p>📍 Gujarat Industrial Area</p>

          </div>

        </div>

      </div>

    </main>
  );
}
