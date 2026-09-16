import { useRef, useState } from "react";
import { site } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { IconArrowRight, IconArrowUpRight, IconQuote, IconSpark, IconStar } from "./ui/Icons";
import { SmartImage } from "./ui/SmartImage";

export function Testimonials() {
  const { testimonials } = site;
  const { open } = useBooking();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  // Only genuinely published reviews are rendered. A previous version kept
  // placeholder slots alongside real ones, which could surface empty quotes.
  const published = testimonials.items.filter((t) => !t.name.includes("[CLIENT"));
  const hasReal = published.length > 0;
  const total = published.length;

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    if (!card) return;
    const gap = 20;
    const clamped = Math.max(0, Math.min(total - 1, index));
    track.scrollTo({ left: clamped * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    if (!card) return;
    setCurrent(Math.round(track.scrollLeft / (card.offsetWidth + 20)));
  };

  return (
    <section id="testimonials" className="relative scroll-mt-28 overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.04]" />
      <div aria-hidden="true" className="absolute left-1/2 top-[-30%] h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[130px]" />

      <div className="shell relative">
        <SectionHeading dark index="07" eyebrow={testimonials.eyebrow} title={testimonials.title} />

        {hasReal ? (
          <>
            {/* ── Real reviews slider ── */}
            <Reveal delay={100}>
              <div
                ref={trackRef}
                onScroll={onScroll}
                className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2"
              >
                {published.map((t, i) => (
                  <article
                    key={i}
                    className="sticker-ghost flex w-[86%] shrink-0 snap-start flex-col rounded-xl border border-line-dark bg-ink-900 p-8 transition-colors duration-500 hover:border-accent/40 sm:w-[60%] sm:p-9 lg:w-[44%]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-accent" aria-label={`${t.rating} out of 5 stars`}>
                        {Array.from({ length: t.rating }).map((_, s) => (
                          <IconStar key={s} />
                        ))}
                      </div>
                      <IconQuote className="text-accent/35" />
                    </div>
                    <blockquote className="mt-6 flex-1">
                      <p className="font-display text-lg font-medium leading-[1.55] text-paper">“{t.quote}”</p>
                    </blockquote>
                    <footer className="mt-8 flex items-center gap-4 border-t border-line-dark pt-6">
                      {t.photo ? (
                        <SmartImage
                          src={t.photo}
                          alt={t.name}
                          className="h-11 w-11 shrink-0 rounded-full border border-accent/40 object-cover"
                        />
                      ) : (
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/15 font-display text-sm font-semibold text-accent">
                          {t.initials}
                        </span>
                      )}
                      <div>
                        <p className="text-sm font-bold text-paper">{t.name}</p>
                        <p className="mt-0.5 text-xs text-mut-dark">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 flex items-center justify-between">
                <p className="font-mono text-xs font-bold tracking-[0.2em] text-mut-dark">
                  <span className="text-accent">0{current + 1}</span> / 0{total}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => scrollToCard(current - 1)}
                    disabled={current === 0}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line-dark text-paper transition-all duration-300 hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
                  >
                    <IconArrowRight width={17} height={17} className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => scrollToCard(current + 1)}
                    disabled={current >= total - 1}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line-dark text-paper transition-all duration-300 hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
                  >
                    <IconArrowRight width={17} height={17} />
                  </button>
                </div>
              </div>
            </Reveal>
          </>
        ) : (
          <>
            {/* ── Honest trust state — shown until real reviews are added ── */}
            <Reveal>
              <p className="mb-10 inline-flex max-w-3xl items-start gap-3 rounded-lg border border-dashed border-accent/40 bg-accent/[0.06] px-5 py-4 font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-accent">
                <IconSpark width={15} height={15} className="mt-0.5 shrink-0" />
                {testimonials.note}
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {/* The pledge */}
              <Reveal delay={80}>
                <article className="sticker-ghost flex h-full flex-col rounded-xl border border-line-dark bg-ink-900 p-8 transition-colors duration-500 hover:border-accent/40 sm:p-9">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent">My pledge</p>
                  <IconQuote className="mt-5 text-accent/35" />
                  <p className="mt-4 flex-1 font-display text-lg font-medium leading-[1.55] text-paper">
                    “Real words only. I publish reviews my clients actually wrote — nothing invented, nothing ghostwritten.
                    If this section is quiet, it's because I'm earning these words one project at a time.”
                  </p>
                  <footer className="mt-8 flex items-center gap-4 border-t border-line-dark pt-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/15 font-display text-sm font-semibold text-accent">
                      AS
                    </span>
                    <div>
                      <p className="text-sm font-bold text-paper">Abu Saleh</p>
                      <p className="mt-0.5 text-xs text-mut-dark">Marketing since 2019</p>
                    </div>
                  </footer>
                </article>
              </Reveal>

              {/* Proof on the call */}
              <Reveal delay={160}>
                <article className="flex h-full flex-col rounded-xl border border-line-dark bg-ink-900 p-8 transition-colors duration-500 hover:border-accent/40 sm:p-9">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-mut-dark">Verification</p>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-paper">Proof over promises</h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.8] text-mut-dark">
                    On a strategy call I'll walk you through actual campaign dashboards — with client permission — and
                    connect you directly with past clients if you'd like. References available on request.
                  </p>
                  <button
                    type="button"
                    onClick={() => open()}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors duration-300 hover:text-paper"
                  >
                    Ask for references
                    <IconArrowUpRight
                      width={15}
                      height={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </article>
              </Reveal>

              {/* Future client */}
              <Reveal delay={240}>
                <article className="flex h-full flex-col rounded-xl border border-accent/50 bg-ink-900 p-8 transition-colors duration-500 hover:border-accent sm:p-9">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent">Next slot</p>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-paper">Your review belongs here</h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.8] text-mut-dark">
                    After we work together, this is where your words will live — published only with your permission,
                    exactly as you wrote them.
                  </p>
                  <button
                    type="button"
                    onClick={() => open()}
                    className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 text-[13px] font-bold text-ink-950 transition-colors duration-300 hover:bg-paper"
                  >
                    Start a project
                    <IconArrowUpRight
                      width={15}
                      height={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </article>
              </Reveal>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
