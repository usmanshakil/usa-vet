
import { PageHeader } from "@/components/app/page-header";
import { PageSection } from "@/components/app/page-section";
import { Input } from "@/components/ui/input";

import { AddPetButton } from "./add-pet-button";
import { PetStatusFilter } from "./pet-status-filter";

interface PetToolbarProps {
  search: string;
  status: string;
  total: number;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export function PetToolbar({
  search,
  status,
  total,
  onSearchChange,
  onStatusChange,
}: PetToolbarProps) {
  return (
    <PageSection>
      <div className="space-y-6">
        <PageHeader
          title="Pets"
          description="Manage pets registered in your clinic."
          actions={<AddPetButton />}
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Search pets..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full sm:max-w-sm"
            />

            <PetStatusFilter
              value={status}
              onChange={onStatusChange}
            />
          </div>

          <p className="text-sm font-medium text-slate-500">
            {total} Pet{total !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </PageSection>
  );
}