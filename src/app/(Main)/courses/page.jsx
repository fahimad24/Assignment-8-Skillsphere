import CourseCard from "@/components/CourseCard";
import { getAllCourses } from "@/lib/getData";

const Courses = async () => {
  const courses = await getAllCourses();

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold text-center gradient-bg-2 text-transparent bg-clip-text!">
            All Courses
          </h1>
          <p className="text-center text-slate-600 max-w-xl mx-auto mt-4 text-lg">
            Explore our comprehensive collection of courses designed to enhance
            your skills and advance your career.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
