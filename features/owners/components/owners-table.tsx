import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { Owner } from "../types";
import { OwnerRow } from "./owner-row";

interface OwnersTableProps {
  owners: Owner[];
}

export function OwnersTable({
  owners,
}: OwnersTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Owner</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Pets</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {owners.map((owner) => (
              <OwnerRow
                key={owner.id}
                owner={owner}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}