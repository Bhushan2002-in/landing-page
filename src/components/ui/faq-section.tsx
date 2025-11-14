"use client";

import type { ReactNode } from "react";

const faqs: Array<{ question: string; answer: ReactNode }> = [
  {
    question: "Why in person and not online?",
    answer:
      "There is a difference between efficient and effective. Yes, online sessions are efficient, but they’re nowhere near as effective as being in the room. I want you to get real value, so we’re doing this the effective way.",
  },
  {
    question: "Times, Dates and Location for workshop?",
    answer:
      "All Path to Profits workshops run at Gold Coast Business Coaching, Suite 31011 (Level 10), 9 Lawson St, Southport. Doors at 8.45am for a 9am start and we finish at 12 noon. Upcoming date: Thursday 22nd January, 2026.",
  },
  {
    question: "How much is it to attend and can I bring a friend?",
    answer: (
      <>
        This is a <strong>FREE</strong> event! I want you to come and learn. You’re welcome to bring a
        business friend—just have each person register separately so we capture names, dietary
        requirements, and contact details.
      </>
    ),
  },
  {
    question: "What business requirements do I need to attend?",
    answer:
      "There’s no official requirement, though I suggest you’re at least registered for GST. Startups are welcome if you’re treating it like a real business. Larger multi-site companies attend too—just bring a growth mindset.",
  },
  {
    question: "Where will I park?",
    answer:
      "After you register, I’ll email directions. The best parking is Athol Paterson Car Park (between Lawson and Suter Streets) at $8.70 per day. We’re also a short walk from the G-Link stop at Australia Fair.",
  },
];

export function FAQSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f2f6ff] via-white to-[#fff4ff] py-28 border-t border-slate-200/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 h-[140%] rounded-[60%] bg-gradient-to-r from-[#dce5ff]/60 via-transparent to-[#ffe1ff]/60 blur-[180px]" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-600">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Common questions before you join Path to Profits.
          </h2>
          <p className="text-slate-600">
            Still unsure? Here’s everything business owners ask before they lock in their seat.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.1)] p-8 space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">Before you register</p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Designed for business owners who want clarity, action, and accountability.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bring your numbers, questions, and energy. Tracey keeps it simple, practical, and
              focused on the drivers that actually improve profit.
            </p>
            <div className="rounded-2xl bg-white border border-slate-200/70 p-4 text-sm text-slate-600">
              Tip: List the key numbers or questions you need clarity on before the workshop so
              Tracey can help map them out during the session.
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-white/90 shadow-[0_15px_60px_rgba(15,23,42,0.08)] px-6 py-5"
              >
                <summary className="flex items-center justify-between cursor-pointer text-left gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-indigo-500/80">
                      Question {index + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-indigo-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
