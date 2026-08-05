import { z } from "zod";

export const petSchema = z.object({
  ownerId: z
    .number({
      error: "Please select an owner.",
    })
    .min(1, "Please select an owner."),

  name: z
    .string()
    .min(2, "Pet name must be at least 2 characters.")
    .max(100),

  species: z
    .string()
    .min(1, "Please select a species."),

  breed: z
    .string()
    .optional(),

  gender: z.enum(
    ["Male", "Female"],
    {
      error: "Please select a gender.",
    }
  ),

  age: z
    .string()
    .optional(),

  weight: z
    .string()
    .optional(),

  status: z.enum(
    ["Active", "Inactive"]
  ),
});

export type PetFormValues = z.infer<
  typeof petSchema
>;