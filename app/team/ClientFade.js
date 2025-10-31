"use client";

import { useEffect } from "react";

// Active l'animation .fade-in quand les blocs entrent dans le viewport
export default function ClientFade({ children }) {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-block");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("fade-in");
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return children;
}
