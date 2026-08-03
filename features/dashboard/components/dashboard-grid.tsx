import type { ReactNode } from "react";

interface DashboardGridProps {
  left: ReactNode;
  right: ReactNode;
}

export function DashboardGrid({
  left,
  right,
}: DashboardGridProps) {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        {left}
      </div>

      <div className="space-y-6">
        {right}
      </div>
    </div>
  );
}