import {
  OwnerToolbar,
  OwnersTable,
} from "@/features/owners";

export default function OwnersPage() {
  return (
    <div className="space-y-6">
      <OwnerToolbar />
      <OwnersTable />
    </div>
  );
}