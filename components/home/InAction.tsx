"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { inAction } from "@/lib/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function InAction() {
  const [active, setActive] = useState(0);
  const tab = inAction.tabs[active];

  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{inAction.title}</h2>
          <div role="tablist" aria-label={inAction.title} className="flex gap-6 overflow-x-auto">
            {inAction.tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`relative shrink-0 pb-2 text-sm transition-colors ${
                  i === active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {t.title}
                {i === active && (
                  <motion.span layoutId="in-action-underline" className="absolute inset-x-0 bottom-0 h-px bg-fg" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <video
              key={tab.id}
              className="aspect-video w-full object-cover"
              src={tab.src}
              poster={tab.poster}
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={() => setActive((active + 1) % inAction.tabs.length)}
            />
          </div>
          <p className="mt-4 text-sm text-muted">{tab.desc}</p>
        </Reveal>
      </div>
    </section>
  );
}
