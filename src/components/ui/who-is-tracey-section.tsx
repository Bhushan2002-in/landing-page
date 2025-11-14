"use client";

import Image from "next/image";

export function WhoIsTraceySection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#f6f8ff] to-white border-t border-slate-200/60 py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 h-[140%] rounded-[55%] bg-gradient-to-r from-[#dee2ff]/60 via-transparent to-[#ffdff3]/60 blur-[170px]" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative w-full h-[520px] rounded-[36px] overflow-hidden border border-slate-200 shadow-[0_30px_120px_rgba(15,23,42,0.18)] bg-white">
            <Image
              src="/images/who-is-tracey.jpg"
              alt="Tracey Leak smiling with a laptop"
              fill
              className="object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>

          <div className="space-y-6 text-slate-600">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-600">Who is Tracey?</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Your guide to profit clarity and calm execution.
            </h2>
            <p>
              Tracey has been coaching, training and speaking to small business owners for the last
              20 years! She is a best-selling author and has spoken on business stages all around
              Australia and overseas, while calling the Gold Coast home.
            </p>
            <p>
              Tracey is known for her practical, down-to-earth style and her ability to keep things
              simple so business owners can maximise their profits.
            </p>
            <p>
              Come learn with Tracey in the Path to Profits workshop for this special <strong>FREE</strong>{" "}
              offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
