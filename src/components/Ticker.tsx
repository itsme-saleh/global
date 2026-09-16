import { site } from "../content/site";

/** Marquee of disciplines — a living divider between hero and story. */
export function Ticker() {
  const items = [...site.ticker, ...site.ticker];
  return (
    <div className="group relative overflow-hidden border-y border-line-dark bg-ink-900/70 py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-mut-dark transition-colors duration-300 hover:text-paper">
              {item}
            </span>
            <span className="shrink-0 text-xs text-accent" aria-hidden="true">
              ▲
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
