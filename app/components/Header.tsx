"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const searchSuggestions = [
  "Anniversary",
  "Earrings",
  "Rings",
  "Gifts",
  "Coins",
  "Bangles",
  "Necklaces",
  "Pendants",
];

const navCategories = [
  { name: "Earrings", href: "#" },
  { name: "Rings", href: "#" },
  { name: "Bracelet & Bangles", href: "#" },
  { name: "Necklaces & Pendants", href: "#" },
  { name: "Mangalsutra", href: "#" },
  { name: "Silver Jewellery", href: "#" },
  { name: "Collections", href: "#" },
  { name: "Gifting", href: "#" },
  { name: "More Jewellery", href: "#" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIdx((p) => (p + 1) % searchSuggestions.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-[var(--color-crimson)]/5"
          : "bg-white"
      }`}
    >
      {/* ── Main Header Row ── */}
      <div className="section-container flex items-center justify-between h-[72px] gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group" id="header-logo">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-gradient-crimson italic">Mia</span>
            <span className="text-[10px] sm:text-xs text-[var(--color-text-muted)] block -mt-1 font-body not-italic font-normal tracking-widest">
              by TANISHQ
            </span>
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full group">
            <div className="flex items-center w-full h-11 rounded-full border-2 border-[var(--color-rose-medium)] bg-white focus-within:border-[var(--color-crimson)] transition-colors">
              <svg
                className="ml-4 mr-2 text-[var(--color-text-muted)]"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="flex-1 h-full bg-transparent outline-none text-sm font-body text-[var(--color-text)]"
                placeholder={`Shop for  ${searchSuggestions[placeholderIdx]}`}
                id="header-search"
              />
              <button className="mr-3 p-1.5 rounded-full hover:bg-[var(--color-rose)] transition-colors" aria-label="Visual search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Gold Price */}
          <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-gold)]/10 hover:bg-[var(--color-gold)]/20 transition-colors" id="gold-price-btn">
            <span className="text-xs font-semibold text-[var(--color-gold-dark)] font-body">Gold Price</span>
            <span className="w-6 h-6 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white text-xs font-bold">₹</span>
          </button>

          {/* Store Locator */}
          <button className="hidden sm:flex p-2.5 rounded-full hover:bg-[var(--color-rose)] transition-colors" aria-label="Find store">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </button>

          {/* Wishlist */}
          <button className="p-2.5 rounded-full hover:bg-[var(--color-rose)] transition-colors relative" aria-label="Wishlist" id="wishlist-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Cart */}
          <button className="p-2.5 rounded-full hover:bg-[var(--color-rose)] transition-colors relative" aria-label="Cart" id="cart-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[var(--color-crimson)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Login */}
          <button className="hidden sm:flex items-center gap-1.5 pl-2 pr-3 py-2 rounded-full hover:bg-[var(--color-rose)] transition-colors" id="login-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-sm font-medium font-body">Login</span>
          </button>
        </div>
      </div>

      {/* ── Category Navigation Bar ── */}
      <nav className="bg-gradient-to-r from-[var(--color-maroon)] via-[var(--color-crimson)] to-[var(--color-maroon)] overflow-x-auto no-scrollbar" id="category-nav">
        <div className="section-container flex items-center justify-between min-w-max lg:min-w-0">
          {navCategories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="relative px-3 lg:px-4 py-3 text-white text-xs lg:text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors hover:text-[var(--color-gold-light)] group font-body"
            >
              {cat.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
