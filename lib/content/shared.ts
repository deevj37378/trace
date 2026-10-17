// Copy and links shared across pages. All text is verbatim from https://gettrace.dev.

export const links = {
  home: "/",
  webApp: "https://app.gettrace.dev",
  desktop: "/desktop",
  docs: "/docs",
  pricing: "/pricing",
  login: "/login",
  privacy: "/privacy",
  terms: "/privacy",
  discord: "https://discord.gg/FmWuHSnWX",
  chromeExtension:
    "https://chromewebstore.google.com/detail/trace/picocfmhmdhpefnlajhbgmindmnikpip",
  x: "https://x.com/gettracedev",
  instagram: "https://www.instagram.com/gettrace.dev/",
  linkedin: "https://www.linkedin.com/company/gettrace/",
  email: "mailto:daksh@gettrace.dev",
} as const;

// Media is served from the original site.
export const media = "https://gettrace.dev";

export const nav = {
  items: [
    { label: "Web", href: links.webApp, isNew: true },
    { label: "Desktop", href: links.desktop, isNew: true },
    { label: "Docs", href: links.docs },
    { label: "Pricing", href: links.pricing },
    { label: "Community", href: links.discord },
  ],
  login: { label: "Login", href: links.login },
  cta: { label: "Try Trace", href: links.webApp },
};

export const closing = "Agents should live where code runs.";

export const footer = {
  year: 2026,
  copyright: "Trace. All rights reserved.",
  links: [
    { label: "Web App", href: links.webApp },
    { label: "Privacy", href: links.privacy },
    { label: "Terms", href: links.terms },
  ],
  socials: [
    { label: "Discord", href: links.discord, icon: "discord" },
    { label: "X (Twitter)", href: links.x, icon: "x" },
    { label: "Instagram", href: links.instagram, icon: "instagram" },
    { label: "LinkedIn", href: links.linkedin, icon: "linkedin" },
    { label: "Email", href: links.email, icon: "email" },
  ],
} as const;
