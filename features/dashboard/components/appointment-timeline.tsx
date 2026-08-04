import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { todaysAppointments } from "../data/mock";
import { AppointmentItem } from "./appointment-item";

export function AppointmentTimeline() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          Today's Schedule
        </CardTitle>

        <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
          View all

          <ArrowRight className="h-4 w-4" />
        </button>
      </CardHeader>

      <CardContent className="space-y-4">
        {todaysAppointments.map((appointment) => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
          />
        ))}
      </CardContent>
    </Card>
  );
}