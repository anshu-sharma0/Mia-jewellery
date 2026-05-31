"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { businessData } from "@/data/business";
const navCategories = businessData.services.navCategories;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "glass shadow-lg"
          : "bg-white"
        }`}
    >
      {/* ── Main Header Row ── */}
      <div className="section-container flex items-center justify-between h-18 gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0 group" id="header-logo">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-gradient-crimson italic">{businessData.company.logo.primaryText}</span>
            <span className="text-[10px] sm:text-xs text-text-muted block -mt-1 font-body not-italic font-normal tracking-widest">
              {businessData.company.logo.secondaryText}
            </span>
          </h1>
        </Link>

        {/* ── Category Navigation Bar ── */}
        <div className="section-container flex items-center justify-between min-w-max lg:min-w-0">
          {navCategories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="relative px-3 lg:px-6 py-3 text-xs lg:text-lg font-medium tracking-wide whitespace-nowrap transition-colors hover:text-[var(--primary-font)] group font-body"
            >
              {cat.title}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--primary-font)] transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>
          ))}
        </div>
      </div>

    </header>
  );
}
