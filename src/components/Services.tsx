import { useState } from "react";
import { site } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { IconArrowUpRight, IconPlus } from "./ui/Icons";
import { cn } from "../utils/cn";

export function Services() {
  const { services } = site;
  const { open } = useBooking();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="scroll-mt-28 bg-paper py-24 text-ink-900 sm:py-32">
      <div className="shell">
        <SectionHeading index="04" eyebrow={services.eyebrow} title={services.title} intro={services.intro} />

        <div>
          {services.items.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={s.no} delay={i * 60}>
                <div className={cn("border-t border-line-light transition-colors duration-300", isOpen && "bg-card-light/80")}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${i}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="group flex w-full items-center gap-5 px-2 py-7 text-left sm:gap-8 sm:px-4 sm:py-8"
                  >
                    <span className="w-8 shrink-0 font-display text-sm font-semibold text-accent-deep">{s.no}</span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block font-display text-xl font-semibold transition-all duration-300 group-hover:translate-x-1.5 sm:text-2xl lg:text-[28px]",
                          isOpen ? "text-accent-deep" : "text-ink-900"
                        )}
                      >
                        {s.title}
                      </span>
                      <span className="mt-1 block text-sm text-mut-light">{s.tagline}</span>
                    </span>
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 sm:h-11 sm:w-11",
                        isOpen
                          ? "rotate-45 border-ink-900 bg-ink-900 text-paper"
                          : "border-line-light text-ink-900 group-hover:border-accent-deep group-hover:text-accent-deep"
                      )}
                    >
                      <IconPlus width={17} height={17} />
                    </span>
                  </button>

                  {/* Expandable panel (animated via grid rows) */}
                  <div
                    id={`service-panel-${i}`}
                    className="grid transition-[grid-template-rows] duration-500 [transition-timing-function:cubic-bezier(.22,1,.36,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 px-2 pb-9 sm:px-4 md:grid-cols-3 md:gap-10 lg:pl-16">
                        {[
                          { label: "Who it's for", text: s.who },
                          { label: "Problem it solves", text: s.problem },
                          { label: "What to expect", text: s.outcome },
                        ].map((block) => (
                          <div key={block.label}>
                            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent-deep">{block.label}</p>
                            <p className="mt-2.5 text-sm leading-[1.75] text-mut-light">{block.text}</p>
                          </div>
                        ))}
                        <div className="md:col-span-3">
                          <div className="flex flex-wrap gap-2">
                            {s.deliverables.map((d) => (
                              <span
                                key={d}
                                className="rounded-full border border-line-light bg-paper px-3.5 py-1.5 text-xs font-semibold text-mut-light"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                          <button
                            type="button"
                            onClick={() => open(s.title)}
                            className="group/cta mt-7 inline-flex items-center gap-2.5 text-sm font-bold text-accent-deep transition-colors duration-300 hover:text-ink-900"
                          >
                            <span className="relative">
                              Let's Work Together
                              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/cta:scale-x-100" />
                            </span>
                            <IconArrowUpRight
                              width={15}
                              height={15}
                              className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <div className="border-t border-line-light" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
