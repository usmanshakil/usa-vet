"use client";

import { DataTable } from "@/components/data-table";

import type { Pet } from "../types";

import { petColumns } from "./pet-columns";

interface PetsTableProps {
  pets: Pet[];
}

export function PetsTable({
  pets,
}: PetsTableProps) {
  return (
    <DataTable
      columns={petColumns}
      data={pets}
    />
  );
}