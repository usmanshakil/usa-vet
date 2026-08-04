import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface WidgetHeaderProps {
  title: string;
  href?: string;
}

export function WidgetHeader({
  title,
  href,
}: WidgetHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold tracking-tight">
        {title}
      </h2>

      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
        >
          View all

          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}