import Image from "next/image";
import forest from "@/public/forest.jpg";

// The forest photo, lightly graded for crisper, richer greens.
export function ForestImage({ preload = false, className = "" }: { preload?: boolean; className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={forest}
        alt=""
        fill
        preload={preload}
        placeholder="blur"
        sizes="100vw"
        className="object-cover [filter:saturate(1.15)_contrast(1.1)]"
      />
    </div>
  );
}
