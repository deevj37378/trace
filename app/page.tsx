import { Hero } from "@/components/home/Hero";
import { InAction } from "@/components/home/InAction";
import { Architecture } from "@/components/home/Architecture";
import { Quote } from "@/components/home/Quote";
import { Supporters } from "@/components/home/Supporters";
import { Closing } from "@/components/ui/Closing";

export default function Home() {
  return (
    <>
      <Hero />
      <InAction />
      <Architecture />
      <Quote />
      <Supporters />
      <Closing />
    </>
  );
}
