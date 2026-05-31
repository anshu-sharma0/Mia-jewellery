"use client";

import Link from "next/link";
import { useState } from "react";
import SectionHeader from "@/app/components/SectionHeader";
import CollectionCarousel from "@/app/components/CollectionCarousel";
import ProductCard from "@/app/components/ProductCard";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { businessData } from "@/data/business";

export default function CollectionsPageClient() {
  const [filter, setFilter] = useState<string>("All");

  const featuredCollections = collections.filter((c) => c.featured).slice(0, 4);
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-text)]">

      {/* Featured products */}
      <section id="featured" className="max-w-7xl mx-auto px-6 py-12">
        <SectionHeader eyebrow={businessData.collectionsPage.featured.eyebrow} title={businessData.collectionsPage.featured.title} description={businessData.collectionsPage.featured.body} align="center" />

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <label className="text-sm text-[var(--color-text-muted)] font-body">Filter:</label>
            <select className="border rounded-md p-2 text-sm" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>All</option>
              {collections.map((c) => (
                <option key={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">Showing {featuredProducts.length} products</div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.filter((p) => filter === "All" || p.collection === filter).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 bg-[var(--color-maroon)] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-heading">Love what you see?</h3>
          <p className="mt-3 text-sm sm:text-base text-white/90">Visit our stores or shop online. Free shipping on orders over ₹5,000.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="/products" className="px-6 py-3 rounded-full bg-white text-[var(--color-maroon)] font-semibold">Shop All Products</Link>
            <Link href="/store-locator" className="px-6 py-3 rounded-full border border-white/30 text-white">Find a Store</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
