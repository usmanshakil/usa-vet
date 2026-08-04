import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { WidgetHeader } from "./shared/widget-header";
import { todaysAppointments } from "../data/mock";
import { AppointmentItem } from "./appointment-item";

export function AppointmentTimeline() {
  return (
    <Card>
      <CardHeader>
        <WidgetHeader
          title="Today's Schedule"
          href="/appointments"
        />
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