"use client";

import { useState } from "react";
import { businessData } from "@/data/business";

const giftOccasions = businessData.services.giftingOccasions;

export default function GiftingSection() {
  const [activeOccasion, setActiveOccasion] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-[var(--color-ivory)] overflow-hidden" id="gifting-section">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left: Text */}
          <div className="lg:w-1/4 flex flex-col justify-center">
            <p className="text-sm font-medium text-[var(--color-crimson)] tracking-widest uppercase font-body">
              Make
            </p>
            <h2 className="text-4xl sm:text-5xl font-heading mt-2 leading-tight">
              Gifting<br />Special
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 text-sm leading-relaxed font-body">
              It&apos;s time to remind them of your love with a gift they&apos;ll treasure forever.
            </p>
          </div>

          {/* Center: Gift Image Carousel */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[420px] bg-gradient-to-br from-[var(--color-crimson)] via-[#D63864] to-[var(--color-maroon)]">
              {/* Gift scene content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-lg sm:text-xl font-light font-body">Gifts that say</p>
                  <h3 className="text-3xl sm:text-4xl font-heading mt-2 italic">
                    {giftOccasions[activeOccasion]}
                  </h3>
                  <p className="text-sm mt-2 opacity-80 font-body">made special</p>

                  {/* Decorative gift boxes */}
                  <div className="flex items-end justify-center gap-4 mt-8">
                    <div className="w-16 h-20 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20" />
                    <div className="w-24 h-28 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
                        <rect x="3" y="8" width="18" height="13" rx="2" />
                        <path d="M12 8V21" />
                        <path d="M3 12h18" />
                        <path d="M12 8c-2-3-6-3-6 0s4 0 6 0c2-3 6-3 6 0s-4 0-6 0" />
                      </svg>
                    </div>
                    <div className="w-14 h-16 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20" />
                  </div>
                </div>
              </div>

              {/* Sparkle decorations */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-white/40 animate-pulse-soft" />
              <div className="absolute bottom-12 left-8 w-2 h-2 rounded-full bg-white/30 animate-float" />
              <div className="absolute top-20 left-16 w-2 h-2 rounded-full bg-[var(--color-gold-light)]/50 animate-float" style={{ animationDelay: "1s" }} />

              {/* Navigation Arrow */}
              <button
                onClick={() => setActiveOccasion((p) => (p + 1) % giftOccasions.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-crimson)] flex items-center justify-center hover:bg-[var(--color-crimson-dark)] transition-colors"
                aria-label="Next gift occasion"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>

            {/* Occasion Pills */}
            <div className="flex items-center gap-3 mt-4 overflow-x-auto no-scrollbar py-2">
              <button className="w-8 h-8 rounded-full border border-[var(--color-rose-medium)] flex items-center justify-center flex-shrink-0" aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              {giftOccasions.map((occasion, i) => (
                <button
                  key={occasion}
                  onClick={() => setActiveOccasion(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 font-body flex-shrink-0 ${
                    i === activeOccasion
                      ? "bg-white shadow-md text-[var(--color-text)] border border-[var(--color-rose-medium)]"
                      : "bg-transparent text-[var(--color-text-muted)] hover:bg-white/50"
                  }`}
                >
                  {occasion}
                </button>
              ))}
              <button className="w-8 h-8 rounded-full border border-[var(--color-rose-medium)] flex items-center justify-center flex-shrink-0" aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* Right: Perfect Gift CTA */}
          <div className="lg:w-1/4 flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover-lift">
              <p className="text-sm text-[var(--color-text-muted)] font-body">
                Want us to help you find the
              </p>
              <h3 className="text-3xl sm:text-4xl font-heading mt-2 leading-tight">
                Perfect<br />Gift?
              </h3>
              <button className="mt-6 w-12 h-12 rounded-full bg-[var(--color-crimson)] flex items-center justify-center hover:bg-[var(--color-crimson-dark)] transition-colors hover:scale-110 transition-transform" aria-label="Find perfect gift">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
