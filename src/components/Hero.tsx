import { site } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { Reveal } from "./ui/Reveal";
import { Magnetic } from "./ui/Magnetic";
import { SmartImage } from "./ui/SmartImage";
import { IconArrowDown, IconArrowUpRight, IconTrendDown, IconTrendUp } from "./ui/Icons";
import { cn } from "../utils/cn";
import { asset } from "../utils/asset";

function MetricChip({
  label,
  value,
  trend,
  className,
  delay,
}: {
  label: string;
  value: string;
  trend: "up" | "down";
  className: string;
  delay: string;
}) {
  return (
    <div
      className={cn(
        "sticker-dark absolute z-10 hidden animate-float flex-col gap-1 bg-ink-900 px-4 py-3 font-mono sm:flex",
        className
      )}
      style={{ animationDelay: delay, animationDuration: `${6.5 + delay.length}s` }}
    >
      <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-mut-dark">
        {trend === "up" ? (
          <IconTrendUp width={11} height={11} className="text-accent" />
        ) : (
          <IconTrendDown width={11} height={11} className="text-accent" />
        )}
        {label}
      </span>
      <span className="text-sm font-bold text-accent">{value}</span>
    </div>
  );
}

/** Corner crop-marks for the "creative asset" framing */
function CropMarks() {
  const c = "absolute h-4 w-4 border-accent/70";
  return (
    <>
      <span aria-hidden="true" className={cn(c, "-left-2.5 -top-2.5 border-l-2 border-t-2")} />
      <span aria-hidden="true" className={cn(c, "-right-2.5 -top-2.5 border-r-2 border-t-2")} />
      <span aria-hidden="true" className={cn(c, "-bottom-2.5 -left-2.5 border-b-2 border-l-2")} />
      <span aria-hidden="true" className={cn(c, "-bottom-2.5 -right-2.5 border-b-2 border-r-2")} />
    </>
  );
}

export function Hero() {
  const { open } = useBooking();
  const { hero, identity } = site;
  const subParts = hero.sub.split(identity.name);

  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 lg:min-h-screen">
      {/* Layered ambient background: ledger grid + gold glow + grain */}
      <div
        aria-hidden="true"
        className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />
      <div aria-hidden="true" className="absolute -top-48 right-[-12%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.1] blur-[140px]" />
      <div aria-hidden="true" className="absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent/[0.05] blur-[120px]" />
      <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.05]" />

      <div className="shell relative pb-24 pt-36 sm:pt-40 lg:pb-28 lg:pt-44">
        {/* ── Campaign brief bar ── */}
        <Reveal>
          <div className="grid grid-cols-2 divide-x divide-line-dark border border-line-dark bg-ink-900/60 font-mono lg:grid-cols-4">
            {[
              { k: "Brief", v: "BRF-2026-001" },
              { k: "Client", v: "YOUR BRAND" },
              { k: "Objective", v: "MEASURABLE GROWTH" },
            ].map((item) => (
              <div key={item.k} className="px-4 py-3 max-lg:[&:nth-child(3)]:border-t max-lg:[&:nth-child(3)]:border-line-dark">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-paper/40">{item.k}</p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.12em] text-paper">{item.v}</p>
              </div>
            ))}
            <div className="px-4 py-3 max-lg:border-t max-lg:border-line-dark">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-paper/40">Status</p>
              <p className="mt-1 flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                LIVE
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* ── Left: message ── */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mut-dark">
                <span className="bg-accent px-2 py-1 text-[10px] text-ink-950">STAGE 01</span>
                ATTENTION · {hero.eyebrow}
              </p>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(2.7rem,6.4vw,5rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-paper">
              <Reveal as="span" delay={80} className="block">
                {hero.headlineA}
              </Reveal>
              <Reveal as="span" delay={180} className="mt-2 block">
                <span className="mark-lime inline-block -rotate-1">{hero.headlineB}</span>
              </Reveal>
            </h1>

            <Reveal delay={280}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-mut-dark sm:text-lg">
                {subParts.map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < subParts.length - 1 && <span className="font-semibold text-paper">{identity.name}</span>}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => open()}
                    className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink-950 shadow-[6px_6px_0_rgba(3,6,4,0.7)] transition-all duration-300 hover:shadow-[3px_3px_0_rgba(3,6,4,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {hero.primaryCta}
                    <IconArrowUpRight
                      width={16}
                      height={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-full border border-line-dark px-8 py-4 text-sm font-bold text-paper transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  {hero.secondaryCta}
                  <IconArrowDown width={15} height={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={470}>
              <p className="mt-8 flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.14em] text-mut-dark">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {hero.trust.toUpperCase()}.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
                {hero.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-mut-dark/80">
                    <span className="text-accent" aria-hidden="true">
                      ▲
                    </span>
                    {pillar}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ── Right: portrait as "creative asset 01" ── */}
          <div className="lg:col-span-5">
            <Reveal delay={250} y={36}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative">
                  <CropMarks />
                  <figure className="sticker-paper group relative overflow-hidden bg-ink-800">
                    <SmartImage
                      src={identity.portrait}
                      fallbackSrc={asset("images/portrait.jpg")}
                      alt={identity.portraitAlt}
                      fetchPriority="high"
                      label="ABU SALEH"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                    />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950/85 to-transparent" />
                    <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-paper/80">
                      <span>ASSET_01 / PORTRAIT.RAW</span>
                      <span className="text-accent">SUBJECT: {identity.location}</span>
                    </figcaption>
                  </figure>
                </div>

                {/* Floating KPI readouts */}
                <MetricChip {...hero.chips[0]} className="-left-8 top-12" delay="0s" />
                <MetricChip {...hero.chips[1]} className="-right-6 top-[34%]" delay="1.4s" />
                <MetricChip {...hero.chips[2]} className="-left-10 bottom-[26%]" delay="0.7s" />
                <MetricChip {...hero.chips[3]} className="-right-4 bottom-[8%]" delay="2.1s" />

                {/* Rotating "book a call" badge */}
                <button
                  type="button"
                  onClick={() => open()}
                  aria-label="Book a strategy call"
                  className="sticker-dark absolute -bottom-9 -left-9 z-10 hidden h-28 w-28 place-items-center rounded-full bg-accent text-ink-950 transition-transform duration-300 hover:scale-105 sm:grid"
                >
                  <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]">
                    <defs>
                      <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" fill="none" />
                    </defs>
                    <text className="fill-ink-950 font-mono text-[8px] font-bold uppercase" style={{ letterSpacing: "0.12em" }}>
                      <textPath href="#badge-circle" textLength="228" lengthAdjust="spacingAndGlyphs">
                        Book a call • Let's talk growth •
                      </textPath>
                    </text>
                  </svg>
                  <IconArrowUpRight width={22} height={22} />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 lg:flex" aria-hidden="true">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.32em] text-mut-dark">Descend the funnel</span>
        <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
