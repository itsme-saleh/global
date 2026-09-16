import type { ReactElement, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </svg>
);
export const IconArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h16m-6.5-6.5L20 12l-6.5 6.5" />
  </svg>
);
export const IconArrowDown = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4v16m-6.5-6.5L12 20l6.5-6.5" />
  </svg>
);
export const IconArrowUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20V4m-6.5 6.5L12 4l6.5 6.5" />
  </svg>
);
export const IconPlus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);
export const IconStar = (p: P) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.6z" />
  </svg>
);
export const IconTrendUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 17.5 9.5 11l4 4L21 7m-6.5 0H21v6.5" />
  </svg>
);
export const IconTrendDown = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 6.5 9.5 13l4-4L21 17m-6.5 0H21v-6.5" />
  </svg>
);
export const IconTarget = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);
export const IconMegaphone = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 10.5v3a1.5 1.5 0 0 0 1.5 1.5H7l4.5 4V5.5L7 9.5H4.5A1.5 1.5 0 0 0 3 10.5Z" />
    <path d="M15 9a4.2 4.2 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" />
  </svg>
);
export const IconSearch = (p: P) => (
  <svg {...base(p)}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5 5" />
  </svg>
);
export const IconChart = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 4v16h16" />
    <path d="M8 16v-5m4.5 5V8m4.5 8v-3" />
  </svg>
);
export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m4 7.5 8 6 8-6" />
  </svg>
);
export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5.5 4h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z" />
  </svg>
);
export const IconMapPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.3-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.7 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </svg>
);
export const IconCalendar = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 9.5h17M8 3v4m8-4v4" />
  </svg>
);
export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
export const IconSend = (p: P) => (
  <svg {...base(p)}>
    <path d="M20.5 3.5 3.5 10.2l7 2.6m10-9.3-6.4 16.9-3.6-7.6m10-9.3-10 9.3" />
  </svg>
);
export const IconSpark = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
  </svg>
);
export const IconQuote = (p: P) => (
  <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M9.6 6C6.8 7.5 5 10 5 13.1 5 15.8 6.7 18 9.2 18c2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.4-3.3-3.4-.3 0-.8.05-.9.1.3-1.6 1.6-3.2 3.1-4L9.6 6Zm9 0c-2.8 1.5-4.6 4-4.6 7.1 0 2.7 1.7 4.9 4.2 4.9 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.4-3.3-3.4-.3 0-.8.05-.9.1.3-1.6 1.6-3.2 3.1-4L18.6 6Z" />
  </svg>
);
export const IconWhatsApp = (p: P) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.2-.8l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.1-.7 3.5a11 11 0 0 0 4.5 5c1.6.9 2.7 1.1 3.6 1 .8-.1 1.5-.6 1.8-1.2.2-.5.2-1 .1-1.1l-.5-.2Z" />
  </svg>
);
export const IconLinkedIn = (p: P) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" />
  </svg>
);
export const IconInstagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
export const IconFacebook = (p: P) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M13.5 21v-7h2.6l.4-3.2h-3V8.6c0-.9.3-1.6 1.7-1.6h1.5V4.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.9H8V14h2.7v7h2.8Z" />
  </svg>
);
export const IconXSocial = (p: P) => (
  <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M17.7 3H21l-7.2 8.3L22.3 21h-6.6l-5.2-6.2L4.6 21H1.3l7.7-8.9L1.8 3h6.8l4.7 5.7L17.7 3Zm-1.2 16h1.8L7.3 4.9H5.4L16.5 19Z" />
  </svg>
);

export const socialIcon = (icon: string, className?: string) => {
  const map: Record<string, (p: P) => ReactElement> = {
    linkedin: IconLinkedIn,
    instagram: IconInstagram,
    facebook: IconFacebook,
    x: IconXSocial,
    whatsapp: IconWhatsApp,
  };
  const C = map[icon] ?? IconArrowUpRight;
  return <C className={className} />;
};
