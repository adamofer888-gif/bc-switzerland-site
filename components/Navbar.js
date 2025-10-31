import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <nav className="container nav__inner">
        <Link href="/" className="brand">DTE Holding AG</Link>
        <div className="nav__links">
          <Link href="/services" className="nav__link">Services</Link>
          <Link href="/team" className="nav__link">Team</Link>
          <Link href="/contact" className="btn btn--gold">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
