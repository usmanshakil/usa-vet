import { z } from "zod";

export const ownerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100),

  email: z.email({
    error: "Enter a valid email address.",
  }),

  phone: z
    .string()
    .min(6, "Phone number is too short.")
    .max(30),

});

export type OwnerFormValues = z.infer<typeof ownerSchema>;