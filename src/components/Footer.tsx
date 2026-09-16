import { site, realSocials } from "../content/site";
import { IconArrowUp, IconSpark, socialIcon } from "./ui/Icons";

export function Footer() {
  const { identity, nav, footerNote } = site;
  const socials = realSocials();

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-line-dark bg-ink-950">
      {/* Bottom padding clears the sticky mobile CTA bar so nothing is covered */}
      <div className="shell pb-28 pt-14 sm:pb-16 sm:pt-16 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-ink-950 transition-transform duration-500 group-hover:rotate-90">
                <IconSpark width={16} height={16} strokeWidth={2.4} />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper">{identity.name}</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mut-dark">{identity.tagline}</p>
            <a
              href={`mailto:${identity.email}`}
              className="mt-5 inline-block font-display text-lg font-semibold text-accent-bright underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              {identity.email}
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-mut-dark">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm font-semibold text-paper/80 transition-colors duration-300 hover:text-accent-bright">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-mut-dark">Connect</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.length > 0 ? (
                socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line-dark text-paper/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent-bright"
                  >
                    {socialIcon(s.icon)}
                  </a>
                ))
              ) : (
                <p className="text-[13px] leading-relaxed text-mut-dark/70">
                  Social links appear once real URLs are added in <code className="text-mut-dark">site.ts</code>.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line-dark pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-mut-dark">© 2026 {identity.name}. All rights reserved.</p>
          <p className="flex items-center gap-2 text-[13px] font-semibold text-mut-dark">
            <IconSpark width={12} height={12} className="text-accent" />
            {footerNote}
          </p>
          <button
            type="button"
            onClick={backToTop}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-line-dark text-paper transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent-bright"
          >
            <IconArrowUp width={17} height={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}
