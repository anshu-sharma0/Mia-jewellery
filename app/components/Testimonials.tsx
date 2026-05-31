"use client";

import { useRef } from "react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-rose overflow-hidden" id="testimonials">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-[var(--color-crimson)] tracking-widest uppercase font-body">Our</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mt-2">Testimonials</h2>
      </div>

      {/* Cards Carousel */}
      <div className="relative px-4">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar px-8 sm:px-16 py-4 snap-x snap-mandatory"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl p-6 shadow-sm hover-lift snap-center"
            >
              {/* Quote Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-crimson-light)" opacity="0.5">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>

              {/* Name & Date */}
              <div className="mt-4">
                <p className="font-semibold text-[var(--color-text)] font-body text-base">{t.name}</p>
                <p className="text-xs text-[var(--color-text-light)] font-body mt-0.5">{t.date}</p>
              </div>

              {/* Review Text */}
              <p className="mt-4 text-sm text-[var(--color-text-muted)] font-body leading-relaxed line-clamp-5">
                {t.text}
              </p>

              {/* Bottom Quote */}
              <div className="flex justify-end mt-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-crimson-light)" opacity="0.3" transform="rotate(180)">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-10 hidden sm:flex"
          aria-label="Scroll left"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-10 hidden sm:flex"
          aria-label="Scroll right"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  );
}
