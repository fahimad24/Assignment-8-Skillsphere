const LearningTip = () => {
  const studyTechniques = [
    "Use active recall instead of passive rereading.",
    "Take short notes in your own words after each lesson.",
    "Practice with small projects to lock in what you learned.",
  ];

  const timeManagementTips = [
    "Study in focused 25-minute blocks with short breaks.",
    "Set one clear goal before each session.",
    "Review previous lessons before starting a new topic.",
  ];

  return (
    <section className="bg-light-orange/5 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white/80 px-6 py-10 shadow-xl shadow-light-orange/10 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl space-y-4">
          <span className="inline-flex rounded-full gradient-bg-2 px-4 py-1 text-sm font-medium text-white shadow-sm">
            Learning Tips
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Build better habits, learn faster.
          </h2>
          <p className="text-sm leading-6 text-slate-600 sm:text-base">
            A few practical techniques can make your study sessions more
            effective and easier to maintain over time.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-light-orange/5 p-6">
            <h3 className="text-xl font-semibold text-slate-950">
              Study techniques
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              {studyTechniques.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-light-orange" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-light-orange/5 p-6">
            <h3 className="text-xl font-semibold text-slate-950">
              Time management tips
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              {timeManagementTips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-light-orange" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LearningTip;
