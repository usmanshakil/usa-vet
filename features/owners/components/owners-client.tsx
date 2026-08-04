"use client";

import { useMemo, useState } from "react";

import { useOwners } from "../hooks/use-owners";

import { OwnerToolbar } from "./owner-toolbar";
import { OwnersTable } from "./owners-table";

import { LoadingState } from "@/components/query/loading-state";
import { ErrorState } from "@/components/query/error-state";
import { EmptyState } from "@/components/query/empty-state";

export function OwnersClient() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const {
    data: owners = [],
    isLoading,
    isError,
    refetch,
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
      <LoadingState
        title="Loading owners..."
      />
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Unable to load owners"
        description="An unexpected error occurred while loading owners."
        onRetry={() => refetch()}
      />
    );
  }

  if (filteredOwners.length === 0) {
    return (
      <div className="space-y-6">
        <OwnerToolbar
          search={search}
          status={status}
          total={0}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
        />

        <EmptyState
          title="No owners found"
          description="Try adjusting your search or add your first owner."
        />
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