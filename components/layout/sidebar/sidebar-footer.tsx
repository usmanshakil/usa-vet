import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function SidebarFooter() {
  return (
    <div className="border-t p-5">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-sm font-semibold">
            Administrator
          </p>

          <p className="text-xs text-muted-foreground">
            admin@usavet.com
          </p>
        </div>
      </div>
    </div>
  );
}