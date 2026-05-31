import SparkleDecor from "./SparkleDecor";
import { businessData } from "@/data/business";

const promises = businessData.services.promises;

function PromiseIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    diamond: <path d="M12 2L2 9.5L12 22L22 9.5L12 2ZM12 2L7 9.5M12 2L17 9.5M2 9.5H22" />,
    exchange: <><path d="M4 12h16M8 8l-4 4 4 4" /><path d="M20 12H4M16 16l4-4-4-4" /></>,
    return: <><path d="M3 12a9 9 0 1 0 9-9" /><path d="M3 3v6h6" /></>,
    shipping: <><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
    warranty: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
    hallmark: <><path d="M3 21h18M3 10h18M12 3l9 7H3l9-7z" /><rect x="7" y="10" width="3" height="8" /><rect x="14" y="10" width="3" height="8" /></>,
    tata: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M7 10h10M12 10v6" /></>,
    buyers: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  };
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-crimson)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {icons[type]}
    </svg>
  );
}

export default function Promises() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-rose-light)] relative overflow-hidden" id="mia-promises">
      {/* Decorative sparkles */}
      <SparkleDecor size="lg" className="absolute top-8 left-12 opacity-25" color="var(--color-crimson-light)" />
      <SparkleDecor size="md" className="absolute bottom-12 right-20 opacity-20" color="var(--color-crimson-light)" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-[var(--color-crimson)] tracking-widest uppercase font-body">
          {businessData.company.shortName}
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mt-2">
          Promises
        </h2>
      </div>

      {/* Promises Grid */}
      <div className="section-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center group hover-lift cursor-default"
            >
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: promise.color }}
              >
                <PromiseIcon type={promise.icon} />
              </div>
              <p className="text-sm font-semibold text-[var(--color-text)] font-body">
                {promise.title}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5 font-body leading-relaxed">
                {promise.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
