"use client";

import { Input } from "@/components/ui/input";

import { AddPetButton } from "./add-pet-button";

interface PetToolbarProps {
  search: string;
  total: number;
  onSearchChange: (value: string) => void;
}

export function PetToolbar({
  search,
  total,
  onSearchChange,
}: PetToolbarProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Pets
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage pets registered in your clinic.
          </p>
        </div>

        <AddPetButton />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Input
          placeholder="Search pets..."
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          className="w-full md:max-w-sm"
        />

        <p className="text-sm text-muted-foreground">
          {total} pet{total !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}