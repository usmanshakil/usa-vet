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
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Owners
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage pet owners, contact information and linked pets.
          </p>
        </div>

        <AddOwnerButton />
      </div>

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
  );
}