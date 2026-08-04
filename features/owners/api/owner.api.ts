import type { Owner } from "../types";
import type { OwnerFormValues } from "../schemas/owner-schema";

import { owners } from "../data/mock";

const mockOwners: Owner[] = [...owners];

export const ownerApi = {
  async getAll(): Promise<Owner[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [...mockOwners];
  },

  async create(data: OwnerFormValues): Promise<Owner> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const owner: Owner = {
      id: Date.now(),
      petCount: 0,
      status: "Active",
      ...data,
    };

    mockOwners.unshift(owner);

    return owner;
  },
};