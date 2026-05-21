// src/components/Navbar.js

"use client"

import { useState } from "react"
import { Menu, X, FileText } from "lucide-react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "HOME", link: "#home" },
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "OUR CLIENTS", link: "#clients" },
    { name: "ABOUT US", link: "#about" },
    { name: "CONTACT US", link: "#contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-orange-100 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <a href="#home" className="flex items-center gap-3">

            <img
              src="https://i.imgur.com/3r8QZ6D.png"
              alt="logo"
              className="w-14"
            />

            <div className="leading-none">
              <h1 className="font-black text-2xl tracking-tight">
                MUKESH
              </h1>

              <p className="text-sm font-semibold text-gray-600">
                GRAPHICS
              </p>
            </div>

          </a>

          <div className="hidden lg:flex items-center gap-10">

            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="font-bold text-[15px] hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            ))}

          </div>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 bg-[#1b1833] text-white px-7 py-4 rounded-md font-bold hover:bg-orange-500 transition"
          >
            <FileText size={18} />
            REQUEST QUOTE
          </a>

          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={34} />
          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-0 left-0 h-full w-[85%] bg-white z-[100] shadow-2xl transition duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b">

          <h2 className="text-3xl font-black">
            MENU
          </h2>

          <button onClick={() => setOpen(false)}>
            <X size={36} />
          </button>

        </div>

        <div className="flex flex-col p-8 gap-8">

          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold"
            >
              {item.name}
            </a>
          ))}

        </div>

      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-50"
        ></div>
      )}

    </>
  )
}
