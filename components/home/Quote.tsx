import { quote } from "@/lib/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function Quote() {
  return (
    <section className="border-t border-line px-6 py-28">
      <Reveal className="mx-auto max-w-3xl">
        <figure>
          <blockquote className="text-2xl leading-snug tracking-[-0.02em] sm:text-3xl">
            “{quote.text}”
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted">— {quote.author}</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
