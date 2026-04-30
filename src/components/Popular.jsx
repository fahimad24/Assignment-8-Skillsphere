import { getPopularCourses } from "@/lib/getData";
import CourseCard from "@/components/CourseCard";

const Popular = async () => {
  const popularCourses = await getPopularCourses();

  return (
    <section className="relative overflow-hidden  px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex justify-center text-center">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex rounded-full border border-slate-200 gradient-bg-2 px-4 py-1 text-sm font-medium text-white shadow-sm backdrop-blur">
              Curated for learners
            </span>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Popular courses built to move you forward.
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-slate-700 sm:text-base">
                Explore high-value courses that combine practical learning,
                strong instructors, and beginner-friendly structure.
              </p>
            </div>
          </div>
        </div>

        {popularCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-center text-slate-700 shadow-lg backdrop-blur">
            <p className="text-lg font-medium text-slate-950">
              No popular courses yet
            </p>
            <p className="mt-2 text-sm leading-6">
              Once the course API returns data, featured courses will appear
              here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Popular;
