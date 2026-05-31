import { businessData } from "@/data/business";

export default function StoreLocator() {
  return (
    <section className="relative overflow-hidden" id="store-locator">
      <div className="section-container py-4">
        <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[450px] bg-gradient-to-r from-[#2C3E50] via-[#34495E] to-[#2C3E50]">
          {/* Store image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2 opacity-15 w-full h-full p-8">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="rounded-lg bg-white/10" />
              ))}
            </div>
          </div>

          {/* Glass storefront representation */}
          <div className="absolute left-8 top-8 bottom-8 w-1/2 sm:w-2/5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="text-center text-white/20">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M3 21h18M3 10h18M5 6l7-4 7 4M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
              </svg>
              <p className="text-xs mt-2 font-body tracking-wider">{businessData.storeLocator.storeLabel}</p>
            </div>
          </div>

          {/* Text Overlay */}
          <div className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 text-white max-w-sm">
            <p className="text-sm sm:text-base font-light tracking-wide font-body opacity-80">
              {businessData.storeLocator.subtitleTop}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mt-2 font-bold">
              {businessData.storeLocator.title}
            </h2>
            <p className="text-sm sm:text-base font-light mt-3 opacity-80 font-body">
              {businessData.storeLocator.subtitleBottom}
            </p>
            <button className="mt-6 px-8 py-3 rounded-full bg-[var(--color-maroon)] text-white font-semibold text-sm tracking-wider hover:bg-[var(--color-maroon-dark)] transition-colors font-body hover:scale-105 transition-transform">
              {businessData.storeLocator.cta}
            </button>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
