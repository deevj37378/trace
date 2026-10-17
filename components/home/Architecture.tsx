"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLenis } from "lenis/react";
import { Cpu, Layers, SlidersVertical, Sparkles, Terminal, Wrench, Zap } from "lucide-react";
import { architecture, type ArchitectureSlide } from "@/lib/content/home";
import { links } from "@/lib/content/shared";
import { mockups } from "@/components/home/ArchitectureMockups";
import { Rich } from "@/components/ui/Rich";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Layers, Cpu, Zap, Wrench, Terminal, SlidersVertical, Sparkles];
const total = architecture.slides.length;
const pad = (n: number) => String(n).padStart(2, "0");

export function Architecture() {
  return (
    <section id="architecture" className="border-t border-line">
      <PinnedSlides />
      <StackedSlides />
    </section>
  );
}

// Tablet/desktop: the section pins while scrolling; each 150vh of scroll swaps to the next slide.
function PinnedSlides() {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const slide = architecture.slides[active];
  const Mockup = mockups[slide.id];

  useMotionValueEvent(scrollYProgress, "change", (p) =>
    setActive(Math.min(total - 1, Math.max(0, Math.floor(p * total)))),
  );

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    // Land in the middle of the slide's scroll segment.
    const top = el.offsetTop + ((i + 0.5) / total) * (el.offsetHeight - window.innerHeight);
    if (lenis) lenis.scrollTo(top, { duration: 1 });
    else window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div ref={ref} className="relative hidden md:block" style={{ height: `${total * 150}vh` }}>
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col min-h-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            <div className="flex items-center gap-3">
              <span className="text-accent">{architecture.num}</span>
              <span className="h-px w-8 bg-moss" />
              <span className="text-fg">{architecture.label}</span>
              <span>/</span>
              <span className="text-muted">{slide.tag}</span>
            </div>
            <span className="flex items-center gap-2 tabular-nums">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_#00ff66]" />
              {pad(active + 1)} / {pad(total)}
            </span>
          </div>

          {/* Tabs */}
          <div className="mt-4 flex overflow-x-auto [scrollbar-width:none]">
            <div className="inline-flex gap-1 rounded-xl border border-line bg-subtle p-1">
              {architecture.slides.map((s, i) => {
                const Icon = icons[i];
                return (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    aria-current={i === active}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs transition-colors ${
                      i === active ? "bg-surface text-fg ring-1 ring-accent/30 shadow-[0_0_20px_-6px_rgba(0,255,102,0.5)]" : "text-muted hover:text-fg"
                    }`}
                  >
                    <Icon className={`size-3.5 ${i === active ? "text-accent" : ""}`} aria-hidden />
                    {s.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slide */}
          <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-10 py-6">
            <div className="col-span-6 max-h-full overflow-y-auto pr-2 [scrollbar-width:none]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <SlideText slide={slide} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Mockup />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between font-mono text-[11px] text-faint">
            <span>{architecture.scrollHint}</span>
            <span>
              <span className="text-accent">{slide.tabLabel}</span> · {active + 1} of {total}
            </span>
          </div>
          <div className="mt-2 h-px bg-line">
            <div
              className="h-px bg-accent shadow-[0_0_10px_#00ff66] transition-[width] duration-300"
              style={{ width: `${((active + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideText({ slide }: { slide: ArchitectureSlide }) {
  return (
    <>
      <h3 className="text-3xl font-medium leading-tight tracking-[-0.03em] lg:text-[2.5rem]">{slide.headline}</h3>
      <div className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-muted">
        {slide.paragraphs.map((p) => (
          <p key={p}>
            <Rich text={p} />
          </p>
        ))}
        {slide.kicker && <p className="text-fg">{slide.kicker}</p>}
      </div>
      <a
        href={links.docs}
        className="mt-6 inline-block rounded-md border border-line bg-surface px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:border-accent/50 hover:bg-subtle hover:text-accent"
      >
        [ {architecture.docsLabel} ]
      </a>
    </>
  );
}

// Phones: slides stack and reveal one by one as they scroll in.
function StackedSlides() {
  return (
    <div className="px-6 py-20 md:hidden">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        <span className="text-fg">{architecture.num}</span> <span className="text-accent">{architecture.label}</span>
      </p>
      <div className="mt-10 space-y-20">
        {architecture.slides.map((slide) => {
          const Mockup = mockups[slide.id];
          return (
            <Reveal key={slide.id}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                {slide.num} / {slide.tag}
              </p>
              <div className="mt-3">
                <SlideText slide={slide} />
              </div>
              <div className="mt-8">
                <Mockup />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
