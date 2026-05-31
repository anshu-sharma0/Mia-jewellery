import type { Metadata } from "next";
import { businessData } from "@/data/business";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export const metadata: Metadata = {
  title: `${businessData.company.name} | About`,
  description: businessData.aboutPage.hero.subtitle,
};

export default function AboutPage() {
  const page = businessData.aboutPage;
  return (
    <main className="bg-[var(--color-ivory)] overflow-hidden">

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
                <div className="h-full rounded-[1.75rem] bg-white p-6 shadow-sm border border-white/80 hover-lift">
                  <div className="flex items-center justify-between">
                    <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-light)] font-body">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="h-10 w-10 rounded-full bg-[var(--color-rose-light)] flex items-center justify-center text-[var(--color-crimson)] font-bold">*</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-heading text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{item.description}</p>
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
              eyebrow="Statistics"
              title="Signals that reinforce the brand's scale and trust."
              description="These figures surface the proof points customers usually look for before making a premium purchase."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {page.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <div className="rounded-[1.75rem] bg-white p-6 shadow-sm border border-white/80">
                  <p className="text-4xl font-heading text-gradient-crimson">{stat.value}</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--color-text)] font-body">{stat.label}</p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{stat.detail}</p>
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
              title="The collective that shapes the Mia experience."
              description="A compact view of the teams that influence design, quality, and customer support across the brand."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.team.map((member, index) => (
              <Reveal key={member.name} delay={index * 70}>
                <div className="rounded-[1.75rem] bg-white p-6 shadow-sm border border-white/80 hover-lift">
                  <div className="flex items-center justify-between gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[var(--color-crimson)] to-[var(--color-gold)]" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-light)] font-body">Team</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-heading text-[var(--color-text)]">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-crimson)] font-body">{member.role}</p>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{member.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}