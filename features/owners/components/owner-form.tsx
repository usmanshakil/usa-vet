"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  FormActions,
  SubmitButton,
} from "@/components/forms";

import { useOwnerForm } from "../hooks/use-owner-form";
import { useCreateOwner } from "../hooks/use-create-owner";

interface OwnerFormProps {
  onClose: () => void;
}

export function OwnerForm({
  onClose,
}: OwnerFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useOwnerForm();

  const createOwner = useCreateOwner();

  async function onSubmit(values: any) {
    await createOwner.mutateAsync(values);

    reset();

    onClose();
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
          <p className="text-sm text-red-500">
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
          <p className="text-sm text-red-500">
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
          <p className="text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      <FormActions onCancel={onClose}>
        <SubmitButton
          loading={createOwner.isPending}
        >
          Save Owner
        </SubmitButton>
      </FormActions>
    </form>
  );
}