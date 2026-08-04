import type { OwnerFormValues } from "../schemas/owner-schema";

export const ownerApi = {
  async create(data: OwnerFormValues) {
    // Simulate an API request
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id: crypto.randomUUID(),
      ...data,
      petCount: 0,
    };
  },
};