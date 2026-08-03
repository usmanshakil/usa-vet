import Link from "next/link";
import { PawPrint } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
        <PawPrint className="h-6 w-6" />
      </div>

      <div>
        <h2 className="text-lg font-bold tracking-tight">
          USA Vet
        </h2>

        <p className="text-xs text-muted-foreground">
          Veterinary Management
        </p>
      </div>
    </Link>
  );
}