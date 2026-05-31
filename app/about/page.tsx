import type { Metadata } from "next";
import Link from "next/link";
import { businessData } from "@/data/business";
import { testimonials } from "@/data/testimonials";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export const metadata: Metadata = {
  title: `${businessData.company.name} | About`,
  description: businessData.aboutPage.hero.subtitle,
};

export default function AboutPage() {
  const page = businessData.aboutPage;
  const trustTestimonial = testimonials[0];

  return (
    <main className="bg-[var(--color-ivory)] overflow-hidden">
      <section className="relative isolate overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(216,81,108,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(212,168,83,0.18),transparent_30%)]" />
        <div className="section-container relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal className="space-y-6">
              <p className="text-sm font-medium tracking-[0.35em] uppercase text-[var(--color-crimson)] font-body">
                {page.hero.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-heading leading-[1.05] text-[var(--color-text)]">
                {page.hero.title}
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)] font-body leading-relaxed">
                {page.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/collections" className="btn-primary">
                  {page.hero.primaryCta}
                </Link>
                <Link href="/#store-locator" className="btn-outline">
                  {page.hero.secondaryCta}
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-body tracking-[0.22em] uppercase text-[var(--color-text-muted)] backdrop-blur-sm">
                  {page.hero.highlight}
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-body tracking-[0.22em] uppercase text-[var(--color-text-muted)] backdrop-blur-sm">
                  {businessData.company.parentCompany}
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-body tracking-[0.22em] uppercase text-[var(--color-text-muted)] backdrop-blur-sm">
                  200+ stores nationwide
                </span>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_90px_rgba(123,16,51,0.12)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`rounded-[1.5rem] p-5 ${index === 0 ? "sm:col-span-2 bg-gradient-to-br from-[var(--color-crimson)] to-[var(--color-maroon)] text-white" : "bg-[var(--color-ivory)]"}`}
                    >
                      <p className={`text-3xl font-heading ${index === 0 ? "text-white" : "text-[var(--color-maroon)]"}`}>
                        {stat.value}
                      </p>
                      <p className={`mt-2 text-sm font-semibold font-body ${index === 0 ? "text-white" : "text-[var(--color-text)]"}`}>
                        {stat.label}
                      </p>
                      <p className={`mt-2 text-xs leading-relaxed font-body ${index === 0 ? "text-white/80" : "text-[var(--color-text-muted)]"}`}>
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow={page.story.eyebrow}
              title={page.story.title}
              description={page.story.body}
            />
            <div className="mt-8 space-y-4">
              {page.story.bulletPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-[1.5rem] bg-white p-4 shadow-sm border border-white/70">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-crimson)] shrink-0" />
                  <p className="text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3 rounded-[2rem] bg-gradient-to-r from-[var(--color-maroon)] via-[var(--color-crimson)] to-[var(--color-maroon)] p-6 text-white shadow-[0_20px_60px_rgba(123,16,51,0.18)]">
                <p className="text-sm tracking-[0.3em] uppercase text-white/70 font-body">Brand position</p>
                <p className="mt-3 text-2xl sm:text-3xl font-heading leading-tight">
                  {page.missionVision.promiseTitle}
                </p>
                <p className="mt-3 text-sm sm:text-base text-white/80 font-body leading-relaxed">
                  {page.missionVision.promiseBody}
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm border border-white/70">
                <p className="text-sm tracking-[0.25em] uppercase text-[var(--color-text-light)] font-body">{page.missionVision.missionTitle}</p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{page.missionVision.missionBody}</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm border border-white/70">
                <p className="text-sm tracking-[0.25em] uppercase text-[var(--color-text-light)] font-body">{page.missionVision.visionTitle}</p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{page.missionVision.visionBody}</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm border border-white/70">
                <p className="text-sm tracking-[0.25em] uppercase text-[var(--color-text-light)] font-body">Trust</p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">
                  Backed by TATA product credibility, a premium store network, and service-led reassurance.
                </p>
              </div>
            </div>
          </Reveal>
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

      <section className="section-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Company Values"
              title="The principles behind every collection and every interaction."
              description="These values shape how we design, present, and support the brand across channels."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.values.map((value, index) => (
                <div key={value.title} className={`rounded-[1.5rem] p-6 shadow-sm border ${index % 2 === 0 ? "bg-white border-white/80" : "bg-[var(--color-ivory)] border-[var(--color-rose-medium)]"}`}>
                  <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-light)] font-body">0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-heading text-[var(--color-text)]">{value.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
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

      <section className="section-container py-16 sm:py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Timeline"
            title="A journey built around trust, not just growth."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {page.journey.map((step, index) => (
            <Reveal key={step.label} delay={index * 80}>
              <div className="relative h-full rounded-[1.5rem] bg-white p-6 shadow-sm border border-white/80">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-crimson)] font-body">{step.label}</p>
                  <span className="h-8 w-8 rounded-full bg-[var(--color-rose-light)] flex items-center justify-center text-[var(--color-crimson)] font-semibold">{index + 1}</span>
                </div>
                <h3 className="mt-5 text-2xl font-heading text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] font-body leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
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

      <section className="section-container py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-6 rounded-[2rem] bg-white p-6 sm:p-8 shadow-[0_16px_60px_rgba(123,16,51,0.1)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center border border-white/80">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-crimson)] font-body">
                {page.trust.eyebrow}
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-heading text-[var(--color-text)]">
                {page.trust.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[var(--color-text-muted)] font-body leading-relaxed">
                {page.trust.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {page.trust.highlights.map((highlight) => (
                  <span key={highlight} className="rounded-full bg-[var(--color-rose-light)] px-4 py-2 text-xs tracking-[0.22em] uppercase text-[var(--color-text)] font-body">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-gradient-to-br from-[var(--color-maroon)] via-[var(--color-crimson)] to-[var(--color-maroon)] p-6 text-white shadow-[0_25px_70px_rgba(123,16,51,0.2)]">
              <p className="text-sm tracking-[0.3em] uppercase text-white/70 font-body">Customer voice</p>
              <p className="mt-4 text-2xl font-heading leading-tight">
                “{trustTestimonial.text}”
              </p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                <div>
                  <p className="text-sm font-semibold font-body">{trustTestimonial.name}</p>
                  <p className="text-xs text-white/70 font-body">{trustTestimonial.date}</p>
                </div>
                <Link href="/collections" className="btn-gold text-xs px-5 py-2.5">
                  Browse collections
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-gradient-to-r from-[var(--color-maroon)] via-[var(--color-crimson)] to-[var(--color-maroon)] py-16 sm:py-20 text-white">
        <div className="section-container">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-white/70 font-body">Call to action</p>
                <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading leading-tight">
                  {page.cta.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80 font-body leading-relaxed">
                  {page.cta.body}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link href="/collections" className="btn-gold">
                  {page.cta.primaryCta}
                </Link>
                <Link href="/#store-locator" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--color-maroon)]">
                  {page.cta.secondaryCta}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}