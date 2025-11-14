"use client";

import {
  CheckCircle,
  Globe,
  TrendingUp,
  Video,
} from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const coverageItems: BentoItem[] = [
  {
    title: "Understanding Your Numbers",
    meta: "Module 01",
    description:
      "Know exactly what numbers you need to know in your business and how to use them so you can see your profits grow.",
    icon: <TrendingUp className="w-4 h-4 text-blue-400" />,
    tags: ["Profit Clarity", "Metrics"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Identify Your Business Drivers",
    meta: "Module 02",
    description:
      "Pinpoint the areas that, when improved, make the biggest difference to your bottom line.",
    icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
    tags: ["Optimization"],
  },
  {
    title: "Marketing That Works!",
    meta: "Module 03",
    description:
      "Discover the best strategies to bring in more of your ideal customers cost effectively.",
    icon: <Video className="w-4 h-4 text-purple-400" />,
    tags: ["Acquisition", "Systems"],
    colSpan: 2,
  },
  {
    title: "Practical Business Strategies",
    meta: "Module 04",
    description:
      "Tips to help you work smarter, manage your time better, and lead your business with confidence.",
    icon: <Globe className="w-4 h-4 text-amber-400" />,
    tags: ["Leadership", "Execution"],
  },
];

export function BentoGridSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#dfe6ff] via-[#eef2ff] to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[32rem] w-[90%] -translate-x-1/2 bg-gradient-to-br from-indigo-300/50 via-white to-sky-200/40 blur-[150px]" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-600">
            Modules Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Here’s what we’ll cover
          </h2>
          <p className="text-base text-slate-600">
            Build clarity, traction, and confidence in four focused modules.
            Each card unlocks the next so you’re never guessing about what to do
            or which lever to pull to grow profitably.
          </p>
        </div>

        <div className="mt-16 rounded-[32px] bg-gradient-to-br from-white via-[#f3f6ff] to-[#e6edff] shadow-[0_40px_120px_rgba(30,41,59,0.2)] p-8 border border-slate-200/60">
          <BentoGrid items={coverageItems} />
        </div>
      </div>
    </section>
  );
}
