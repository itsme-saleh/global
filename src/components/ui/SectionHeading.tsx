import { Reveal } from "./Reveal";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  index: string; // "01"
  eyebrow: string; // "About"
  title: string;
  intro?: string;
  dark?: boolean; // true on dark backgrounds
  align?: "left" | "center";
  className?: string;
}

/** Editorial section header: oversized index number + eyebrow rule + big display title. */
export function SectionHeading({ index, eyebrow, title, intro, dark = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 sm:mb-16", className)}>
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "px-2 py-1 font-mono text-[10px] font-bold tracking-[0.2em]",
              dark ? "bg-accent text-ink-950" : "bg-ink-950 text-accent"
            )}
          >
            {index}
          </span>
          <span
            className={cn(
              "font-mono text-[10px] font-bold uppercase tracking-[0.28em]",
              dark ? "text-mut-dark" : "text-mut-light"
            )}
          >
            {eyebrow}
          </span>
          <span className={cn("hidden h-px min-w-8 flex-1 sm:block", dark ? "bg-line-dark" : "bg-line-light")} aria-hidden="true" />
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={cn(
            "mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-balance",
            dark ? "text-paper" : "text-ink-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={170}>
          <p className={cn("mt-5 max-w-2xl text-base leading-relaxed sm:text-lg", dark ? "text-mut-dark" : "text-mut-light")}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
