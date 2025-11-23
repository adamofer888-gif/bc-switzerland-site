import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <Link href="/">BC Switzerland GmbH</Link>
        </div>

        <nav className="navbar-links">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/equipe">Équipe</Link>
          <Link href="/apropos">À propos</Link>
          <Link href="/contact" className="nav-cta">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
