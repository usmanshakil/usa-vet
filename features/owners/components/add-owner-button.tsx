import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AddOwnerButton() {
  return (
    <Button className="gap-2">
      <Plus className="h-4 w-4" />
      Add Owner
    </Button>
  );
}