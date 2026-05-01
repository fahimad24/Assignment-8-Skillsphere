import Image from "next/image";

const InstructorCard = ({ instructor }) => (
  <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm">
    <div className="relative h-28 w-28 overflow-hidden rounded-full">
      <Image
        src={instructor.image}
        alt={instructor.name}
        fill
        className="object-cover"
      />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-slate-900">
        {instructor.name}
      </h4>
      <p className="text-sm text-slate-600">{instructor.title}</p>
    </div>
    <div className="mt-3 flex gap-3">
      <button className="rounded-full bg-light-orange px-4 py-1 text-sm font-medium text-white">
        Follow
      </button>
      <button className="rounded-full border border-slate-200 px-4 py-1 text-sm">
        Message
      </button>
    </div>
  </div>
);

export default InstructorCard;
