import { site } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Counter } from "./ui/Counter";
import { IconSpark } from "./ui/Icons";
import { cn } from "../utils/cn";

export function Results() {
  const { results } = site;
  return (
    <section id="results" className="relative scroll-mt-28 overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.05]" />
      <div aria-hidden="true" className="absolute right-[-10%] top-[-20%] h-[28rem] w-[28rem] rounded-full bg-accent/[0.09] blur-[130px]" />

      <div className="shell relative">
        <SectionHeading dark index="05" eyebrow={results.eyebrow} title={results.title} intro={results.intro} />

        {/* Report meta — like a real performance export */}
        <Reveal>
          <div className="mb-4 flex flex-col gap-2 border border-line-dark bg-ink-900/70 px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-mut-dark sm:flex-row sm:items-center sm:justify-between">
            <span>REPORT: PERFORMANCE SUMMARY</span>
            <span>PERIOD: 2019 – PRESENT (6+ YEARS)</span>
            <span className="text-accent">SOURCE: VERIFIED PLATFORM METRICS</span>
          </div>
        </Reveal>

        {/* Verified data badge */}
        <Reveal>
          <p className="mb-10 flex max-w-3xl items-start gap-3 rounded-lg border border-accent/40 bg-accent/[0.06] px-5 py-4 font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-accent">
            <IconSpark width={15} height={15} className="mt-0.5 shrink-0" />
            <span>
              VERIFIED CAMPAIGN BENCHMARKS — 250+ active campaigns and $600K+ ad spend managed across Meta, Google &amp; organic search since 2019.
            </span>
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-xl border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
          {results.metrics.map((m, i) => {
            // The strongest verified figure gets the featured cell
            const featured = m.label === "Average ROAS";
            return (
              <Reveal
                key={m.label}
                delay={i * 70}
                className={cn("h-full", featured && "max-sm:order-first sm:col-span-2 lg:col-span-1 lg:row-span-2")}
              >
                <div
                  className={cn(
                    "group relative flex h-full flex-col transition-colors duration-500",
                    featured ? "bg-accent p-8 text-ink-950 sm:p-10" : "bg-ink-900 p-8 hover:bg-ink-800 sm:p-9"
                  )}
                >
                  <p
                    className={cn(
                      "font-display font-semibold tracking-tight",
                      featured ? "text-[4rem] leading-none sm:text-[5.5rem]" : "text-4xl sm:text-[2.6rem]"
                    )}
                  >
                    {typeof m.value === "number" ? (
                      <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
                    ) : (
                      <span className={featured ? "" : "ph"}>{m.placeholder}</span>
                    )}
                  </p>
                  <p
                    className={cn(
                      "mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em]",
                      featured ? "text-ink-950/70" : "text-paper/85"
                    )}
                  >
                    {m.label}
                  </p>
                  <p className={cn("mt-1.5 text-[13px]", featured ? "text-ink-950/70" : "text-mut-dark")}>{m.note}</p>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-5 block h-px w-8 transition-all duration-500 group-hover:w-16",
                      featured ? "bg-ink-950/40" : "bg-accent"
                    )}
                  />
                  {featured && (
                    <span className="mt-auto pt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-950/60">
                      ▲ Benchmarked across managed accounts
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
