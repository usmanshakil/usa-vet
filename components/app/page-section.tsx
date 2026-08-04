import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export function PageSection({
  children,
  className,
}: PageSectionProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        className
      )}
    >
      {children}
    </section>
  );
}