import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import type { Owner } from "../types";

interface OwnerRowProps {
  owner: Owner;
}

export function OwnerRow({
  owner,
}: OwnerRowProps) {
  return (
    <TableRow>
      <TableCell>
        <div>
          <div className="font-medium">
            {owner.name}
          </div>

          <div className="text-sm text-muted-foreground">
            {owner.email}
          </div>
        </div>
      </TableCell>

      <TableCell>{owner.phone}</TableCell>

      <TableCell>{owner.petCount}</TableCell>

      <TableCell>
        <Badge
          variant={
            owner.status === "Active"
              ? "default"
              : "secondary"
          }
        >
          {owner.status}
        </Badge>
      </TableCell>

      <TableCell className="text-right">
        <Button
          variant="ghost"
          size="icon"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}