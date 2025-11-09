"use client";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} DTE Holding AG. Tous droits réservés.</p>
        <p>Registre du commerce : CH-130.3.017.565-5 — Société active depuis 2011</p>
      </div>
    </footer>
  );
}
