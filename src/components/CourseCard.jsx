import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const {
    image,
    title,
    instructor,
    duration,
    rating,
    level,
    description,
    category,
    popular,
  } = course;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-lg backdrop-blur transition-shadow hover:shadow-md">
      <div className="relative">
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <Image
            src={image}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            alt={title}
            loading="eager"
          />
        </div>
        <div className="absolute left-4 top-4 flex gap-2">
          {popular && (
            <span className="rounded-full bg-light-orange px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30">
              Popular
            </span>
          )}
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
            {title}
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">By {instructor}</p>
            <span className="text-sm text-slate-500">{duration}</span>
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {description}
        </p>
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex justify-between gap-2 text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
              {level}
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-700">
              {rating.toFixed(1)} / 5
            </span>
          </div>
          <div>
            <Link
              href={`/courses/${course.id}`}
              className="inline-flex items-center gap-1 rounded-full gradient-bg-2 px-7 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:shadow-md"
            >
              View Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
