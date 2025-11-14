"use client";

import { useEffect, useRef } from "react";

const WORKSHOP_VIDEO = "https://www.youtube.com/embed/_GvkjpGVLMs";

export function WorkshopSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#e8ecff] via-white to-[#dfe5ff] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] bg-sky-400/30 blur-[150px]" />
        <div className="absolute top-1/2 left-[-10%] h-[32rem] w-[32rem] bg-indigo-400/25 blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-slate-600">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-600">Workshop Experience</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              A Workshop To Boost Your Profits
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Roll up your sleeves, understand your numbers, and leave with an action plan built for
              the real world.
            </p>
            <p className="text-base leading-relaxed">
              If you’ve been feeling like your business could be more profitable – but you’re not
              quite sure where to start – you’re not alone! Many Small Business Owners work hard
              every day without a clear roadmap for what will actually make the biggest difference to
              their bottom line.
            </p>
            <p className="text-base leading-relaxed">
              That’s exactly why I created Path to Profits – a practical, friendly, and hands-on
              workshop designed to help Gold Coast Small Business Owners understand their numbers,
              uncover their key profit drivers, and leave with an action plan that works in the real
              world.
            </p>
            <p className="text-base leading-relaxed">
              This isn’t a theory-heavy seminar where you leave wondering what to do next. It’s a
              roll-up-your-sleeves, interactive day where you’ll work directly on your business with
              my guidance every step of the way.
            </p>
          </div>

          <div className="space-y-10">
            <div className="relative rounded-[32px] border border-slate-200 overflow-hidden shadow-[0_25px_110px_rgba(15,23,42,0.2)] w-full aspect-[16/9] min-h-[320px]">
              <WorkshopVideo src={WORKSHOP_VIDEO} />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-indigo-200 via-transparent to-white blur-2xl opacity-80" />
              <div className="relative rounded-[32px] border border-slate-200 bg-gradient-to-b from-white via-[#f2f4ff] to-[#e4e9ff] backdrop-blur-2xl p-8 text-slate-600 shadow-[0_35px_140px_rgba(15,23,42,0.2)]">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What to expect</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    Path to Profits Workshop
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    An intimate, high-touch day focused on clarity and execution.
                  </p>
                </div>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <p>Guided exercises to map the exact numbers that influence your profits.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <p>Live support identifying the key drivers that unlock more revenue.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <p>Action worksheets so you walk away with a confident plan for immediate use.</p>
                  </li>
                </ul>
                <div className="mt-10 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 text-center shadow-inner">
                  “Bring your spreadsheets, notebooks, and questions—we’ll work through them together
                  so nothing feels abstract.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkshopVideo({ src }: { src: string }) {
  return (
    <iframe
      src={`${src}?autoplay=1&mute=1&rel=0`}
      title="Workshop experience"
      allow="autoplay"
      loading="lazy"
      className="h-full w-full object-cover"
    />
  );
}
