"use client";

import { useMemo, useState } from "react";

import { useOwners } from "../hooks/use-owners";

import { OwnerToolbar } from "./owner-toolbar";
import { OwnersTable } from "./owners-table";

export function OwnersClient() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const {
    data: owners = [],
    isLoading,
    isError,
    error,
  } = useOwners();

  const filteredOwners = useMemo(() => {
    return owners.filter((owner) => {
      const matchesSearch =
        owner.name.toLowerCase().includes(search.toLowerCase()) ||
        owner.email.toLowerCase().includes(search.toLowerCase()) ||
        owner.phone.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "all" || owner.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [owners, search, status]);

  if (isLoading) {
    return (
      <div className="p-6 text-sm text-muted-foreground">
        Loading owners...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-sm text-destructive">
        {(error as Error).message || "Failed to load owners."}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <OwnerToolbar
        search={search}
        status={status}
        total={filteredOwners.length}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <OwnersTable owners={filteredOwners} />
    </div>
  );
}