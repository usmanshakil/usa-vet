"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface OwnerSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function OwnerSearch({
  value,
  onChange,
}: OwnerSearchProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search owners..."
        className="pl-9"
      />
    </div>
  );
}