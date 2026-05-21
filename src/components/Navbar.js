// src/components/Navbar.js

"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Our Clients", link: "#clients" },
    { name: "About Us", link: "#about" },
    { name: "Contact Us", link: "#contact" },
  ]

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] z-50">

        <div className="backdrop-blur-xl bg-white/90 border border-orange-100 rounded-full px-6 md:px-10 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between">

          <a
            href="#home"
            className="text-2xl md:text-3xl font-black tracking-[-1px] text-[#111827]"
          >
            Mukesh Graphics
          </a>

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-[15px] font-semibold text-gray-700 hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            ))}

          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu size={34} />
          </button>

        </div>

      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-white/90 backdrop-blur-2xl z-[100] shadow-2xl transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b border-gray-200">

          <h2 className="text-2xl font-black">
            Menu
          </h2>

          <button onClick={() => setOpen(false)}>
            <X size={34} />
          </button>

        </div>

        <div className="flex flex-col p-8 gap-8">

          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-orange-500 transition duration-300"
            >
              {item.name}
            </a>
          ))}

        </div>

      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
        ></div>
      )}

    </>
  )
}
