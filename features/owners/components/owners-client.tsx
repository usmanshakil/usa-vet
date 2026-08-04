"use client";

import { useMemo, useState } from "react";

import { owners } from "../data/mock";
import { OwnerToolbar } from "./owner-toolbar";
import { OwnersTable } from "./owners-table";

export function OwnersClient() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

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
  }, [search, status]);

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