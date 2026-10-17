import { closing } from "@/lib/content/shared";
import { Reveal } from "@/components/ui/Reveal";
import { ForestImage } from "@/components/home/ForestImage";

// Home-page closing: the forest returns as a dim backdrop that fades into the footer.
export function ForestClosing() {
  return (
    <section className="relative overflow-hidden px-6 py-32 sm:py-44">
      <ForestImage className="opacity-35" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-64 w-[640px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <Reveal className="relative">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
          {closing}
        </h2>
      </Reveal>
    </section>
  );
}
