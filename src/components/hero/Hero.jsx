import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex relative">
      <video
        className="h-175 w-full object-cover"
        src="/education-video.mp4"
        autoPlay
        loop
        muted
      />

      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-black/30 via-black/45 to-black/65 px-4 text-white backdrop-blur-[2px]">
        <div className="max-w-3xl rounded-3xl border border-white/15 bg-white/10 px-6 py-8 text-center shadow-2xl shadow-black/30 backdrop-blur-md sm:px-10 sm:py-12">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            Learn. Share. Grow.
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="gradient-bg-2 text-transparent bg-clip-text!">
              Skillsphere
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Discover courses, share your expertise, and connect with a vibrant
            community built for continuous learning and real-world growth.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/login">
              <button className="rounded-full gradient-bg-2 px-6 py-3 text-sm font-semibold transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-light-orange/30 focus:ring-offset-2 focus:ring-offset-transparent text-white cursor-pointer">
                Get Started
              </button>
            </Link>
            <Link href="/courses">
              <button className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer">
                Explore Skills
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
