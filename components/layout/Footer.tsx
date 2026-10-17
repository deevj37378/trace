import { Mail } from "lucide-react";
import { footer } from "@/lib/content/shared";
import { Logo } from "@/components/ui/Logo";

const svg = { viewBox: "0 0 24 24", className: "size-4", "aria-hidden": true } as const;

const icons = {
  discord: (
    <svg {...svg} fill="currentColor">
      <path d="M19.6 5.3A17 17 0 0 0 15.4 4l-.5 1a15.8 15.8 0 0 0-5.8 0l-.5-1a17 17 0 0 0-4.2 1.3C1.7 9.3 1 13.2 1.3 17a17 17 0 0 0 5.2 2.6l1.1-1.8c-.6-.2-1.2-.5-1.8-.9l.4-.3a12.2 12.2 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l1.1 1.8a17 17 0 0 0 5.2-2.6c.4-4.4-.7-8.3-3.1-11.7ZM8.5 14.8c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1Zm7 0c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1Z" />
    </svg>
  ),
  x: (
    <svg {...svg} fill="currentColor">
      <path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.2H4.3l13.3 17.5Z" />
    </svg>
  ),
  instagram: (
    <svg {...svg} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg {...svg} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9.5Z" />
    </svg>
  ),
  email: <Mail className="size-4" aria-hidden />,
};

export function Footer() {
  return (
    <footer className="border-t border-line px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <p className="text-sm text-faint">
            © {footer.year} {footer.copyright}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <ul className="flex gap-5 text-sm text-muted">
            {footer.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-1">
            {footer.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target={s.icon === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex size-8 items-center justify-center rounded-md text-faint transition-colors hover:bg-subtle hover:text-fg"
                >
                  {icons[s.icon]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
