import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import type { Appointment } from "../types";

interface AppointmentItemProps {
  appointment: Appointment;
}

const badgeVariants = {
  confirmed:
    "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  pending:
    "bg-amber-100 text-amber-700 hover:bg-amber-100",
  completed:
    "bg-slate-100 text-slate-700 hover:bg-slate-100",
};

export function AppointmentItem({
  appointment,
}: AppointmentItemProps) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="w-14 shrink-0 text-sm font-semibold text-slate-900">
        {appointment.time}
      </div>

      <Avatar className="h-11 w-11">
        <AvatarFallback className="bg-slate-100 font-semibold text-slate-600 transition-colors group-hover:bg-blue-100 group-hover:text-blue-700">
          {appointment.pet
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-slate-900">
          {appointment.pet}
        </h4>

        <p className="text-sm text-slate-600">
          {appointment.type}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {appointment.veterinarian}
        </p>
      </div>

      <Badge
        className={
          badgeVariants[appointment.status]
        }
      >
        {appointment.status}
      </Badge>
    </div>
  );
}