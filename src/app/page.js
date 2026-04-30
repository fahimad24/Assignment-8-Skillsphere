import Hero from "@/components/hero/Hero";
import LearningTip from "@/components/LearningTip";
import Popular from "@/components/Popular";


export default function Home() {
  return (
    <main className="bg-light-orange/5">
      <Hero />
      <Popular />
      <LearningTip />
    </main>
  );
}
