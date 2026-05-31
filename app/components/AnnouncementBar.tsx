"use client";

import { useState, useEffect } from "react";

const promos = [
  "✨ Free Shipping on All Orders Above ₹5,000 ✨",
  "💎 Flat ₹500 Off on Your First Purchase — Use Code: DEMO500",
  "🎁 Lifetime Exchange at 200+ Mia Stores Nationwide",
  "🌟 0% Deduction on Old Gold Exchange — Upgrade Today!",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[var(--color-maroon)] via-[var(--color-crimson)] to-[var(--color-maroon)] text-white overflow-hidden">
      <div className="flex items-center justify-center h-10 px-12">
        <p
          key={index}
          className="text-xs sm:text-sm font-medium tracking-wide animate-fade-in text-center"
        >
          {promos[index]}
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Close announcement"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
