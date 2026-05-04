"use client";

import CourseCard from "@/components/CourseCard";
import { getAllCourses } from "@/lib/getData";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getAllCourses();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") || "";
    setSearchQuery(query);
  };

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

        {/* Search Section */}
        <div className="mt-10 max-w-2xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center  text-slate-900 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-light-orange focus:border-transparent shadow-sm overflow-hidden"
          >
            <input
              type="text"
              name="search"
              placeholder="Search courses by title..."
              className="w-full ring-0 outline-none text-sm placeholder-slate-400 px-6 py-3 pl-12 pr-4"
            />
            <div>
              <button
                type="submit"
                className="bg-light-orange px-6 py-3 font-bold text-white cursor-pointer hover:bg-light-orange/90 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
          <div>
            {searchQuery && (
              <p className="text-sm text-center text-slate-500 mt-2">
                Found {filteredCourses.length} course
                {filteredCourses.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="text-slate-600">Loading courses...</div>
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-4 text-slate-600">
              No courses found for &quot;{searchQuery}&quot;. Try another
              search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
