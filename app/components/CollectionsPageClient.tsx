"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { collections } from "@/data/collections";
import { products, formatPrice } from "@/data/products";
import { businessData } from "@/data/business";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import SparkleDecor from "./SparkleDecor";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const featuredCollections = collections.filter((collection) => collection.featured);

function CollectionCard({
  collection,
  highlight = false,
}: {
  collection: (typeof collections)[number];
  highlight?: boolean;
}) {
  const linkedProducts = products.filter((product) => product.collection === collection.name);
  const prices = linkedProducts.map((product) => product.price);
  const minPrice = prices.length ? Math.min(...prices) : null;
  const maxPrice = prices.length ? Math.max(...prices) : null;
  const priceText =
    minPrice && maxPrice && minPrice !== maxPrice
      ? `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`
      : minPrice
        ? `From ${formatPrice(minPrice)}`
        : "Curated story";

  return (
    <article
      className={`group overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(123,16,51,0.08)] hover-lift border border-white/70 ${
        highlight ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative ${highlight ? "aspect-[16/8]" : "aspect-[5/6]"}`}>
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={highlight ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          priority={highlight}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div
          className="absolute inset-0 opacity-85"
          style={{ background: collection.gradient }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 right-4 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.28em] text-white font-body uppercase">
          {collection.category}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/75 font-body">
                {collection.featured ? "Featured Story" : "Collection Story"}
              </p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-heading italic">{collection.name}</h3>
            </div>
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
              <SparkleDecor size="sm" color="white" />
            </div>
          </div>
          <p className="mt-3 text-sm sm:text-base text-white/85 font-body max-w-xl leading-relaxed">
            {collection.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-body">
            <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">{priceText}</span>
            <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
              {linkedProducts.length} pieces
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-5 sm:p-6 bg-[var(--color-ivory)]">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-text-light)] font-body">
            {collection.tagline}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)] font-body">
            {collection.featured ? "Optimized for discovery and gifting." : "A clean entry point into the assortment."}
          </p>
        </div>
        <Link
          href={`/collections?collection=${slugify(collection.name)}`}
          className="btn-outline shrink-0 px-4 py-2 text-[10px] sm:text-xs"
        >
          Explore
        </Link>
      </div>
    </article>
  );
}

