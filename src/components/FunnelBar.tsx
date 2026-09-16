import { useScrollProgress } from "../hooks/useScrollProgress";
import { cn } from "../utils/cn";

const STAGES = [
  { code: "01", name: "ATTENTION" },
  { code: "02", name: "INTEREST" },
  { code: "03", name: "DESIRE" },
  { code: "04", name: "ACTION" },
];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/**
 * The signature element: a fixed funnel-depth tracker.
 * The whole page is a marketing funnel — this bar shows visitors
 * exactly which stage they're in as they scroll toward conversion.
 */
export function FunnelBar() {
  const progress = useScrollProgress();
  const depth = progress * STAGES.length;
  const activeIndex = Math.min(STAGES.length - 1, Math.floor(depth));

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-8 border-b border-line-dark bg-ink-950/95 backdrop-blur-sm">
      <div className="shell flex h-full items-stretch">
        <span className="hidden items-center gap-2 pr-4 font-mono text-[9px] font-bold tracking-[0.3em] text-paper/40 sm:flex">
          FUNNEL<span className="text-accent">▼</span>
        </span>

        {STAGES.map((stage, i) => {
          const fill = clamp01(depth - i);
          const touched = fill > 0;
          return (
            <div
              key={stage.code}
              className="relative flex flex-1 items-center overflow-hidden border-l border-line-dark px-2 first:border-l-0 sm:px-3"
              aria-label={`Funnel stage ${stage.code}: ${stage.name}`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-200 ease-out"
                style={{ width: `${fill * 100}%` }}
              />
              <span
                className={cn(
                  "relative whitespace-nowrap font-mono text-[9px] font-bold tracking-[0.18em] transition-colors duration-300",
                  touched ? "text-ink-950" : i === activeIndex ? "text-accent" : "text-paper/40"
                )}
              >
                {stage.code}
                <span className="hidden md:inline"> · {stage.name}</span>
              </span>
            </div>
          );
        })}

        <span className="hidden items-center pl-4 font-mono text-[9px] font-bold tracking-[0.25em] text-accent lg:flex">
          {Math.round(progress * 100)}% DEPTH
        </span>
      </div>
    </div>
  );
}
