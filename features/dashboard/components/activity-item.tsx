import {
  CalendarCheck,
  FileText,
  PawPrint,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type { Activity } from "../types";

interface ActivityItemProps {
  activity: Activity;
}

const activityConfig = {
  appointment: {
    icon: CalendarCheck,
    wrapper: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  patient: {
    icon: PawPrint,
    wrapper: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  invoice: {
    icon: FileText,
    wrapper: "bg-amber-100",
    iconColor: "text-amber-600",
  },
} as const;

export function ActivityItem({
  activity,
}: ActivityItemProps) {
  const config = activityConfig[activity.type];
  const Icon = config.icon;

  return (
    <div className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110",
          config.wrapper
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5",
            config.iconColor
          )}
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-slate-900">
          {activity.title}
        </h4>

        <p className="mt-1 text-sm text-slate-600">
          {activity.description}
        </p>

        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          {activity.time}
        </p>
      </div>
    </div>
  );
}