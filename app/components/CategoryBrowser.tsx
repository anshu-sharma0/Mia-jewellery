"use client";

import { useState } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import SparkleDecor from "./SparkleDecor";

export default function CategoryBrowser() {
  const [activeCategory, setActiveCategory] = useState("Earrings");

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  ).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-gradient-rose relative overflow-hidden" id="shop-by-category">
      {/* Decorative sparkles */}
      <SparkleDecor size="lg" className="absolute top-12 left-8 opacity-30" color="var(--color-crimson-light)" />
      <SparkleDecor size="sm" className="absolute top-24 right-16 opacity-20" color="var(--color-gold)" />

      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-[var(--color-crimson)] tracking-widest uppercase font-body">
          Shop By
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mt-2">
          Category
        </h2>
      </div>

      {/* Category Circles Carousel */}
      <div className="section-container">
        <div className="flex items-center gap-2 mb-4">
          <button className="w-10 h-10 rounded-full border border-[var(--color-rose-medium)] flex items-center justify-center hover:bg-white transition-colors" aria-label="Previous categories">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="flex-1 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name.replace(" Jewellery", "")
                    .split(" ").map(w => w === "Diamond" ? "Earrings" : w).join("")
                    === "Earrings" && cat.name === "Diamond Jewellery" ? "Earrings" : 
                    cat.name === "Diamond Jewellery" ? "Earrings" :
                    cat.name === "Coins" ? "Earrings" :
                    cat.name === "Mangalsutra" ? "Necklaces" :
                    cat.name
                  )}
                  className="flex flex-col items-center gap-2 group flex-shrink-0"
                >
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 transition-all duration-300 flex items-center justify-center ${
                      activeCategory === cat.name || 
                      (cat.name === "Diamond Jewellery" && activeCategory === "Earrings") ||
                      (cat.name === "Mangalsutra" && activeCategory === "Necklaces")
                        ? "border-[var(--color-crimson)] shadow-lg shadow-[var(--color-crimson)]/20 scale-110"
                        : "border-transparent group-hover:border-[var(--color-rose-medium)] group-hover:scale-105"
                    }`}
                    style={{ background: cat.color }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="1">
                      <path d="M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z" />
                    </svg>
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-medium font-body transition-colors whitespace-nowrap ${
                      activeCategory === cat.name
                        ? "text-[var(--color-text)]"
                        : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    {cat.name}
                  </span>
                  {/* Active underline */}
                  <div
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      activeCategory === cat.name
                        ? "w-full bg-[var(--color-text)]"
                        : "w-0 bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <button className="w-10 h-10 rounded-full border border-[var(--color-rose-medium)] flex items-center justify-center hover:bg-white transition-colors" aria-label="Next categories">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-10">
          <button className="btn-outline">
            Show All {activeCategory}
          </button>
        </div>
      </div>
    </section>
  );
}
