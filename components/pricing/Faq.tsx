"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { pricing } from "@/lib/content/pricing";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
      <div>
        <h2 className="text-2xl font-medium tracking-[-0.02em]">{pricing.faq.title}</h2>
        <p className="mt-2 text-muted">{pricing.faq.sub}</p>
      </div>
      <ul className="border-t border-line">
        {pricing.faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-medium">{item.q}</span>
                {isOpen ? (
                  <Minus className="size-4 shrink-0 text-muted" aria-hidden />
                ) : (
                  <Plus className="size-4 shrink-0 text-muted" aria-hidden />
                )}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 leading-relaxed text-muted">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
