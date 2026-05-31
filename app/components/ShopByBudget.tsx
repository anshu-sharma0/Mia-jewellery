import SparkleDecor from "./SparkleDecor";

const budgetRanges = [
  { label: "Under", amount: "₹15,000", size: "small", gradient: "from-[#F5D5DC] to-[#E8A8B8]" },
  { label: "Under", amount: "₹30,000", size: "medium", gradient: "from-[#E8C9D0] to-[#D4A0AD]" },
  { label: "Under", amount: "₹60,000", size: "large", gradient: "from-[#D5C0C8] to-[#C098A5]" },
];

export default function ShopByBudget() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-rose relative overflow-hidden" id="shop-by-budget">
      {/* Decorative */}
      <SparkleDecor size="lg" className="absolute top-16 right-16 opacity-20" color="var(--color-crimson-light)" />
      <SparkleDecor size="md" className="absolute bottom-24 left-8 opacity-15" color="var(--color-crimson-light)" />

      <div className="section-container">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-[var(--color-crimson)] tracking-widest uppercase font-body">
            Shop by
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mt-2 flex items-center gap-3">
            B<span className="text-3xl sm:text-4xl md:text-5xl">udge</span>t
            <SparkleDecor size="sm" color="var(--color-crimson-light)" />
          </h2>
        </div>

        {/* Budget Tiles - Geometric Layout */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto items-end">
          {budgetRanges.map((budget, i) => {
            const heights = ["h-[250px] sm:h-[320px]", "h-[300px] sm:h-[400px]", "h-[350px] sm:h-[460px]"];
            return (
              <div
                key={budget.amount}
                className={`relative ${heights[i]} rounded-2xl overflow-hidden group cursor-pointer hover-lift`}
              >
                <div className={`w-full h-full bg-gradient-to-b ${budget.gradient} relative`}>
                  {/* Octagonal clip effect */}
                  <div className="absolute inset-3 sm:inset-4 rounded-xl bg-white/5 backdrop-blur-[2px] border border-white/10" style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)" }}>
                    {/* Placeholder jewelry silhouette */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" className="group-hover:opacity-50 transition-opacity">
                        <path d="M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <p className="text-sm sm:text-base font-light font-body">{budget.label}</p>
                    <p className="text-2xl sm:text-4xl md:text-5xl font-heading mt-1 italic">{budget.amount}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--color-maroon)]/0 group-hover:bg-[var(--color-maroon)]/10 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
