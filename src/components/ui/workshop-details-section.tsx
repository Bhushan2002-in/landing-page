"use client";

const dates = [
  { label: "Saturday", value: "15th November, 2025" },
  { label: "Thursday", value: "4th December, 2025" },
];

const takeaways = [
  "A clear roadmap with the actions you need to take to improve your profits",
  "The confidence to take action immediately",
  "A fresh perspective on your business",
];

export function WorkshopDetailsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#dee6ff] via-white to-[#dbe3ff] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-[28rem] w-[80%] -translate-x-1/2 bg-gradient-to-br from-indigo-300 via-white to-sky-200 blur-[150px]" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-600">
            Why This Workshop Works…
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Built for real Gold Coast businesses, not theory.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            With over 20 years of experience coaching small business owners, I
            know the challenges you face – and how to turn them into
            opportunities. This workshop is run in a small group format
            (12 people max.) so you’ll get the chance to ask questions, get
            tailored advice and learn from others in the room.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-b from-white via-[#f5f6ff] to-[#eaefff] p-8 text-slate-600 shadow-[0_30px_110px_rgba(15,23,42,0.2)]">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              By the end of the workshop, you’ll walk out with:
            </h3>
            <ul className="space-y-4 text-base leading-relaxed">
              {takeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-[#f4f6ff] to-[#e5ecff] p-6 text-slate-600 shadow-[0_30px_110px_rgba(15,23,42,0.2)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Upcoming Dates
              </p>
              <div className="mt-4 space-y-3">
                {dates.map((date) => (
                  <div
                    key={date.value}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-inner"
                  >
                    <span className="text-sm text-slate-600">{date.label}</span>
                    <span className="text-slate-900 font-semibold">
                      {date.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-center shadow-inner">
                <span className="font-semibold text-slate-900 text-base">
                  Time: 9am to 12 noon
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-[#f4f6ff] to-[#e7ecff] p-6 text-slate-600 shadow-[0_30px_110px_rgba(15,23,42,0.2)] space-y-4 text-sm leading-relaxed">
              <div>
                <p className="uppercase tracking-[0.3em] text-slate-500 text-xs">
                  Where
                </p>
                <p className="mt-2 text-base text-slate-900">
                  Gold Coast Business Coaching
                </p>
                <p className="text-slate-600">
                  Suite 31011 (Level 10), 9 Lawson St, Southport
                </p>
              </div>
              <div>
                <p className="uppercase tracking-[0.3em] text-slate-500 text-xs">
                  Investment
                </p>
                <p className="mt-2 text-slate-900 font-semibold text-lg">
                  FREE <span className="text-slate-500 text-sm">(Valued at $297 pp)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
