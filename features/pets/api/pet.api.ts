import type { Pet } from "../types";

import { pets } from "../data/mock";

const mockPets: Pet[] = [...pets];

export const petApi = {
  async getAll(): Promise<Pet[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return [...mockPets];
  },
};