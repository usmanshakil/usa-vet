import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Status =
  | "confirmed"
  | "pending"
  | "completed"
  | "cancelled";

interface StatusBadgeProps {
  status: Status;
}

const variants: Record<Status, string> = {
  confirmed:
    "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",

  pending:
    "bg-amber-100 text-amber-700 hover:bg-amber-100",

  completed:
    "bg-slate-100 text-slate-700 hover:bg-slate-100",

  cancelled:
    "bg-red-100 text-red-700 hover:bg-red-100",
};

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <Badge className={cn(variants[status])}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}