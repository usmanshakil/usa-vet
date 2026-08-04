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

import { owners } from "../data/mock";
import { OwnerRow } from "./owner-row";

export function OwnersTable() {
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