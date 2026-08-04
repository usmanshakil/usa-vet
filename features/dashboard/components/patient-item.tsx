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
    <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <Avatar className="h-11 w-11">
        <AvatarFallback className="bg-slate-100 font-semibold text-slate-600 transition-colors group-hover:bg-blue-100 group-hover:text-blue-700">
          {patient.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-slate-900">
          {patient.name}
        </h4>

        <p className="text-sm text-slate-600">
          {patient.breed}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Owner: {patient.owner}
        </p>
      </div>

      <div className="text-right">
        <Badge variant="secondary">
          {patient.species}
        </Badge>

        <p className="mt-2 text-xs font-medium text-slate-400">
          {patient.lastVisit}
        </p>
      </div>
    </div>
  );
}