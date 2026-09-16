import { site } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SmartImage } from "./ui/SmartImage";
import { IconArrowRight, IconClock, IconMapPin } from "./ui/Icons";
import { asset } from "../utils/asset";

export function About() {
  const { about, identity } = site;
  return (
    <section id="about" className="scroll-mt-28 bg-paper py-24 text-ink-900 sm:py-32">
      <div className="shell">
        <SectionHeading index="01" eyebrow={about.eyebrow} title={about.title} />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ── Photo + facts (sticky on desktop) ── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="relative">
                  <figure className="sticker-soft group relative overflow-hidden rounded-xl">
                    <SmartImage
                      src={identity.aboutPhoto}
                      fallbackSrc={asset("images/about.jpg")}
                      alt={identity.aboutPhotoAlt}
                      loading="lazy"
                      label="ABU SALEH"
                      className="aspect-[4/4.6] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                    <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg bg-ink-950/85 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-paper backdrop-blur-sm">
                      <span>{identity.role}</span>
                      <span className="text-accent-bright">{identity.location}</span>
                    </figcaption>
                  </figure>

                  <div className="sticker-soft mt-8 rounded-xl bg-card-light p-6">
                    <p className="font-display text-lg font-semibold">{identity.name}</p>
                    <p className="mt-1 text-sm text-mut-light">{identity.tagline}</p>
                    <div className="mt-5 space-y-3 border-t border-line-light pt-5 text-sm text-mut-light">
                      <p className="flex items-center gap-3">
                        <IconMapPin width={16} height={16} className="shrink-0 text-accent-deep" />
                        {identity.location}
                      </p>
                      <p className="flex items-center gap-3">
                        <IconClock width={16} height={16} className="shrink-0 text-accent-deep" />
                        {identity.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── Story ── */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-base leading-[1.85] text-mut-light sm:text-[17px]">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 90}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* What makes the approach different */}
            <Reveal delay={120}>
              <h3 className="mt-14 font-display text-xl font-semibold text-ink-900">What makes my approach different</h3>
            </Reveal>
            <div className="mt-6 space-y-0">
              {about.differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 90}>
                  <div className="group flex gap-5 border-t border-line-light py-5 transition-colors duration-300 hover:bg-paper-dim/60 sm:gap-7 sm:px-3">
                    <span className="font-display text-sm font-semibold text-accent-deep">0{i + 1}</span>
                    <div>
                      <p className="font-display text-base font-semibold text-ink-900 transition-transform duration-300 group-hover:translate-x-1">
                        {d.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-mut-light">{d.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Strategy → Growth roadmap */}
            <Reveal delay={100}>
              <div className="mt-14 rounded-xl border border-line-light bg-card-light p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-mut-light">How I work</p>
                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-stretch sm:gap-3">
                  {about.roadmap.map((r, i) => (
                    <div key={r.step} className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:gap-3">
                      <div className="flex-1 rounded-lg border border-line-light bg-paper p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-deep/40 hover:shadow-lg hover:shadow-ink-900/5">
                        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-deep">
                          Step {i + 1}
                        </p>
                        <p className="mt-1.5 font-display text-lg font-semibold text-ink-900">{r.step}</p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-mut-light">{r.text}</p>
                      </div>
                      {i < about.roadmap.length - 1 && (
                        <IconArrowRight
                          width={18}
                          height={18}
                          className="hidden shrink-0 text-accent-deep sm:block"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Philosophy */}
            <Reveal delay={140}>
              <blockquote className="mt-12 border-l-2 border-accent pl-6 sm:pl-8">
                <p className="font-display text-xl font-medium leading-snug text-ink-900 sm:text-2xl">
                  “{about.philosophy}”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
