import { ReactNode } from "react";

import { Label } from "@/components/ui/label";

import { FormError } from "./form-error";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  error,
  required = false,
  children,
}: FormFieldProps) {
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

      {children}

      <FormError
        message={error}
      />
    </div>
  );
}