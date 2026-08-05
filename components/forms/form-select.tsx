"use client";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormError } from "./form-error";

interface FormSelectOption {
  label: string;
  value: string;
}

interface FormSelectProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  options: FormSelectOption[];
  htmlFor?: string;
  required?: boolean;
  error?: string;
}

export function FormSelect({
  label,
  value,
  onValueChange,
  placeholder = "Select...",
  options,
  htmlFor,
  required = false,
  error,
}: FormSelectProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>
        {label}

        {required && (
          <span className="ml-1 text-destructive">
            *
          </span>
        )}
      </Label>

      <Select
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger id={htmlFor}>
          <SelectValue
            placeholder={placeholder}
          />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <FormError
        message={error}
      />
    </div>
  );
}