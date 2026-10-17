import type { Metadata } from "next";
import { desktop } from "@/lib/content/desktop";
import { Notch } from "@/components/desktop/Notch";
import { Waitlist } from "@/components/desktop/Waitlist";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Desktop | Trace" };

export default function DesktopPage() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-5xl">
        {/* Laptop display with the notch along its top edge */}
        <div className="rounded-t-2xl border border-b-0 border-line bg-surface px-6 pb-20 sm:pb-28">
          <Notch />
          <h1 className="mx-auto mt-16 max-w-3xl text-center text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] sm:mt-24">
            {desktop.title[0]}
            <span className="mt-2 block text-accent">{desktop.title[1]}</span>
          </h1>
          <div className="mt-10 flex justify-center">
            <Waitlist />
          </div>
        </div>
        <div className="h-3 rounded-b-xl border border-line bg-subtle" />
      </Reveal>
    </section>
  );
}
