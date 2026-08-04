"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ownerService } from "../services/owner.service";

import {
  FormActions,
  SubmitButton,
} from "@/components/forms";

import {
  OwnerFormValues,
} from "../schemas/owner-schema";

import { useOwnerForm } from "../hooks/use-owner-form";

interface OwnerFormProps {
  onClose: () => void;
}

export function OwnerForm({
  onClose,
}: OwnerFormProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useOwnerForm();

  async function onSubmit(values: OwnerFormValues) {
    try {
      setLoading(true);

      await ownerService.create(values);

      reset();

      onClose();
    } catch (error) {
      console.error("Failed to create owner:", error);

      // Later we'll show a toast notification here.
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name">
          Owner Name
        </Label>

        <Input
          id="name"
          placeholder="John Smith"
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm font-medium text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm font-medium text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone
        </Label>

        <Input
          id="phone"
          placeholder="+1 (555) 123-4567"
          {...register("phone")}
        />

        {errors.phone && (
          <p className="text-sm font-medium text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <FormActions
        onCancel={onClose}
      >
        <SubmitButton loading={loading}>
          Save Owner
        </SubmitButton>
      </FormActions>
    </form>
  );
}