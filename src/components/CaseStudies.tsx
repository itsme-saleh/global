import { useState } from "react";
import { site, isPlaceholder, type CaseStudy } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SmartImage } from "./ui/SmartImage";
import { CaseStudyModal } from "./CaseStudyModal";
import { IconArrowUpRight } from "./ui/Icons";
import { cn } from "../utils/cn";
import { asset } from "../utils/asset";

export function CaseStudies() {
  const { caseStudies } = site;
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="scroll-mt-28 bg-paper py-24 text-ink-900 sm:py-32">
      <div className="shell">
        <SectionHeading dark={false} index="06" eyebrow={caseStudies.eyebrow} title={caseStudies.title} intro={caseStudies.intro} />

        <div>
          {caseStudies.items.map((cs, i) => (
            <article
              key={cs.id}
              className={cn(
                "grid items-center gap-10 border-t border-line-light py-14 last:border-b lg:grid-cols-2 lg:gap-16",
                i === 0 && "border-t-0 pt-0"
              )}
            >
              {/* Visual */}
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <button
                  type="button"
                  onClick={() => setSelected(cs)}
                  className="sticker-soft group relative block w-full overflow-hidden rounded-xl text-left"
                  aria-label={`Open case study: ${cs.client}`}
                >
                  <SmartImage
                    src={cs.image}
                    fallbackSrc={asset(`images/case-${cs.id}.jpg`)}
                    alt={cs.imageAlt}
                    loading="lazy"
                    label={cs.industry}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink-950/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-paper backdrop-blur">
                    {cs.industry}
                  </span>
                  <span aria-hidden="true" className="absolute bottom-3 right-5 font-display text-6xl font-semibold text-paper/25">
                    {cs.index}
                  </span>
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-900 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    View Case Study
                    <IconArrowUpRight width={13} height={13} />
                  </span>
                </button>
              </Reveal>

              {/* Summary */}
              <Reveal delay={120} className={cn(i % 2 === 1 && "lg:order-1")}>
                <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.26em] text-mut-light">
                  Case {cs.index}
                  <span className="h-px w-8 bg-line-light" aria-hidden="true" />
                  {cs.timeframe}
                </p>
                <h3
                  className={cn(
                    "mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl",
                    isPlaceholder(cs.client) && "ph-dark"
                  )}
                >
                  {cs.client}
                </h3>

                {/* Headline outcome — surfaced for instant scanning */}
                <p className="mt-4 inline-flex items-center gap-2.5 bg-accent px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-ink-950">
                  <span aria-hidden="true">▲</span>
                  {cs.result}
                </p>

                <dl className="mt-7 space-y-5">
                  {[
                    { label: "Challenge", text: cs.challenge },
                    { label: "Strategy", text: cs.strategy },
                  ].map((row) => (
                    <div key={row.label} className="grid gap-1.5 sm:grid-cols-[7rem_1fr] sm:gap-5">
                      <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep sm:pt-1">{row.label}</dt>
                      <dd className="text-sm leading-[1.75] text-mut-light">{row.text}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelected(cs)}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-6 py-3.5 text-[13px] font-bold text-paper transition-colors duration-300 hover:bg-accent hover:text-ink-950"
                  >
                    View Case Study
                    <IconArrowUpRight
                      width={15}
                      height={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                  {cs.services.map((s) => (
                    <span key={s} className="rounded-full border border-line-light px-3.5 py-1.5 text-xs font-semibold text-mut-light">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>

      {selected && <CaseStudyModal study={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
