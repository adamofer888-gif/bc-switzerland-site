"use client";

import { useEffect } from "react";

export default function FadeIn() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".fade-block"));
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("fade-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
