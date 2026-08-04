"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ownerSchema,
  type OwnerFormValues,
} from "../schemas/owner-schema";

export function useOwnerForm() {
  return useForm<OwnerFormValues>({
    resolver: zodResolver(ownerSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      status: "Active",
    },

    mode: "onBlur",
  });
}