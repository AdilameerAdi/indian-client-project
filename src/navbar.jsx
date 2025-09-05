import { useState } from "react";
import logo from "./img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "Features",
    "How It Works",
    "AI",
    "Pricing",
    "Roadmap",
    "FAQs",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto md:w-40 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-sky-300 transition font-medium"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 rounded-2xl text-white bg-gradient-to-r from-sky-500 to-blue-700 hover:opacity-90 transition">
              Request Demo
            </button>
            <button className="px-4 py-2 rounded-2xl border border-white text-white hover:bg-white hover:text-blue-700 transition">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-800 to-blue-900 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-white hover:text-sky-300 transition font-medium"
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="px-4 py-2 rounded-2xl text-white bg-gradient-to-r from-sky-500 to-blue-700 hover:opacity-90 transition">
              Request Demo
            </button>
            <button className="px-4 py-2 rounded-2xl border border-white text-white hover:bg-white hover:text-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