export default function CollectionsPageClient() {
  const searchParams = useSearchParams();
  const initialCollection = searchParams.get("collection") ?? "all";
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      return categoryParam;
    }

    const selected = collections.find((collection) => {
      const slug = slugify(collection.name);
      return slug === initialCollection || collection.id === initialCollection;
    });

    return selected ? selected.category : "All";
  });
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["All", ...Array.from(new Set(collections.map((collection) => collection.category)))];

  const visibleCollections = collections
    .filter((collection) => selectedCategory === "All" || collection.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
      if (sortBy === "story") return a.sortOrder - b.sortOrder;
      return Number(b.featured) - Number(a.featured) || a.sortOrder - b.sortOrder;
    });

  const featuredSet = featuredCollections.slice(0, 3);

  return (
    <main className="bg-[var(--color-ivory)] overflow-hidden">
      <section className="relative isolate overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_left,rgba(216,81,108,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,168,83,0.18),transparent_30%)]" />
        <div className="section-container relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="space-y-6">
              <p className="text-sm font-medium tracking-[0.35em] uppercase text-[var(--color-crimson)] font-body">
                {businessData.collectionsPage.hero.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-heading leading-[1.05] text-[var(--color-text)]">
                {businessData.collectionsPage.hero.title}
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)] font-body leading-relaxed">
                {businessData.collectionsPage.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="#featured-collections" className="btn-primary">
                  {businessData.collectionsPage.hero.primaryCta}
                </Link>
                <Link href="/about" className="btn-outline">
                  {businessData.collectionsPage.hero.secondaryCta}
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-body tracking-[0.22em] uppercase text-[var(--color-text-muted)] backdrop-blur-sm">
                  {businessData.collectionsPage.hero.highlight}
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-body tracking-[0.22em] uppercase text-[var(--color-text-muted)] backdrop-blur-sm">
                  200+ stores nationwide
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-body tracking-[0.22em] uppercase text-[var(--color-text-muted)] backdrop-blur-sm">
                  BIS hallmarked quality
                </span>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-[0_30px_90px_rgba(123,16,51,0.12)] backdrop-blur-xl">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {featuredSet.map((collection, index) => (
                    <div
                      key={collection.id}
                      className={`overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-sm ${index === 0 ? "sm:col-span-2" : ""}`}
                    >
                      <div className={`relative ${index === 0 ? "aspect-[16/8]" : "aspect-[4/5]"}`}>
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 40vw, 90vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute inset-0 opacity-80" style={{ background: collection.gradient }} />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-[10px] tracking-[0.28em] uppercase text-white/80 font-body">
                            {collection.category}
                          </p>
                          <h3 className="mt-1 text-2xl sm:text-3xl font-heading italic">{collection.name}</h3>
                          <p className="mt-1 text-xs sm:text-sm text-white/80 font-body">{collection.tagline}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {businessData.aboutPage.stats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="rounded-[1.25rem] bg-[var(--color-ivory)] p-4 text-left">
                      <p className="text-2xl font-heading text-[var(--color-maroon)]">{stat.value}</p>
                      <p className="mt-1 text-sm font-semibold text-[var(--color-text)] font-body">{stat.label}</p>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)] font-body leading-relaxed">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-container py-16 sm:py-20" id="featured-collections">
        <Reveal>
          <SectionHeader
            eyebrow={businessData.collectionsPage.featured.eyebrow}
            title={businessData.collectionsPage.featured.title}
            description={businessData.collectionsPage.featured.body}
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredCollections.map((collection, index) => (
            <Reveal key={collection.id} delay={index * 90}>
              <CollectionCard collection={collection} highlight={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-rose py-16 sm:py-20">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow={businessData.collectionsPage.intro.eyebrow}
              title={businessData.collectionsPage.intro.title}
              description={businessData.collectionsPage.intro.body}
            />
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-[0_15px_60px_rgba(123,16,51,0.08)] backdrop-blur-xl">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-text-light)] font-body">
                    <span>{businessData.collectionsPage.filterLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 font-body ${
                          selectedCategory === category
                            ? "border-[var(--color-crimson)] bg-[var(--color-crimson)] text-white shadow-md shadow-[var(--color-crimson)]/20"
                            : "border-[var(--color-rose-medium)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-crimson)] hover:text-[var(--color-text)]"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex w-full flex-col gap-2 lg:max-w-xs">
                  <span className="text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-text-light)] font-body">
                    {businessData.collectionsPage.sortLabel}
                  </span>
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="h-11 rounded-full border border-[var(--color-rose-medium)] bg-white px-4 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-crimson)] font-body"
                  >
                    <option value="featured">Featured first</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="story">Collection order</option>
                  </select>
                </label>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleCollections.map((collection, index) => (
              <Reveal key={collection.id} delay={index * 70}>
                <CollectionCard collection={collection} />
              </Reveal>
            ))}
          </div>

          {visibleCollections.length === 0 ? (
            <Reveal className="mt-8">
              <div className="rounded-[2rem] border border-dashed border-[var(--color-rose-medium)] bg-white/85 p-8 text-center shadow-sm">
                <h3 className="text-2xl font-heading text-[var(--color-text)]">
                  {businessData.collectionsPage.emptyState.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body">
                  {businessData.collectionsPage.emptyState.body}
                </p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="btn-outline mt-6"
                >
                  {businessData.collectionsPage.emptyState.cta}
                </button>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="section-container py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-6 rounded-[2rem] bg-gradient-to-r from-[var(--color-maroon)] via-[var(--color-crimson)] to-[var(--color-maroon)] p-8 text-white lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-white/70 font-body">
                Trust and service
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-heading">
                Luxury collections backed by a nationwide service promise.
              </h3>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80 font-body leading-relaxed">
                {businessData.aboutPage.trust.body}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {businessData.aboutPage.trust.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[1.25rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-medium font-body">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}