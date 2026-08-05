"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import type { Pet } from "../types";

export const petColumns: ColumnDef<Pet>[] = [
  {
    accessorKey: "name",
    header: "Pet",
  },
  {
    accessorKey: "ownerName",
    header: "Owner",
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "breed",
    header: "Breed",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <Badge
          variant={
            status === "Active"
              ? "default"
              : "secondary"
          }
        >
          {status}
        </Badge>
      );
    },
  },
];