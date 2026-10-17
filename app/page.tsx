import { Hero } from "@/components/home/Hero";
import { InAction } from "@/components/home/InAction";
import { Architecture } from "@/components/home/Architecture";
import { Quote } from "@/components/home/Quote";
import { Supporters } from "@/components/home/Supporters";
import { ForestClosing } from "@/components/home/ForestClosing";

export default function Home() {
  return (
    <div data-forest>
      <Hero />
      <InAction />
      <Architecture />
      <Quote />
      <Supporters />
      <ForestClosing />
    </div>
  );
}
