import { Product, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden hover-lift shadow-sm hover:shadow-xl transition-all duration-300" id={`product-${product.id}`}>
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[var(--color-rose-light)] via-[var(--color-lavender)] to-[var(--color-rose)]">
        {product.badge && (
          <span className={product.badge === "NEW ARRIVAL" ? "badge-new" : "badge-bestseller"}>
            {product.badge} ✦
          </span>
        )}

        {/* Placeholder jewelry icon for image */}
        <div className="w-full h-full flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" className="opacity-40 group-hover:opacity-60 transition-opacity group-hover:scale-110 transition-transform duration-500">
            <path d="M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z" />
          </svg>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-[var(--color-maroon)]/0 group-hover:bg-[var(--color-maroon)]/10 transition-colors duration-300 flex items-end justify-center pb-4">
          <button className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110" aria-label="Quick view">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
        </div>

        {/* Image dots indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          <span className="w-5 h-1 rounded-full bg-white" />
          <span className="w-1 h-1 rounded-full bg-white/50" />
          <span className="w-1 h-1 rounded-full bg-white/50" />
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-lg font-bold text-[var(--color-text)] font-body">
          {formatPrice(product.price)}
        </p>
        <p className="text-sm text-[var(--color-text-muted)] mt-1 font-body truncate">
          {product.name}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-4">
          <button className="flex-1 h-10 rounded-full border-2 border-[var(--color-crimson)] text-[var(--color-crimson)] text-sm font-semibold hover:bg-[var(--color-crimson)] hover:text-white transition-all duration-300 font-body">
            Add to Bag
          </button>
          <button className="w-10 h-10 rounded-full border-2 border-[var(--color-rose-medium)] flex items-center justify-center hover:border-[var(--color-crimson)] hover:text-[var(--color-crimson)] transition-colors" aria-label="Add to wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
