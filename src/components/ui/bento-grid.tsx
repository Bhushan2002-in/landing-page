import {
  CheckCircle,
  Clock,
  Globe,
  Star,
  TrendingUp,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StatusType = "Live" | "Updated" | "Beta" | "Coming Soon" | string;

export interface BentoItem {
  title: string;
  meta: string;
  description: string;
  icon: React.ReactNode;
  status?: StatusType;
  tags?: string[];
  colSpan?: 1 | 2;
  hasPersistentHover?: boolean;
}

export interface BentoItems extends Array<BentoItem> {}

const statusStyles: Record<StatusType, string> = {
  Live: "text-emerald-700 bg-emerald-100 border-emerald-200",
  Updated: "text-sky-700 bg-sky-100 border-sky-200",
  Beta: "text-amber-700 bg-amber-100 border-amber-200",
  "Coming Soon": "text-slate-600 bg-slate-100 border-slate-200",
};

const defaultItems: BentoItem[] = [
  {
    title: "Analytics Dashboard",
    meta: "v2.4.1",
    description:
      "Real-time metrics with AI-powered insights and predictive analytics",
    icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
    tags: ["Statistics", "Reports", "AI"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Task Manager",
    meta: "84 completed",
    description: "Automated workflow management with priority scheduling",
    icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    tags: ["Productivity", "Automation"],
  },
  {
    title: "Media Library",
    meta: "12GB used",
    description: "Cloud storage with intelligent content processing",
    icon: <Video className="w-4 h-4 text-purple-500" />,
    tags: ["Storage", "CDN"],
    colSpan: 2,
  },
  {
    title: "Global Network",
    meta: "6 regions",
    description: "Multi-region deployment with edge computing",
    icon: <Globe className="w-4 h-4 text-sky-500" />,
    tags: ["Infrastructure", "Edge"],
  },
];

function StatusBadge({ status }: { status?: StatusType }) {
  if (!status) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium uppercase tracking-wide",
        statusStyles[status] ?? "text-slate-600 bg-slate-100 border-slate-200"
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
      {label}
    </span>
  );
}

export function BentoGrid({
  items = defaultItems,
}: {
  items?: BentoItems;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, idx) => {
        const isFullWidth = item.colSpan === 2;

        return (
          <div
            key={idx}
            className={cn(
              "group relative rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-[#edf2ff] to-[#e0e7ff] backdrop-blur-xl p-6 overflow-hidden",
              "transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.25)]",
              isFullWidth ? "md:col-span-2" : "md:col-span-1",
              item.hasPersistentHover &&
                "shadow-[0_20px_60px_rgba(15,23,42,0.15)] border-slate-300"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-sky-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between relative z-10 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {item.meta}
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </p>
                </div>
              </div>
              <StatusBadge status={item.status} />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              {item.description}
            </p>

            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {item.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-100/70 via-transparent to-transparent pointer-events-none" />
          </div>
        );
      })}
    </div>
  );
}
