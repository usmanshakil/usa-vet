import {
  ChevronDown,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export function UserMenu() {
  return (
    <button className="flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-slate-100">
      <Avatar>
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>

      <div className="hidden text-left lg:block">
        <p className="text-sm font-semibold">
          Administrator
        </p>

        <p className="text-xs text-muted-foreground">
          admin@usavet.com
        </p>
      </div>

      <ChevronDown className="hidden h-4 w-4 text-slate-500 lg:block" />
    </button>
  );
}