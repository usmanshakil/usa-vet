import type { OwnerFormValues } from "../schemas/owner-schema";

import { ownerRepository } from "../repositories/owner.repository";

export const ownerService = {
  async create(data: OwnerFormValues) {
    // Future business rules belong here.
    // Example:
    // - normalize phone numbers
    // - trim whitespace
    // - check duplicates

    return ownerRepository.create({
      ...data,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
    });
  },
};