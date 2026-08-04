import type { Pet } from "../types";

import { petRepository } from "../repositories/pet.repository";

export const petService = {
  async getAll(): Promise<Pet[]> {
    return petRepository.getAll();
  },
};