import { hero } from "@/lib/content/home";
import { OptionCard } from "@/components/ui/OptionCard";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
      <Reveal className="mx-auto max-w-6xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </p>

        <h1 className="mt-6 max-w-5xl text-[clamp(2.4rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.035em]">
          {hero.title[0]}
          <br />
          <span className="text-accent">{hero.title[1]}</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.description}</p>

        <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-2">
          {hero.options.map((o) => (
            <OptionCard key={o.label} {...o} />
          ))}
        </div>

        <p className="mt-5 text-sm text-muted">
          {hero.local.text} <span className="mx-1 text-faint">·</span>
          <a href={hero.local.href} className="text-fg transition-colors hover:text-accent">
            {hero.local.link} →
          </a>
        </p>
        <p className="mt-3 text-sm text-muted">
          <span className="font-medium text-fg">{hero.proof.count}</span> {hero.proof.text}
        </p>
      </Reveal>
    </section>
  );
}
