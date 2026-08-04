import { ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
      <div className="mb-5 rounded-full bg-slate-100 p-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm text-slate-500">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}