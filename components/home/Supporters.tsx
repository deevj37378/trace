import { supporters } from "@/lib/content/home";

export function Supporters() {
  // Two identical halves so the loop is seamless at -50%.
  const half = [...supporters.items, ...supporters.items, ...supporters.items];

  return (
    <section className="border-y border-line py-12">
      <h2 className="text-center font-mono text-xs uppercase tracking-[0.2em] text-moss">{supporters.title}</h2>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="animate-marquee flex w-max">
          {[...half, ...half].map((item, i) => (
            <li key={i} aria-hidden={i >= supporters.items.length} className="flex items-center gap-12 pr-12">
              <span className="flex items-baseline gap-2.5">
                <span className="text-sm text-faint">{item.role}</span>
                <span className="text-xl font-medium text-fg">{item.name}</span>
              </span>
              <span aria-hidden className="text-xs text-accent [text-shadow:0_0_10px_rgba(0,255,102,0.7)]">◆</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
