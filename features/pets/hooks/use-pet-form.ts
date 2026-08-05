"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  petSchema,
  type PetFormValues,
} from "../schemas/pet-schema";

export function usePetForm() {
  return useForm<PetFormValues>({
    resolver: zodResolver(
      petSchema
    ),

    defaultValues: {
      ownerId: 0,
      name: "",
      species: "",
      breed: "",
      gender: "Male",
      age: "",
      weight: "",
      status: "Active",
    },

    mode: "onBlur",
  });
}