
"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { DataTableColumnHeader } from "@/components/data-table";

import type { Owner } from "../types";

export const ownerColumns: ColumnDef<Owner>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owner" />
    ),
    meta: {
      label: "Owner",
    },
    cell: ({ row }) => {
      const owner = row.original;

      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>
              {owner.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-medium">{owner.name}</p>
            <p className="text-sm text-slate-500">
              {owner.email}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    meta: {
      label: "Phone",
    },
  },
  {
    accessorKey: "petCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pets" />
    ),
    meta: {
      label: "Pets",
    },
    cell: ({ row }) => (
      <Badge variant="secondary">
        {row.original.petCount}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    meta: {
      label: "Status",
    },
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "Active"
            ? "default"
            : "secondary"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: () => (
      <div className="text-right">Actions</div>
    ),
    meta: {
      label: "Actions",
    },
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