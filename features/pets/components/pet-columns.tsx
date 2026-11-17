
"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { DataTableColumnHeader } from "@/components/data-table";

import type { Pet } from "../types";

export const petColumns: ColumnDef<Pet>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pet" />
    ),
    meta: {
      label: "Pet",
    },
  },
  {
    accessorKey: "ownerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owner" />
    ),
    meta: {
      label: "Owner",
    },
  },
  {
    accessorKey: "species",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Species" />
    ),
    meta: {
      label: "Species",
    },
  },
  {
    accessorKey: "breed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Breed" />
    ),
    meta: {
      label: "Breed",
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
    meta: {
      label: "Gender",
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Age" />
    ),
    meta: {
      label: "Age",
    },
  },
  {
    accessorKey: "weight",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Weight" />
    ),
    meta: {
      label: "Weight",
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    meta: {
      label: "Status",
    },
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
  {
    id: "actions",
    header: () => (
      <div className="text-right">Actions</div>
    ),
    enableHiding: false,
    enableSorting: false,
    cell: () => (
      <div className="flex justify-end">
        <Button variant="ghost" size="icon-sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];