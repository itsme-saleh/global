import { site, realSocials, hasRealEmail } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { Reveal } from "./ui/Reveal";
import { Magnetic } from "./ui/Magnetic";
import {
  IconArrowUpRight,
  IconClock,
  IconMail,
  IconMapPin,
  IconWhatsApp,
  socialIcon,
} from "./ui/Icons";

/** STAGE 04 · ACTION — the conversion point. The funnel's brightest moment. */
export function Contact() {
  const { contact, identity } = site;
  const { open } = useBooking();
  const socials = realSocials();
  const emailReal = hasRealEmail();
  const whatsappReal = identity.whatsapp.replace(/\D/g, "").length >= 8 && !identity.whatsapp.includes("[YOUR");

  const methods = [
    {
      label: "Email",
      value: identity.email,
      href: emailReal ? `mailto:${identity.email}` : undefined,
      icon: <IconMail width={18} height={18} />,
    },
    {
      label: "WhatsApp",
      value: whatsappReal ? identity.phone : "[YOUR WHATSAPP NUMBER]",
      href: whatsappReal ? `https://wa.me/${identity.whatsapp.replace(/\D/g, "")}` : undefined,
      icon: <IconWhatsApp width={18} height={18} />,
    },
    { label: "Based in", value: identity.location, icon: <IconMapPin width={18} height={18} /> },
    { label: "Response time", value: identity.responseTime, icon: <IconClock width={18} height={18} /> },
  ];

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-accent py-24 text-ink-950 sm:py-32">
      {/* Texture on the lime field */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(12,18,14,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(12,18,14,0.3)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,black,transparent)]"
      />
      <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.05]" />

      <div className="shell relative">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-ink-950 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-accent">09</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-ink-950/60">{contact.eyebrow}</span>
            <span className="hidden h-px min-w-8 flex-1 bg-ink-950/15 sm:block" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-balance">
            {contact.title}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-950/70 sm:text-lg">{contact.text}</p>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink-950/55">
            ▼ Bottom of funnel — this is the part where we talk
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <button
                type="button"
                onClick={() => open()}
                className="group inline-flex items-center gap-3 rounded-full bg-ink-950 px-8 py-4 text-sm font-bold text-paper shadow-[6px_6px_0_rgba(3,6,4,0.35)] transition-all duration-300 hover:bg-ink-800 hover:shadow-[3px_3px_0_rgba(3,6,4,0.35)]"
              >
                {contact.primaryCta}
                <IconArrowUpRight
                  width={16}
                  height={16}
                  className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </Magnetic>
            <a
              href={emailReal ? `mailto:${identity.email}?subject=${encodeURIComponent("Project Inquiry — let's talk growth")}` : "#contact"}
              className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-ink-950/40 px-8 py-4 text-sm font-bold text-ink-950 transition-all duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-paper"
            >
              {contact.secondaryCta}
            </a>
          </div>
        </Reveal>

        {/* Contact methods */}
        <Reveal delay={320}>
          <div className="mt-16 grid gap-px overflow-hidden border-[1.5px] border-ink-950 bg-ink-950 sm:grid-cols-2 lg:grid-cols-4">
            {methods.map((m) => (
              <div key={m.label} className="group bg-accent p-6 transition-colors duration-300 hover:bg-ink-950 hover:text-paper sm:p-7">
                <span className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink-950/55 transition-colors group-hover:text-paper/55">
                  {m.icon}
                  {m.label}
                </span>
                {m.href ? (
                  <a
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-3 inline-block break-all text-[15px] font-bold underline-offset-4 transition-all hover:underline"
                  >
                    {m.value}
                  </a>
                ) : (
                  <p className="mt-3 break-all text-[15px] font-bold">
                    <span className="border-b border-dashed border-ink-950/40 group-hover:border-paper/50">{m.value}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Socials — only shown when real URLs exist */}
        <Reveal delay={380}>
          <div className="mt-8">
            {socials.length > 0 ? (
              <div className="flex flex-wrap items-center gap-3">
                <span className="mr-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink-950/55">Find me on</span>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-ink-950/35 text-ink-950 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-950 hover:text-paper"
                  >
                    {socialIcon(s.icon)}
                  </a>
                ))}
              </div>
            ) : (
              <p className="inline-block border border-dashed border-ink-950/40 px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-950/65">
                SOCIAL PROFILES APPEAR HERE ONCE REAL URLS ARE ADDED IN SITE.TS → SOCIALS
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
