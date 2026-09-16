import { site } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { IconArrowUpRight, IconChart, IconMegaphone, IconPlus, IconSearch, IconTarget } from "./ui/Icons";

const iconMap = {
  target: IconTarget,
  megaphone: IconMegaphone,
  search: IconSearch,
  chart: IconChart,
} as const;

export function Skills() {
  const { skills } = site;
  return (
    <section id="expertise" className="relative scroll-mt-28 overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.04]" />
      <div aria-hidden="true" className="absolute left-[-15%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/[0.07] blur-[140px]" />

      <div className="shell relative">
        <SectionHeading dark index="03" eyebrow={skills.eyebrow} title={skills.title} intro={skills.intro} />

        {/* Featured disciplines — large cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.featured.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-line-dark bg-ink-900 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-ink-800 hover:shadow-[8px_8px_0_rgba(3,13,9,0.5)] sm:p-9">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <IconArrowUpRight
                    width={20}
                    height={20}
                    className="absolute right-7 top-7 -translate-x-2 translate-y-2 text-accent-bright opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                  <div className="grid h-13 w-13 place-items-center rounded-lg border border-line-dark p-3 text-accent-bright transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink-950">
                    <Icon width={24} height={24} />
                  </div>
                  <h3 className="mt-7 font-display text-xl font-semibold text-paper sm:text-[22px]">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-[1.8] text-mut-dark">{s.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Remaining disciplines — numbered interactive index */}
        <Reveal delay={120}>
          <p className="mb-2 mt-16 text-xs font-bold uppercase tracking-[0.28em] text-mut-dark">Also in the toolbox</p>
        </Reveal>
        <div className="grid gap-x-12 sm:grid-cols-2">
          {skills.list.map((skill, i) => (
            <Reveal key={skill} delay={i * 60}>
              <div className="group flex cursor-default items-center justify-between border-t border-line-dark py-4.5 transition-all duration-300 hover:border-accent/40 hover:pl-2.5">
                <span className="flex items-baseline gap-5">
                  <span className="font-display text-xs font-semibold text-accent-bright/70">0{i + 5}</span>
                  <span className="font-display text-[17px] font-medium text-paper transition-colors duration-300 group-hover:text-accent-bright">
                    {skill}
                  </span>
                </span>
                <IconPlus
                  width={15}
                  height={15}
                  className="text-mut-dark transition-all duration-300 group-hover:rotate-90 group-hover:text-accent"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
