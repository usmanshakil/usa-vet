import Link from "next/link";

import { ChevronRight } from "lucide-react";

import type { QuickAction } from "../types";

interface Props {
  action: QuickAction;
}

export function QuickActionButton({
  action,
}: Props) {
  const Icon = action.icon;

  return (
    <Link
      href={action.href}
      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-600">
          <Icon className="h-5 w-5 text-blue-600 transition-colors group-hover:text-white" />
        </div>

        <span className="text-sm font-medium text-slate-800">
          {action.title}
        </span>
      </div>

      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}