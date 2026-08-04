import type { Owner } from "../types";
import type { OwnerFormValues } from "../schemas/owner-schema";

import { ownerRepository } from "../repositories/owner.repository";

export const ownerService = {
  async getAll(): Promise<Owner[]> {
    return ownerRepository.getAll();
  },

  async create(
    data: OwnerFormValues
  ): Promise<Owner> {
    return ownerRepository.create({
      ...data,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
    });
  },
};