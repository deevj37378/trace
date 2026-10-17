import { quote } from "@/lib/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function Quote() {
  return (
    <section className="relative overflow-hidden border-t border-line px-6 py-28 sm:py-36">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-72 w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-dusk/30 blur-[130px]" />
      <Reveal className="relative mx-auto max-w-3xl">
        <figure>
          <blockquote className="border-l-2 border-moss pl-6 text-2xl leading-snug tracking-[-0.02em] sm:pl-8 sm:text-3xl">
            “{quote.text}”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3 pl-6 font-mono sm:pl-8 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="h-px w-8 bg-accent" />
            {quote.author}
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
