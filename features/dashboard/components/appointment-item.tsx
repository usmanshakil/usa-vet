import { StatusBadge } from "./shared/status-badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import type { Appointment } from "../types";

interface AppointmentItemProps {
  appointment: Appointment;
}

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

          <StatusBadge status={appointment.status} />
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