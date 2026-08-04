import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { WidgetHeader } from "./shared/widget-header";
import { recentPatients } from "../data/mock";
import { PatientItem } from "./patient-item";

export function RecentPatients() {
  return (
    <Card>
      <CardHeader>
        <WidgetHeader
          title="Recent Patients"
          href="/pets"
        />
      </CardHeader>

      <CardContent className="space-y-4">
        {recentPatients.map((patient) => (
          <PatientItem
            key={patient.id}
            patient={patient}
          />
        ))}
      </CardContent>
    </Card>
  );
}