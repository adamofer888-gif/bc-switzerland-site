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
      <style jsx>{`
        .navbar {
          width: 100%;
          background: #0b0d16;
          padding: 18px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-container {
          width: 90%;
          max-width: 1400px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 18px;
          font-weight: 900;
          color: white;
          line-height: 18px;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          align-items: center;
          font-size: 15px;
        }

        .nav-links a {
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          transition: 0.2s;
        }

        .nav-links a.active,
        .nav-links a:hover {
          color: #ffcf5a;
          font-weight: 600;
        }
      `}</style>
    </header>
  );
}
