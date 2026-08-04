import { AddOwnerButton } from "./add-owner-button";

export function OwnerToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Owners
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage pet owners, their contact information and linked pets.
        </p>
      </div>

      <AddOwnerButton />
    </div>
  );
}