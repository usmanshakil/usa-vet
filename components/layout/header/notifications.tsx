import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Notifications() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      <Bell className="h-5 w-5" />
    </Button>
  );
}