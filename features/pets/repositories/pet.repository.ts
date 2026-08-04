import type { Pet } from "../types";

import { petApi } from "../api/pet.api";

export const petRepository = {
  async getAll(): Promise<Pet[]> {
    return petApi.getAll();
  },
};