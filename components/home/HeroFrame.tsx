import { ForestImage } from "@/components/home/ForestImage";

// Viewfinder marks in the frame's corners.
const corners = [
  "left-4 top-4 border-l border-t",
  "right-4 top-4 border-r border-t",
  "bottom-4 left-4 border-b border-l",
  "bottom-4 right-4 border-b border-r",
];

// The hero's framed window onto the forest, with the copy on a floating glass panel.
export function HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,255,102,0.04),inset_0_1px_0_rgba(255,255,255,0.08)] lg:h-[min(calc(100svh-7rem),62vw)] lg:min-h-[700px]">
      <div className="relative aspect-video overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
        <ForestImage preload />
        {/* Phones/tablets: the photo is a banner that hands off to the copy below it. */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent lg:hidden" />
        {corners.map((c) => (
          <span key={c} aria-hidden className={`absolute hidden size-4 border-accent/70 lg:block ${c}`} />
        ))}
      </div>

      <div className="relative z-10 -mt-10 px-5 pb-8 sm:px-8 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center lg:px-12 lg:py-10 xl:px-16">
        <div className="lg:max-w-[580px] lg:rounded-2xl lg:border lg:border-white/12 lg:bg-[#05070a]/55 lg:p-8 xl:p-10 lg:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] lg:backdrop-blur-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
