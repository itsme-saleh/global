import { site } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { IconArrowUpRight } from "./ui/Icons";
import { useBooking } from "../booking/BookingContext";

export function WhyMe() {
  const { whyMe } = site;
  const { open } = useBooking();

  return (
    <section id="why" className="scroll-mt-28 bg-paper py-24 text-ink-900 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading index="08" eyebrow={whyMe.eyebrow} title={whyMe.title} className="mb-6" />
              <Reveal delay={150}>
                <p className="text-base leading-relaxed text-mut-light">{whyMe.intro}</p>
                <button
                  type="button"
                  onClick={() => open()}
                  className="group mt-8 inline-flex items-center gap-2.5 text-sm font-bold text-accent-deep transition-colors duration-300 hover:text-ink-900"
                >
                  Experience it on a call
                  <IconArrowUpRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-x-12 sm:grid-cols-2">
              {whyMe.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 90}>
                  <div className="group border-t border-line-light py-8 transition-all duration-300 hover:border-accent-deep/50">
                    <div className="flex items-start gap-6">
                      <span className="font-display text-[26px] font-semibold leading-none text-accent-deep/60 transition-colors duration-300 group-hover:text-accent-deep">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold transition-transform duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-[1.75] text-mut-light">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
