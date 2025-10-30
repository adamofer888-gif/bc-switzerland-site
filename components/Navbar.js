"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-[#0A1A33]">
          DTE Holding AG
        </Link>

        <div className="flex gap-6 text-[#0A1A33] font-medium">
          <Link href="/services" className="hover:text-gray-600">Services</Link>
          <Link href="/team" className="hover:text-gray-600">Team</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
