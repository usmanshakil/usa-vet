"use client";

import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onCancel?: () => void;
  loading?: boolean;
  submitLabel?: string;
  children?: ReactNode;
}

export function FormActions({
  onCancel,
  loading,
  submitLabel = "Save",
  children,
}: FormActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3 border-t pt-6">
      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
      >
        Cancel
      </Button>

      {children ?? (
        <Button
          type="submit"
          disabled={loading}
        >
          {submitLabel}
        </Button>
      )}
    </div>
  );
}