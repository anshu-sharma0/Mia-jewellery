"use client";

import { useState, useCallback, useEffect } from "react";
import { collections } from "@/data/collections";

export default function CollectionCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % collections.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + collections.length) % collections.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 sm:py-20 bg-[var(--color-ivory)] overflow-hidden" id="shop-by-collection">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-[var(--color-crimson)] tracking-widest uppercase font-body">
          Shop by
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mt-2">
          Collection
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative px-4">
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Previous collection"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        <div className="max-w-5xl mx-auto relative h-[350px] sm:h-[440px]">
          {collections.map((col, i) => {
            const offset = ((i - current) % collections.length + collections.length) % collections.length;
            let transform = "translateX(0) scale(0.7)";
            let opacity = 0;
            let zIndex = 0;

            if (offset === 0) {
              transform = "translateX(0) scale(1)";
              opacity = 1;
              zIndex = 10;
            } else if (offset === 1) {
              transform = "translateX(70%) scale(0.82)";
              opacity = 0.45;
              zIndex = 5;
            } else if (offset === collections.length - 1) {
              transform = "translateX(-70%) scale(0.82)";
              opacity = 0.45;
              zIndex = 5;
            }

            return (
              <div
                key={col.id}
                className="absolute inset-0 transition-all duration-700 ease-out rounded-2xl overflow-hidden"
                style={{ transform, zIndex, opacity }}
              >
                <div
                  className="w-full h-full flex flex-col sm:flex-row items-center justify-center p-8 sm:p-12 relative"
                  style={{ background: col.gradient }}
                >
                  {/* Badge */}
                  <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-white/60 font-body">
                    A TATA PRODUCT
                  </span>

                  {/* Left placeholder area */}
                  <div className="hidden sm:flex w-2/5 items-center justify-center">
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5">
                        <path d="M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="flex-1 text-white text-center sm:text-left">
                    <h3
                      className="text-5xl sm:text-6xl md:text-7xl font-heading italic font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {col.name}
                    </h3>
                    <p className="text-base sm:text-lg mt-3 opacity-90 font-body font-light">
                      {col.tagline}
                    </p>
                    {offset === 0 && (
                      <button className="mt-6 px-6 py-2.5 border-2 border-white text-white text-xs font-semibold tracking-widest rounded-md hover:bg-white hover:text-[var(--color-maroon)] transition-all duration-300 font-body">
                        SHOP NOW
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Next collection"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  );
}
