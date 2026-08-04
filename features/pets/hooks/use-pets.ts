"use client";

import { useQuery } from "@tanstack/react-query";

import { petService } from "../services/pet.service";

export function usePets() {
  return useQuery({
    queryKey: ["pets"],
    queryFn: () => petService.getAll(),
  });
}