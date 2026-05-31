import type { Metadata } from "next";
import Link from "next/link";
import { businessData } from "@/data/business";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export const metadata: Metadata = {
  title: `${businessData.company.name} | About`,
  description: businessData.aboutPage.hero.subtitle,
};

export default function AboutPage() {
  const page = businessData.aboutPage;
  const storeLatitude = businessData.storeLocator.latitude;
  const storeLongitude = businessData.storeLocator.longitude;
  const mapSrc = `https://www.google.com/maps?q=${storeLatitude},${storeLongitude}&z=15&output=embed`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${storeLatitude},${storeLongitude}`;

  return (
    <main className="overflow-hidden bg-ivory text-text-primary">

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <div className="rounded-4xl border border-white/80 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeader
                  eyebrow="Our Story"
                  title="Built for women who want jewellery that works every day."
                  description={`${businessData.company.name} balances polished design, responsible craftsmanship, and the trust customers expect from a heritage-led brand.`}
                  align="left"
                />
                <ul className="mt-6 space-y-3">
                  {[
                    "Fine jewellery crafted for everyday wear and meaningful gifting.",
                    "Backed by Tanishq's service network and Tata's long-term trust.",
                    "Designed around modern silhouettes, soft colour stories, and timeless appeal.",
                  ].map((point) => (
                    <li key={point} className="flex gap-3 rounded-2xl bg-ivory px-4 py-3 text-sm leading-relaxed text-text-muted font-body">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-crimson" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-4xl border border-white/80 bg-[linear-gradient(180deg,#fff_0%,#fff7f2_100%)] p-6 shadow-sm">
                  <p className="text-sm font-medium tracking-[0.3em] uppercase text-crimson font-body">Mission</p>
                  <h3 className="mt-4 text-2xl font-heading text-text-primary">Accessible premium, without losing the luxury feel.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted font-body">To make premium fine jewellery wearable, reassuring, and confidence-building across everyday milestones.</p>
                </div>
              </Reveal>
              <Reveal delay={70}>
                <div className="h-full rounded-4xl border border-white/80 bg-[linear-gradient(180deg,#fff_0%,#f9f2ff_100%)] p-6 shadow-sm">
                  <p className="text-sm font-medium tracking-[0.3em] uppercase text-crimson font-body">Vision</p>
                  <h3 className="mt-4 text-2xl font-heading text-text-primary">The brand people choose for modern luxury they can trust.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted font-body">To be the destination for contemporary jewellery that feels premium, calm, and enduring.</p>
                </div>
              </Reveal>
              <Reveal delay={140} className="sm:col-span-2">
                <div className="rounded-4xl bg-linear-to-br from-crimson via-[#b73f58] to-gold p-6 text-white shadow-lg sm:p-8">
                  <p className="text-sm font-medium tracking-[0.3em] uppercase text-white/70 font-body">Brand Promise</p>
                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <h3 className="text-2xl leading-tight font-heading sm:text-3xl">Premium design, thoughtful craftsmanship, and a buying experience that stays calm and clear.</h3>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-2xl bg-white/14 p-4 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-body">Service</p>
                        <p className="mt-2 text-sm font-semibold font-body">Transparent support</p>
                      </div>
                      <div className="rounded-2xl bg-white/14 p-4 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-body">Craft</p>
                        <p className="mt-2 text-sm font-semibold font-body">Precise finishing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-rose py-16 sm:py-20">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="A premium brand experience that feels effortless to trust."
              description="Every touchpoint is designed to lower friction, highlight value, and make premium jewellery feel approachable."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-xs tracking-[0.3em] uppercase text-text-light font-body">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-light font-bold text-crimson">
                      *
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-heading text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted font-body">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="Statistics"
              title="Signals that reinforce the brand's scale and trust."
              description="These figures surface the proof points customers usually look for before making a premium purchase."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {page.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <div className="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-sm">
                  <p className="text-4xl font-heading text-gradient-crimson">{stat.value}</p>
                  <p className="mt-3 text-lg font-semibold text-text-primary font-body">{stat.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted font-body">{stat.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-rose py-16 sm:py-20">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="Team"
              title="The collective that shapes the experience."
              description="A compact view of the teams that influence design, quality, and customer support across the brand."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.team.map((member, index) => (
              <Reveal key={member.name} delay={index * 70}>
                <div className="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="h-16 w-16 rounded-full bg-linear-to-br from-crimson to-gold" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-text-light font-body">Team</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-heading text-text-primary">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-crimson font-body">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted font-body">{member.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="location-map" className="py-16 sm:py-20">
        <div className="section-container">
          <Reveal>
            <SectionHeader
              eyebrow="Store Locator"
              title={`Find the ${businessData.company.name} store on the map.`}
              description="The embedded map is driven from business data so the location can stay centralized and easy to update."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <div className="overflow-hidden rounded-4xl border border-white/80 bg-white p-4 shadow-sm">
                <div className="aspect-16/10 overflow-hidden rounded-3xl bg-ivory">
                  <iframe
                    title={`${businessData.company.name} store location map`}
                    src={mapSrc}
                    loading="lazy"
                    className="h-full w-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-4xl border border-white/80 bg-white p-6 shadow-sm sm:p-8">
                  <p className="text-sm font-medium tracking-[0.3em] uppercase text-crimson font-body">
                  Location Details
                </p>
                <h3 className="mt-4 text-3xl font-heading text-text-primary">
                  {businessData.address.line1}, {businessData.address.line2}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted font-body">
                  {businessData.storeLocator.subtitleTop} {businessData.storeLocator.subtitleBottom.toLowerCase()}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-ivory p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-text-light font-body">Latitude</p>
                    <p className="mt-2 text-sm font-semibold text-text-primary font-body">{storeLatitude.toFixed(4)}</p>
                  </div>
                  <div className="rounded-2xl bg-ivory p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-text-light font-body">Longitude</p>
                    <p className="mt-2 text-sm font-semibold text-text-primary font-body">{storeLongitude.toFixed(4)}</p>
                  </div>
                </div>

                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  {businessData.storeLocator.cta}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}