"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    title: "Sunkissed",
    subtitle: "Jewellery that blushes pink under the sun",
    cta: "SHOP NOW",
    gradient: "from-[#FFB6C1] via-[#FF8FAB] to-[#E8526A]",
    textColor: "text-white",
    badge: "A TATA PRODUCT",
  },
  {
    id: 2,
    title: "Aurum",
    subtitle: "Go Bold With Gold.",
    cta: "SHOP NOW",
    gradient: "from-[#8B6914] via-[#A0522D] to-[#D2691E]",
    textColor: "text-white",
    badge: "A TATA PRODUCT",
  },
  {
    id: 3,
    title: "Starburst",
    subtitle: "Shine like every star in the sky",
    cta: "EXPLORE NOW",
    gradient: "from-[#4A0E8F] via-[#7B2FBE] to-[#C77DFF]",
    textColor: "text-white",
    badge: "NEW COLLECTION",
  },
  {
    id: 4,
    title: "Manifest",
    subtitle: "Wear your dreams. Own your story.",
    cta: "DISCOVER",
    gradient: "from-[#C41E3A] via-[#FF6B81] to-[#FFB3C1]",
    textColor: "text-white",
    badge: "TRENDING",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-hero py-6 sm:py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      id="hero-carousel"
    >
      <div className="relative flex items-center justify-center px-4">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Slides Container */}
        <div className="relative w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[450px] perspective-[1200px]">
          {slides.map((slide, i) => {
            const offset = i - current;
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;

            let transform = "";
            let zIndex = 10 - absOffset;
            let opacity = 1;

            if (offset === 0) {
              transform = "translateX(0) scale(1) rotateY(0deg)";
            } else if (offset === 1 || offset === -(slides.length - 1)) {
              transform = "translateX(75%) scale(0.85) rotateY(-8deg)";
              opacity = 0.5;
              zIndex = 5;
            } else if (offset === -1 || offset === slides.length - 1) {
              transform = "translateX(-75%) scale(0.85) rotateY(8deg)";
              opacity = 0.5;
              zIndex = 5;
            } else {
              transform = "translateX(0) scale(0.7)";
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={slide.id}
                className="absolute inset-0 transition-all duration-700 ease-out rounded-2xl overflow-hidden"
                style={{ transform, zIndex, opacity }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex flex-col sm:flex-row items-center justify-center p-8 sm:p-12 relative`}
                >
                  {/* Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-white/80 font-body">
                    {slide.badge}
                  </span>

                  {/* Left: Decorative jewelry silhouette placeholder */}
                  <div className="hidden sm:flex w-1/3 items-center justify-center">
                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.6">
                        <path d="M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Right: Text Content */}
                  <div className={`flex-1 flex flex-col items-center sm:items-start gap-3 ${slide.textColor}`}>
                    <p className="text-sm sm:text-base font-light tracking-wide opacity-90 font-body">
                      {slide.subtitle}
                    </p>
                    <h2
                      className="text-5xl sm:text-6xl md:text-7xl font-heading italic font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {slide.title}
                    </h2>
                    {isActive && (
                      <button className="mt-4 px-6 py-2.5 border-2 border-white text-white text-xs font-semibold tracking-widest rounded-md hover:bg-white hover:text-[var(--color-maroon)] transition-all duration-300 font-body">
                        {slide.cta}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-[var(--color-crimson)]"
                : "w-2.5 h-2.5 bg-[var(--color-crimson)]/30 hover:bg-[var(--color-crimson)]/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
