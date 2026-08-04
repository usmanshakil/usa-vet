"use client";

import { useQuery } from "@tanstack/react-query";

import { ownerService } from "../services/owner.service";

export function useOwners() {
  return useQuery({
    queryKey: ["owners"],
    queryFn: () => ownerService.getAll(),
  });
}