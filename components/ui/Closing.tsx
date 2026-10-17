import { closing } from "@/lib/content/shared";
import { Reveal } from "@/components/ui/Reveal";

export function Closing() {
  return (
    <section className="px-6 py-32 sm:py-40">
      <Reveal>
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
          {closing}
        </h2>
      </Reveal>
    </section>
  );
}
