import { Globe } from "lucide-react";

function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8.5h8.6M8.97 13.75 4.66 6.3M15.03 13.75l-4.3 7.45" />
    </svg>
  );
}

const icons = { chrome: ChromeIcon, globe: Globe };

// Hero choice card: glass over the forest; hover lights the border and icon.
export function OptionCard({
  icon,
  label,
  sub,
  href,
}: {
  icon: keyof typeof icons;
  label: string;
  sub: string;
  href: string;
}) {
  const Icon = icons[icon];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.08] hover:shadow-[0_0_30px_-8px_rgba(0,255,102,0.45)]"
    >
      <span className="flex items-center gap-2 font-medium text-fg">
        <Icon className="size-[18px] text-muted transition-colors group-hover:text-accent" />
        {label}
      </span>
      <span className="mt-1 block text-sm leading-snug text-muted">{sub}</span>
    </a>
  );
}
