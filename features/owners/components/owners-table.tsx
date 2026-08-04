"use client";

import { DataTable } from "@/components/data-table";

import type { Owner } from "../types";
import { ownerColumns } from "./owner-columns";

interface OwnersTableProps {
  owners: Owner[];
}

export function OwnersTable({
  owners,
}: OwnersTableProps) {
  return (
    <DataTable
      columns={ownerColumns}
      data={owners}
    />
  );
}