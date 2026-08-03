import { Bell } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <h1 className="text-xl font-semibold">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Welcome back to USA Vet.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 transition hover:bg-slate-100">
          <Bell className="h-5 w-5" />
        </button>

        <Avatar>
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}