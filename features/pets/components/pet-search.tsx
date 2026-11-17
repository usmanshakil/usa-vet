"use client";

import { Input } from "@/components/ui/input";

interface PetSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function PetSearch({
  value,
  onChange,
}: PetSearchProps) {
  return (
    <Input
      placeholder="Search pets..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full sm:max-w-sm"
    />
  );
}