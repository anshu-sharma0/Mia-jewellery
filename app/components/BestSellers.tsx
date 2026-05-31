"use client";

import { useState, useCallback, useEffect } from "react";
import { products, formatPrice } from "@/data/products";
import SparkleDecor from "./SparkleDecor";

const bestSellers = products.filter((p) => p.badge === "BESTSELLER" || p.price > 60000).slice(0, 6);

const gradients = [
  "from-[#C9B88C] to-[#8B7355]",
  "from-[#A8B4D0] to-[#6B7BA3]",
  "from-[#D4A9B0] to-[#9B6B73]",
  "from-[#B8C9A3] to-[#7B9A5E]",
  "from-[#C9A8D4] to-[#8B6B9B]",
  "from-[#A8C9D4] to-[#6B8B9B]",
];

export default function BestSellers() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % bestSellers.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + bestSellers.length) % bestSellers.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 sm:py-20 bg-gradient-rose relative overflow-hidden" id="best-sellers">
      {/* Decorative */}
      <SparkleDecor size="lg" className="absolute top-10 left-10 opacity-25" />
      <SparkleDecor size="md" className="absolute top-20 left-32 opacity-15" color="var(--color-gold)" />
      <SparkleDecor size="sm" className="absolute bottom-20 right-20 opacity-20" />

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-[var(--color-crimson)] tracking-widest uppercase font-body">Our</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mt-2 flex items-center justify-center gap-3">
          <SparkleDecor size="sm" color="var(--color-crimson-light)" />
          Best Sellers
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative px-4">
        <button
          onClick={prev}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-6xl mx-auto overflow-hidden">
          {[-1, 0, 1].map((offset) => {
            const idx = ((current + offset) % bestSellers.length + bestSellers.length) % bestSellers.length;
            const product = bestSellers[idx];
            const isCenter = offset === 0;

            return (
              <div
                key={`${product.id}-${offset}`}
                className={`flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  isCenter
                    ? "w-[280px] sm:w-[340px] h-[380px] sm:h-[460px] opacity-100 scale-100 shadow-2xl"
                    : "w-[240px] sm:w-[280px] h-[340px] sm:h-[400px] opacity-50 scale-90 shadow-lg hidden sm:block"
                }`}
              >
                <div className={`w-full h-full bg-gradient-to-b ${gradients[idx % gradients.length]} relative flex flex-col justify-end p-6`}>
                  {/* Jewelry placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3">
                      <path d="M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z" />
                    </svg>
                  </div>

                  {/* Gradient overlay for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Text content */}
                  <div className="relative z-10 text-white">
                    <p className="text-sm font-body font-light truncate">{product.name}</p>
                    <p className="text-3xl sm:text-4xl font-heading mt-1">{formatPrice(product.price)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  );
}
