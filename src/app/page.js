import Hero from "@/components/hero/Hero";
import LearningTip from "@/components/LearningTip";
import Popular from "@/components/Popular";
import TopInstructors from "@/components/Top-Instructors/TopInstructors";


export default function Home() {
  return (
    <main className="bg-light-orange/5">
      <Hero />
      <Popular />
      <LearningTip />
      <TopInstructors />
    </main>
  );
}
