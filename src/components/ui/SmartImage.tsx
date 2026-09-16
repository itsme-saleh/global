import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

interface SmartImageProps {
  src: string;
  /** Used if the primary file is missing — keeps the site never-broken */
  fallbackSrc?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  /** Short label shown on the branded placeholder if everything fails */
  label?: string;
}

/**
 * Image with a graceful 3-step fallback chain:
 *   1. Your real photo      → public/images/saleh-*.jpg
 *   2. Existing artwork     → fallbackSrc
 *   3. Branded placeholder  → keeps layout intact, never a broken icon
 */
export function SmartImage({
  src,
  fallbackSrc,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
  label = "IMAGE",
}: SmartImageProps) {
  const [current, setCurrent] = useState(src);
  const [step, setStep] = useState<0 | 1 | 2>(0);

  // Re-arm the chain whenever the requested source changes
  useEffect(() => {
    setCurrent(src);
    setStep(0);
  }, [src]);

  if (step === 2) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn("grid place-items-center border border-line-dark bg-ink-900 bg-grid-dark", className)}
      >
        <span className="bg-accent px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink-950">
          {label}
        </span>
      </div>
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => {
        if (step === 0 && fallbackSrc && fallbackSrc !== current) {
          setCurrent(fallbackSrc);
          setStep(1);
        } else {
          setStep(2);
        }
      }}
      className={className}
    />
  );
}
