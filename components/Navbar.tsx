"use client";

import { useState } from "react";
import { Home, Menu, X, Phone } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-900 text-gold-400">
            <Home size={20} strokeWidth={2.2} />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-emerald-950">
            Zameen<span className="text-gold-500">X</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-800 hover:shadow-md"
          >
            <Phone size={15} />
            0300 123 4567
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-emerald-950 hover:bg-emerald-50 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-emerald-950/10 bg-white px-4 py-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <Phone size={15} />
            0300 123 4567
          </a>
        </div>
      )}
    </header>
  );
}
