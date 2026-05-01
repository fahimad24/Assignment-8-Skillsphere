import InstructorCard from "./InstructorCard";

const instructors = [
  {
    id: 1,
    name: "Dr. Angela Yu",
    title: "Full-Stack Instructor",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a3b5c8a1a2b3c4d5e6f",
  },
  {
    id: 2,
    name: "Colt Steele",
    title: "Web Development Coach",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b4c6d8e9f0a1b2c3d4e",
  },
  {
    id: 3,
    name: "Kirill Eremenko",
    title: "Data Science Mentor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c5d7e9f0a1b2c3d4e5f",
  },
];

const TopInstructors = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-light-orange">
            Top instructors
          </h3>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Learn from the best
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Real instructors, real projects, real outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {instructors.map((inst) => (
            <InstructorCard key={inst.id} instructor={inst} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
