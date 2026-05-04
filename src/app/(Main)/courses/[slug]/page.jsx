import { getCourseById } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Details = async ({ params }) => {
  const { slug } = await params;
  const course = await getCourseById(slug);
  console.log(slug);
  if (!course) {
    notFound();
  }

  // Get curriculum and goals from course data
  const curriculum = course.curriculum || [];
  const aiGoals = course.goals || [];

  return (
    <main className="bg-light-orange/5 ">
      <div className="mx-auto max-w-6xl space-y-10  py-16 px-6 lg:px-8 xl:px-0">
        {/* Main Course Content */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="relative aspect-video bg-slate-100">
              <Image
                src={course.image}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                alt={course.title}
              />
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-light-orange px-3 py-1 text-xs font-semibold text-white">
                  {course.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {course.level}
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {course.rating} / 5
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {course.title}
                </h1>
                <p className="text-lg text-slate-600">By {course.instructor}</p>
              </div>

              <p className="max-w-3xl text-base leading-7 text-slate-600">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Back to courses
                </Link>
              </div>
            </div>
          </section>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Course overview
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Quick facts
              </h2>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Price</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  ${course.price || "TBD"}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Duration</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.duration}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Level</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.level}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Rating</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.rating} / 5
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.category}
                </p>
              </div>
            </div>

            <button className="w-full rounded-full bg-light-orange px-6 py-3 font-semibold text-white transition hover:opacity-90">
              Enroll Now
            </button>
          </aside>
        </div>

        {/* AI Goals Section */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Learning Outcomes
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              AI Learning Goals
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {aiGoals.map((goal, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light-orange">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <p className="text-slate-700">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Curriculum Section */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Course Content
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Course Curriculum
            </h2>
          </div>
          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-light-orange font-semibold text-white">
                    {item.module}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-3 space-y-2 pl-11">
                  {item.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <p className="text-slate-600">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
