"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Routes", href: "#routes" },
  { name: "Popular Routes", href: "#popular-routes" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-secondary">
            Krishna<span className="text-primary"> Tour & Travels</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{link.name}</a>
            </li>
          ))}
        </ul>

        <a href="tel:9131691660" className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full transition-colors">📞 9131691660</a>

        <button aria-label="Toggle Menu" className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-secondary transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-secondary transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-secondary transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
        <ul className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-base font-medium text-foreground border-b border-gray-100">{link.name}</a>
            </li>
          ))}
          <li className="pt-3">
            <a href="tel:9131691660" className="block text-center bg-primary text-white font-semibold py-3 rounded-full">📞 Call Now: 9131691660</a>
          </li>
        </ul>
      </div>
    </header>
  );
}