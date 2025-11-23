"use client";

import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Équipe" },
    { href: "/apropos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Logo / marque */}
        <Link href="/" className="brand" onClick={closeMenu}>
          <span className="brand-main">BC</span>
          <span className="brand-sub">Switzerland GmbH</span>
        </Link>

        {/* Bouton menu mobile */}
        <button
          className={`nav-toggle ${isOpen ? "nav-toggle-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          <span />
          <span />
        </button>

        {/* Liens de navigation */}
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
    }
