import { site } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { IconSpark } from "./ui/Icons";

/** The memorable brand moment — huge typography, one idea. */
export function Statement() {
  const { statement } = site;
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 sm:py-40">
      <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.05]" />
      <div aria-hidden="true" className="absolute left-[-12%] top-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/[0.08] blur-[130px]" />
      {/* Oversized ghost word — palette-matched outline */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(198,240,76,0.10)]"
      >
        PURPOSE
      </span>
      <IconSpark
        aria-hidden="true"
        width={140}
        height={140}
        className="absolute right-[8%] top-[16%] hidden animate-[spin_24s_linear_infinite] text-accent/25 lg:block"
        strokeWidth={1}
      />

      <div className="shell relative">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-mut-dark">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            My Philosophy
          </p>
        </Reveal>

        <div className="max-w-5xl font-display font-semibold leading-[1.08] tracking-[-0.02em]">
          {statement.lines.map((line, i) => (
            <Reveal key={i} delay={i * 110}>
              <p className="text-[clamp(1.9rem,5vw,3.9rem)] text-paper">{line}</p>
            </Reveal>
          ))}
          <div className="mt-8">
            {statement.accentLines.map((line, i) => {
              const isFinal = i === statement.accentLines.length - 1;
              return (
                <Reveal key={line} delay={220 + i * 110}>
                  <p className={isFinal ? "text-[clamp(1.9rem,5vw,3.9rem)] text-accent" : "text-[clamp(1.5rem,3.4vw,2.6rem)] text-mut-dark"}>
                    {isFinal ? (
                      <span className="relative inline-block">
                        {line}
                        <svg aria-hidden="true" viewBox="0 0 320 12" className="absolute -bottom-2 left-0 w-[70%] text-accent" fill="none">
                          <path d="M3 9c60-6 150-7 314-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                        </svg>
                      </span>
                    ) : (
                      line
                    )}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={500}>
          <p className="mt-12 font-display text-lg font-medium text-mut-dark">
            <span className="mr-3 text-accent">—</span>
            {site.statement.signature.replace("— ", "")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
