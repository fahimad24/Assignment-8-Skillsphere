import Hero from "@/components/hero/Hero";
import LearningTip from "@/components/LearningTip";
import Popular from "@/components/Popular";
import TopInstructors from "@/components/Top-Instructors/TopInstructors";
import TrendingCourses from "@/components/TrenCourses";


export default function Home() {
  return (
    <main className="bg-light-orange/5">
      <Hero />
      <Popular />
      <TrendingCourses />
      <LearningTip />
      <TopInstructors />
    </main>
  );
}
