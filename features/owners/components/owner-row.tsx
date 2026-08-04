import { OwnerActionsMenu } from "./owner-actions-menu";
import { Badge } from "@/components/ui/badge";
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
        <OwnerActionsMenu owner={owner} />
      </TableCell>
    </TableRow>
  );
}