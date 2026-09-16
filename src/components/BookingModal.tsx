import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "../content/site";
import { useBooking } from "../booking/BookingContext";
import { submitBooking, type BookingData, type SubmitResult } from "../booking/submitBooking";
import { IconCheck, IconClose, IconSend } from "./ui/Icons";
import { cn } from "../utils/cn";

const inputCls =
  "w-full rounded-md border border-line-light bg-card-light px-4 py-3 text-sm text-ink-900 placeholder:text-mut-light/60 outline-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20";
const labelCls = "mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-mut-light";

type Status = "idle" | "sending" | "success" | "error";

const emptyForm: BookingData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  date: "",
  time: "",
  details: "",
};

export function BookingModal() {
  const { isOpen, close, preselectedService } = useBooking();
  const [form, setForm] = useState<BookingData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [mode, setMode] = useState<SubmitResult["mode"]>("api");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm({ ...emptyForm, service: preselectedService });
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen, preselectedService]);

  // Moves focus into the dialog and traps Tab while open (a11y)
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("input,select,textarea")?.focus();
    }, 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  // Prevents booking a call in the past
  const today = new Date().toISOString().split("T")[0];

  const set = (key: keyof BookingData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof BookingData, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!form.service) next.service = "Please choose a service.";
    if (form.details.trim().length < 20) next.details = "A few more details help me prepare (min. 20 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || status === "sending") return;
    setStatus("sending");
    try {
      const result = await submitBooking({
        ...form,
        name: form.name.trim(),
        email: form.email.trim(),
      });
      setMode(result.mode);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const err = (key: keyof BookingData) =>
    errors[key] ? <p className="mt-1.5 text-xs font-semibold text-red-600">{errors[key]}</p> : null;

  const Chevron = () => (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mut-light"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto" role="dialog" aria-modal="true" aria-label="Book a strategy call">
      <div className="fixed inset-0 bg-ink-950/85 backdrop-blur-sm" onClick={status === "sending" ? undefined : close} aria-hidden="true" />

      <div
        ref={panelRef}
        className="relative mx-auto my-[3vh] w-[min(94vw,46rem)] animate-[modal-in_.45s_cubic-bezier(.22,1,.36,1)] overflow-hidden rounded-xl bg-paper text-ink-900 shadow-2xl shadow-black/50"
      >
        {/* Header */}
        <div className="relative flex items-start justify-between gap-6 bg-ink-950 px-7 py-7 sm:px-9 sm:py-8">
          <div className="bg-noise absolute inset-0 opacity-[0.05]" aria-hidden="true" />
          <div className="relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-accent-bright">{site.booking.headline}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-[28px]">{site.booking.intro}</h3>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close booking form"
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-dark text-paper transition-colors duration-300 hover:bg-accent"
          >
            <IconClose width={18} height={18} />
          </button>
        </div>

        {status === "success" ? (
          /* ── Success state ── */
          <div className="px-7 py-14 text-center sm:px-12">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/12 text-accent-deep">
              <IconCheck width={30} height={30} strokeWidth={2.2} />
            </span>
            <p className="mt-7 font-mono text-[10px] font-bold tracking-[0.3em] text-accent-deep">✓ CONVERSION TRACKED</p>
            <h4 className="mt-3 font-display text-2xl font-semibold">{site.booking.successTitle}</h4>
            <p className="mt-3 text-mut-light">{site.booking.successText}</p>
            {mode === "api" ? (
              <p className="mt-2 text-sm text-mut-light">
                A copy of your request is on its way to <strong className="font-bold text-ink-900">{form.email}</strong>.
              </p>
            ) : (
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mut-light">
                Your email app should have opened with the request pre-filled — just hit send. (To receive requests directly
                in your inbox, configure <code className="font-bold">site.ts → booking.endpoint</code>.)
              </p>
            )}
            <button
              type="button"
              onClick={close}
              className="mt-9 rounded-full bg-ink-950 px-8 py-3.5 text-sm font-bold text-paper transition-colors duration-300 hover:bg-accent"
            >
              Done
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={onSubmit} noValidate className="p-7 sm:p-9">
            {status === "error" && (
              <div role="alert" className="mb-6 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
                Something went wrong sending your request. Please try again, or email me directly at{" "}
                <a href={`mailto:${site.identity.email}`} className="underline">
                  {site.identity.email}
                </a>
                .
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="bk-name" className={labelCls}>
                  Full Name *
                </label>
                <input
                  id="bk-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Jane Cooper"
                  className={cn(inputCls, errors.name && "border-red-400")}
                  aria-invalid={!!errors.name}
                />
                {err("name")}
              </div>
              <div>
                <label htmlFor="bk-email" className={labelCls}>
                  Email *
                </label>
                <input
                  id="bk-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="jane@company.com"
                  className={cn(inputCls, errors.email && "border-red-400")}
                  aria-invalid={!!errors.email}
                />
                {err("email")}
              </div>
              <div>
                <label htmlFor="bk-phone" className={labelCls}>
                  Phone / WhatsApp
                </label>
                <input
                  id="bk-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+1 555 000 1234"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="bk-company" className={labelCls}>
                  Company / Brand
                </label>
                <input
                  id="bk-company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Acme Inc."
                  className={inputCls}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="bk-website" className={labelCls}>
                  Website / Social Media <span className="normal-case tracking-normal text-mut-light/70">(optional)</span>
                </label>
                <input
                  id="bk-website"
                  type="url"
                  value={form.website}
                  onChange={(e) => set("website", e.target.value)}
                  placeholder="https://…"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="bk-service" className={labelCls}>
                  Service Needed *
                </label>
                <div className="relative">
                  <select
                    id="bk-service"
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    className={cn(inputCls, "appearance-none pr-10", errors.service && "border-red-400")}
                    aria-invalid={!!errors.service}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {site.services.items.map((s) => (
                      <option key={s.no} value={s.title}>
                        {s.no} — {s.title}
                      </option>
                    ))}
                    <option value="Not sure yet — let's talk">Not sure yet — let's talk</option>
                  </select>
                  <Chevron />
                </div>
                {err("service")}
              </div>
              <div>
                <label htmlFor="bk-budget" className={labelCls}>
                  Project Budget
                </label>
                <div className="relative">
                  <select id="bk-budget" value={form.budget} onChange={(e) => set("budget", e.target.value)} className={cn(inputCls, "appearance-none pr-10")}>
                    <option value="" disabled>
                      Select a range…
                    </option>
                    {site.booking.budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </div>
              </div>
              <div>
                <label htmlFor="bk-date" className={labelCls}>
                  Preferred Date
                </label>
                <input
                    id="bk-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                    className={inputCls}
                  />
              </div>
              <div>
                <label htmlFor="bk-time" className={labelCls}>
                  Preferred Time
                </label>
                <div className="relative">
                  <select id="bk-time" value={form.time} onChange={(e) => set("time", e.target.value)} className={cn(inputCls, "appearance-none pr-10")}>
                    <option value="" disabled>
                      Select a window…
                    </option>
                    {site.booking.timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="bk-details" className={labelCls}>
                  Project Details *
                </label>
                <textarea
                  id="bk-details"
                  rows={4}
                  value={form.details}
                  onChange={(e) => set("details", e.target.value)}
                  placeholder="What are you working on, what's the goal, and where are you stuck?"
                  className={cn(inputCls, "resize-y", errors.details && "border-red-400")}
                  aria-invalid={!!errors.details}
                />
                {err("details")}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-md bg-ink-950 py-4 text-sm font-bold text-paper transition-colors duration-300 hover:bg-accent hover:text-ink-950 disabled:cursor-wait disabled:opacity-80"
            >
              {status === "sending" ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                    <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  Sending request…
                </>
              ) : (
                <>
                  Send Booking Request
                  <IconSend width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
            <p className="mt-4 text-center text-xs leading-relaxed text-mut-light">
              Your details are only used to respond to your request. No newsletters, no spam — ever.
            </p>
          </form>
        )}
      </div>

      <style>{`@keyframes modal-in { from { opacity: 0; transform: translateY(28px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
    </div>
  );
}
