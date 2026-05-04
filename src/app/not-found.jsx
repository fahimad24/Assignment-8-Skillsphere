import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center h-35 w-35 rounded-full bg-light-orange/10 mb-6">
            <span className="text-6xl font-bold text-light-orange">404</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full gradient-bg-2 px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Go Home
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-light-orange/10 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </main>
  );
}
