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

  const {
    data: pets = [],
    isLoading,
    isError,
    error,
    refetch,
  } = usePets();

  const filteredPets = useMemo(() => {
    const term = search.toLowerCase();

    return pets.filter((pet) => {
      return (
        pet.name.toLowerCase().includes(term) ||
        pet.ownerName.toLowerCase().includes(term) ||
        pet.species.toLowerCase().includes(term) ||
        pet.breed.toLowerCase().includes(term)
      );
    });
  }, [pets, search]);

  if (isLoading) {
    return (
      <LoadingState
        title="Loading pets..."
      />
    );
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
        total={filteredPets.length}
        onSearchChange={setSearch}
      />

      {filteredPets.length === 0 ? (
        <EmptyState
          title="No pets found"
          description="Try changing your search."
        />
      ) : (
        <PetsTable pets={filteredPets} />
      )}
    </div>
  );
}