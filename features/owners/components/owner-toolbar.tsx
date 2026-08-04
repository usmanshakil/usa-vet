import { PageHeader } from "@/components/app/page-header";
import { PageSection } from "@/components/app/page-section";

import { AddOwnerButton } from "./add-owner-button";
import { OwnerSearch } from "./owner-search";
import { OwnerStatusFilter } from "./owner-status-filter";

interface OwnerToolbarProps {
  search: string;
  status: string;
  total: number;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export function OwnerToolbar({
  search,
  status,
  total,
  onSearchChange,
  onStatusChange,
}: OwnerToolbarProps) {
  return (
    <PageSection>
      <div className="space-y-6">
        <PageHeader
          title="Owners"
          description="Manage pet owners, contact information and linked pets."
          actions={<AddOwnerButton />}
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <OwnerSearch
              value={search}
              onChange={onSearchChange}
            />

            <OwnerStatusFilter
              value={status}
              onChange={onStatusChange}
            />
          </div>

          <p className="text-sm font-medium text-slate-500">
            {total} Owner{total !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </PageSection>
  );
}