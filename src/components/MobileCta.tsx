import { useEffect, useState } from "react";
import { site } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { IconArrowUpRight, IconMail } from "./ui/Icons";
import { cn } from "../utils/cn";

/** Sticky bottom "Book Me" bar — mobile only, appears after the hero. */
export function MobileCta() {
  const [show, setShow] = useState(false);
  const { open, isOpen } = useBooking();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink-950/95 px-4 py-3 backdrop-blur-md transition-transform duration-500 lg:hidden",
        show && !isOpen ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <button
          type="button"
          onClick={() => open()}
          className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-bold text-ink-950 transition-colors duration-300 active:bg-accent-bright"
        >
          Book Me — Strategy Call
          <IconArrowUpRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <a
          href={`mailto:${site.identity.email}?subject=${encodeURIComponent("Project Inquiry")}`}
          aria-label="Send an email"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-dark text-paper transition-colors duration-300 active:bg-ink-800"
        >
          <IconMail width={18} height={18} />
        </a>
      </div>
    </div>
  );
}
