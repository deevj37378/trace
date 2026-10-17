import type { Metadata } from "next";
import { pricing } from "@/lib/content/pricing";
import { Calculator } from "@/components/pricing/Calculator";
import { Faq } from "@/components/pricing/Faq";
import { Closing } from "@/components/ui/Closing";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Pricing | Trace" };

export default function PricingPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 sm:pt-28">
        <Reveal className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-wider text-faint">{pricing.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.035em]">
            {pricing.title} <span className="text-accent">{pricing.subtitle}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{pricing.intro}</p>
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <Reveal delay={0.05} className="mx-auto max-w-6xl">
          <Calculator />
        </Reveal>
      </section>

      <section className="border-t border-line px-6 py-24">
        <Reveal className="mx-auto max-w-6xl">
          <Faq />
        </Reveal>
      </section>

      <div className="border-t border-line">
        <Closing />
      </div>
    </>
  );
}
