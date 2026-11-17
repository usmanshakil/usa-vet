
"use client";

import { useMemo, useState } from "react";

import { usePets } from "../hooks/use-pets";

import { LoadingState } from "@/components/query/loading-state";
import { ErrorState } from "@/components/query/error-state";
import { EmptyState } from "@/components/query/empty-state";

import { PetsTable } from "./pets-table";
import { PetToolbar } from "./pet-toolbar";

export function PetsClient() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const {
    data: pets = [],
    isLoading,
    isError,
    error,
    refetch,
  } = usePets();

  const filteredPets = useMemo(() => {
    const term = search.trim().toLowerCase();

    return pets.filter((pet) => {
      const matchesSearch =
        pet.name.toLowerCase().includes(term) ||
        pet.ownerName.toLowerCase().includes(term) ||
        pet.species.toLowerCase().includes(term) ||
        pet.breed.toLowerCase().includes(term);

      const matchesStatus =
        status === "all" || pet.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [pets, search, status]);

  if (isLoading) {
    return <LoadingState title="Loading pets..." />;
  }

  if (isError) {
    return (
      <ErrorState
        title="Unable to load pets"
        description={
          error instanceof Error
            ? error.message
            : "Something went wrong."
        }
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="space-y-6">
      <PetToolbar
        search={search}
        status={status}
        total={filteredPets.length}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      {filteredPets.length === 0 ? (
        <EmptyState
          title="No pets found"
          description="Try changing your search or status filter."
        />
      ) : (
        <PetsTable pets={filteredPets} />
      )}
    </div>
  );
}