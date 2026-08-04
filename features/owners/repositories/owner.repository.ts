import type { Owner } from "../types";
import type { OwnerFormValues } from "../schemas/owner-schema";

import { ownerApi } from "../api/owner.api";

export const ownerRepository = {
  async getAll(): Promise<Owner[]> {
    return ownerApi.getAll();
  },

  async create(
    data: OwnerFormValues
  ): Promise<Owner> {
    return ownerApi.create(data);
  },
};