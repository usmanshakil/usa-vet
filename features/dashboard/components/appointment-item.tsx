import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import type { Appointment } from "../types";

interface AppointmentItemProps {
  appointment: Appointment;
}

const statusVariant = {
  confirmed: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  pending: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  completed: "bg-slate-100 text-slate-700 hover:bg-slate-100",
};

export function AppointmentItem({
  appointment,
}: AppointmentItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border p-4 transition-colors hover:bg-slate-50">
      <div className="min-w-[60px]">
        <p className="text-sm font-semibold">
          {appointment.time}
        </p>
      </div>

      <Avatar>
        <AvatarFallback>
          {appointment.pet.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">
            {appointment.pet}
          </h4>

          <Badge
            className={statusVariant[appointment.status]}
          >
            {appointment.status}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          {appointment.type}
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          {appointment.veterinarian}
        </p>
      </div>
    </div>
  );
}