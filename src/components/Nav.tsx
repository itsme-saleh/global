import { useEffect, useState } from "react";
import { site } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { IconArrowUpRight, IconSpark } from "./ui/Icons";
import { cn } from "../utils/cn";

export function Nav() {
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useBooking();

  // Tracks only whether the compact state is active (cheap boolean)
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      setScrolled(window.scrollY > 32);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-8 z-50 transition-all duration-500",
          scrolled || menuOpen
            ? "border-b border-line-dark bg-ink-950/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        {/* Scroll progress indicator */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-[2px] w-full origin-left bg-accent transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />

        <div
          className={cn(
            "shell flex items-center justify-between transition-all duration-500",
            scrolled ? "py-3" : "py-5 sm:py-6"
          )}
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3" aria-label={`${site.identity.name} — home`}>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-ink-950 transition-transform duration-500 group-hover:rotate-90">
              <IconSpark width={16} height={16} strokeWidth={2.4} />
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper">
              {site.identity.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[13px] font-semibold tracking-wide text-mut-dark transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-paper hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2.5 font-mono text-[9px] font-bold tracking-[0.25em] text-mut-dark xl:flex">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              OPEN FOR PROJECTS
            </span>
            <button
              type="button"
              onClick={() => open()}
              className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-bold text-ink-950 transition-all duration-300 hover:bg-accent-bright md:inline-flex"
            >
              Book Me
              <IconArrowUpRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-line-dark lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[2px] w-full bg-paper transition-all duration-300",
                    menuOpen && "top-1/2 -translate-y-1/2 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] w-full bg-paper transition-all duration-300",
                    menuOpen && "bottom-1/2 translate-y-1/2 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink-950/[0.98] pt-36 transition-all duration-500 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04]" />
        <nav aria-label="Mobile" className="shell relative flex flex-1 flex-col justify-center gap-1 pb-8">
          {site.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "group flex items-center justify-between border-b border-line-dark py-4 transition-all duration-500",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="flex items-baseline gap-4">
                <span className="font-display text-xs font-semibold text-accent-bright">0{i + 1}</span>
                <span className="font-display text-3xl font-semibold text-paper transition-colors group-hover:text-accent-bright">
                  {item.label}
                </span>
              </span>
              <IconArrowUpRight width={20} height={20} className="text-mut-dark transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-bright" />
            </a>
          ))}
          <div
            className={cn("mt-8 transition-all delay-500 duration-500", menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}
          >
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-sm font-bold text-ink-950"
            >
              Book a Strategy Call
              <IconArrowUpRight width={16} height={16} />
            </button>
            <p className="mt-4 text-center text-sm text-mut-dark">{site.identity.email}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
