"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          DTE<br />Holding AG
        </Link>

        <nav className="nav-links">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
          <Link href="/services" className={pathname === "/services" ? "active" : ""}>
            Services
          </Link>
          <Link href="/team" className={pathname === "/team" ? "active" : ""}>
            Team
          </Link>
          <Link href="/a-propos" className={pathname === "/a-propos" ? "active" : ""}>
            À propos
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
