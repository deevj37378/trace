// The one button style used everywhere: quiet outline, soft fill on hover.
export const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors duration-150 hover:border-line-strong hover:bg-subtle";

export function Button({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noreferrer" })}
      className={`${buttonClass} ${className}`}
    >
      {children}
    </a>
  );
}
