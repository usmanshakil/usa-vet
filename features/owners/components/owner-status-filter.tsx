"use client";

interface OwnerStatusFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function OwnerStatusFilter({
  value,
  onChange,
}: OwnerStatusFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-9 rounded-md border border-input bg-background px-3 text-sm"
    >
      <option value="all">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
}