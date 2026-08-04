import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import type { Patient } from "../types";

interface PatientItemProps {
  patient: Patient;
}

export function PatientItem({
  patient,
}: PatientItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-slate-50">
      <Avatar>
        <AvatarFallback>
          {patient.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <h4 className="font-semibold">
          {patient.name}
        </h4>

        <p className="text-sm text-muted-foreground">
          {patient.breed}
        </p>

        <p className="text-xs text-muted-foreground">
          Owner: {patient.owner}
        </p>
      </div>

      <div className="text-right">
        <Badge variant="secondary">
          {patient.species}
        </Badge>

        <p className="mt-2 text-xs text-muted-foreground">
          {patient.lastVisit}
        </p>
      </div>
    </div>
  );
}