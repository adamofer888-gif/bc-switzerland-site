"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/" className="navbar-logo">
          DTE <span>Holding AG</span>
        </Link>
      </div>

      <div className="navbar-right">
        <Link
          href="/"
          className={pathname === "/" ? "active-nav" : ""}
        >
          Accueil
        </Link>

        <Link
          href="/services"
          className={pathname === "/services" ? "active-nav" : ""}
        >
          Services
        </Link>

        <Link
          href="/team"
          className={pathname === "/team" ? "active-nav" : ""}
        >
          Team
        </Link>

        {/* ✅ Correction ici — sans tiret */}
        <Link
          href="/apropos"
          className={pathname === "/apropos" ? "active-nav" : ""}
        >
          À propos
        </Link>

        <Link
          href="/contact"
          className={pathname === "/contact" ? "active-nav" : "contact-btn"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
