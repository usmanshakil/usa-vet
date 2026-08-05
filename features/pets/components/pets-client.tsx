"use client";

import { useMemo, useState } from "react";

import { usePets } from "../hooks/use-pets";

import { LoadingState } from "@/components/query/loading-state";
import { ErrorState } from "@/components/query/error-state";
import { EmptyState } from "@/components/query/empty-state";

import { Input } from "@/components/ui/input";

import { PetsTable } from "./pets-table";

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
        description="Please wait while we fetch pets."
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
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Pets
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage pets registered in your clinic.
          </p>
        </div>

        <Input
          placeholder="Search pets..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full md:w-80"
        />
      </div>

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