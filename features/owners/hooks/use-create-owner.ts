"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { ownerService } from "../services/owner.service";
import type { OwnerFormValues } from "../schemas/owner-schema";

export function useCreateOwner() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: OwnerFormValues) =>
      ownerService.create(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["owners"],
      });

      toast.success("Owner created successfully.");
    },

    onError: () => {
      toast.error("Unable to create owner.");
    },
  });
}