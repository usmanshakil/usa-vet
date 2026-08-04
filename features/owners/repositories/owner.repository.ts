import type { OwnerFormValues } from "../schemas/owner-schema";

import { ownerApi } from "../api/owner.api";

export const ownerRepository = {
  create(data: OwnerFormValues) {
    return ownerApi.create(data);
  },
};