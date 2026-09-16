import { useEffect } from "react";
import type { CaseStudy } from "../content/site";
import { site, isPlaceholder } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { SmartImage } from "./ui/SmartImage";
import { IconArrowRight, IconArrowUpRight, IconClose } from "./ui/Icons";
import { cn } from "../utils/cn";
import { asset } from "../utils/asset";

interface Props {
  study: CaseStudy;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: Props) {
  const { open } = useBooking();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto" role="dialog" aria-modal="true" aria-label={`Case study: ${study.client}`}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-ink-950/85 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div className="relative mx-auto my-[3vh] w-[min(94vw,54rem)] animate-[modal-in_.45s_cubic-bezier(.22,1,.36,1)] overflow-hidden rounded-xl bg-paper text-ink-900 shadow-2xl shadow-black/50">
        {/* Hero image */}
        <div className="relative h-52 sm:h-72">
          <SmartImage
            src={study.image}
            fallbackSrc={asset(`images/case-${study.id}.jpg`)}
            alt={study.imageAlt}
            loading="eager"
            label={study.industry}
            className="h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/20" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink-950/70 text-paper backdrop-blur transition-colors duration-300 hover:bg-accent hover:text-ink-950"
          >
            <IconClose width={18} height={18} />
          </button>
          <div className="absolute bottom-4 left-5 flex items-center gap-3 sm:left-8">
            <span className="rounded-full bg-accent px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-950">
              {study.industry}
            </span>
            <span className="rounded-full bg-ink-950/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-paper backdrop-blur">
              {study.timeframe}
            </span>
          </div>
          <span aria-hidden="true" className="absolute bottom-2 right-6 font-display text-6xl font-semibold text-paper/20">
            {study.index}
          </span>
        </div>

        <div className="p-6 sm:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-mut-light">Case Study {study.index}</p>
          <h3 className={cn("mt-2 font-display text-3xl font-semibold tracking-tight", isPlaceholder(study.client) && "ph-dark")}>
            {study.client}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.services.map((s) => (
              <span key={s} className="rounded-full border border-line-light bg-card-light px-3.5 py-1.5 text-xs font-semibold text-mut-light">
                {s}
              </span>
            ))}
          </div>

          {/* Narrative */}
          <div className="mt-9 grid gap-8 sm:grid-cols-3">
            {[
              { label: "Challenge", text: study.challenge },
              { label: "Strategy", text: study.strategy },
              { label: "Execution", text: study.execution },
            ].map((block) => (
              <div key={block.label} className="border-t-2 border-ink-900/80 pt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent-deep">{block.label}</p>
                <p className="mt-2.5 text-sm leading-[1.75] text-mut-light">{block.text}</p>
              </div>
            ))}
          </div>

          {/* Result callout */}
          <div className="mt-9 rounded-lg border-l-4 border-accent bg-accent/[0.07] p-6 sm:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent-deep">Result</p>
            <p className={cn("mt-2 font-display text-lg font-semibold leading-snug sm:text-xl", isPlaceholder(study.result) && "ph-dark")}>
              {study.result}
            </p>
          </div>

          {/* Before → After */}
          <div className="mt-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-mut-light">Before → After</p>
            <div className="mt-3">
              {study.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-2 border-t border-line-light py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <span className="text-sm font-semibold text-ink-900">{m.label}</span>
                  <span className="flex items-center gap-4">
                    <span className="w-24 text-right text-sm text-mut-light sm:w-28">{m.before}</span>
                    <IconArrowRight width={16} height={16} className="shrink-0 text-accent-deep" />
                    <span className="w-24 font-display text-sm font-semibold text-accent-deep sm:w-28">{m.after}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-xl bg-ink-950 p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-display text-lg font-semibold text-paper">Have a similar challenge?</p>
              <p className="mt-1 text-sm text-mut-dark">Let's map the strategy for yours — starting with one call.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                open(site.services.items[5].title);
              }}
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[13px] font-bold text-ink-950 transition-colors duration-300 hover:bg-accent-bright"
            >
              Start a Project Like This
              <IconArrowUpRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      <style>{`@keyframes modal-in { from { opacity: 0; transform: translateY(28px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
    </div>
  );
}
