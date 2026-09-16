import { useEffect, useRef, useState } from "react";
import { site } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { IconCheck } from "./ui/Icons";
import { useBooking } from "../booking/BookingContext";
import { cn } from "../utils/cn";

export function Process() {
  const { process } = site;
  const { open } = useBooking();
  const stepsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Scroll-driven progress along the timeline
  useEffect(() => {
    const onScroll = () => {
      const el = stepsRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh * 0.35;
      const passed = vh * 0.65 - rect.top;
      setProgress(total > 0 ? Math.min(1, Math.max(0, passed / total)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const steps = process.steps;

  return (
    <section id="process" className="scroll-mt-28 border-t border-line-light bg-paper-dim/70 py-24 text-ink-900 sm:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-semibold tracking-[0.25em] text-accent-deep">08</span>
                  <span className="h-px w-10 bg-line-light" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-mut-light">{process.eyebrow}</span>
                </div>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-balance">
                  {process.title}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-mut-light sm:text-lg">{process.intro}</p>
                <button
                  type="button"
                  onClick={() => open()}
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink-900 px-7 py-4 text-sm font-bold text-paper transition-colors duration-300 hover:bg-accent hover:text-ink-950"
                >
                  Start With a Discovery Call
                </button>
              </Reveal>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-7">
            <div ref={stepsRef} className="relative">
              {/* Track + fill */}
              <div aria-hidden="true" className="absolute bottom-5 left-5 top-5 w-px bg-line-light" />
              <div
                aria-hidden="true"
                className="absolute left-5 top-5 w-px bg-accent transition-[height] duration-200 ease-out"
                style={{ height: `calc(${(progress * 100).toFixed(2)}% - 2.5rem)` }}
              />

              {steps.map((step, i) => {
                const active = progress * (steps.length - 1) >= i - 0.35;
                return (
                  <Reveal key={step.no} delay={i * 80}>
                    <div className="relative pb-14 pl-16 last:pb-0 sm:pl-20">
                      <span
                        className={cn(
                          "absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border font-display text-xs font-semibold transition-all duration-500 sm:h-11 sm:w-11",
                          active
                            ? "border-accent bg-accent text-ink-950 shadow-lg shadow-accent/25"
                            : "border-line-light bg-paper text-mut-light"
                        )}
                        aria-hidden="true"
                      >
                        {step.no}
                      </span>
                      <h3 className="pt-1 font-display text-2xl font-semibold tracking-tight sm:text-[28px]">{step.title}</h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-[1.8] text-mut-light">{step.text}</p>
                      <ul className="mt-5 space-y-2.5">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-center gap-3 text-sm font-semibold text-ink-900/80">
                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-deep/10 text-accent-deep">
                              <IconCheck width={11} height={11} strokeWidth={2.4} />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
