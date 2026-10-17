import { hero } from "@/lib/content/home";
import { OptionCard } from "@/components/ui/OptionCard";
import { Reveal } from "@/components/ui/Reveal";
import { HeroFrame } from "@/components/home/HeroFrame";

// Framed window onto the forest, copy on a floating glass panel.
export function Hero() {
  return (
    <section className="relative px-4 pb-20 pt-4 sm:px-6 sm:pb-28 sm:pt-6">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-[320px] w-[620px] rounded-full bg-moss/15 blur-[140px]" />
        <div className="absolute right-[10%] top-[35%] h-[320px] w-[520px] rounded-full bg-dusk/25 blur-[140px]" />
      </div>

      <HeroFrame>
        <Reveal>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[12px] text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_#00ff66]" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 text-[clamp(2.25rem,4.4vw,4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-fg">
            {hero.title[0]}
            <br />
            <span className="bg-gradient-to-r from-accent via-[#3fdc85] to-[#7fb894] bg-clip-text text-transparent [filter:drop-shadow(0_0_30px_rgba(0,255,102,0.3))]">
              {hero.title[1]}
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#c3d4ca] lg:text-[17px]">{hero.description}</p>

          <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
            {hero.options.map((o) => (
              <OptionCard key={o.label} {...o} />
            ))}
          </div>

          <p className="mt-5 text-sm text-muted">
            {hero.local.text} <span className="mx-1 text-faint">·</span>
            <a href={hero.local.href} className="font-medium text-fg transition-colors hover:text-accent">
              {hero.local.link} →
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">
            <span className="font-mono font-semibold text-accent">{hero.proof.count}</span> {hero.proof.text}
          </p>
        </Reveal>
      </HeroFrame>
    </section>
  );
}
