import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo + tagline */}
        <Link href="/" className="navbar-brand">
          <div className="brand-mark">BC</div>
          <div className="brand-text">
            <div className="brand-name">BC Switzerland GmbH</div>
            <div className="brand-tagline">
              Corporate advisory & Swiss structuring
            </div>
          </div>
        </Link>

        {/* Menu */}
        <nav className="navbar-menu">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/equipe">Équipe</Link>
          <Link href="/apropos">À propos</Link>
          <Link href="/contact" className="nav-btn">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
