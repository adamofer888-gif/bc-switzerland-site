"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0d10]/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-semibold tracking-wide">
          DTE HOLDING AG
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-300">
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/wealth-management" className="hover:text-white transition">
            Gestion de patrimoine
          </Link>
          <Link href="/capital-risque" className="hover:text-white transition">
            Capital à risque
          </Link>
          <Link href="/team" className="hover:text-white transition">Équipe</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b0d10] border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3 text-gray-300">
            <Link href="/services" className="hover:text-white" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/wealth-management" className="hover:text-white" onClick={() => setOpen(false)}>
              Gestion de patrimoine
            </Link>
            <Link href="/capital-risque" className="hover:text-white" onClick={() => setOpen(false)}>
              Capital à risque
            </Link>
            <Link href="/team" className="hover:text-white" onClick={() => setOpen(false)}>
              Équipe
            </Link>
            <Link href="/contact" className="hover:text-white" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
          }
