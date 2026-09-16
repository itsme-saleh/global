import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}

/** Fade-up scroll reveal — subtle, single-axis, performance-friendly. */
export function Reveal({ children, delay = 0, y = 28, className, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 will-change-transform [transition-timing-function:cubic-bezier(.22,1,.36,1)]",
        inView ? "translate-y-0 opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </Tag>
  );
}
