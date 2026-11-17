"use client";

import { useState } from "react";
import { Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";

import {
  FormActions,
  FormField,
  FormSelect,
  SubmitButton,
} from "@/components/forms";

import { useOwners } from "@/features/owners/hooks/use-owners";

import { usePetForm } from "../hooks/use-pet-form";
import type { PetFormValues } from "../schemas/pet-schema";

import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS,
} from "../constants/pet-options";

interface PetFormProps {
  onClose: () => void;
}

export function PetForm({ onClose }: PetFormProps) {
  const [loading, setLoading] = useState(false);

  const {
    data: owners = [],
    isLoading: ownersLoading,
    isError: ownersError,
  } = useOwners();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = usePetForm();

  const ownerOptions = owners.map((owner) => ({
    label: owner.name,
    value: String(owner.id),
  }));

  async function onSubmit(values: PetFormValues) {
    setLoading(true);

    try {
      console.log("Pet form values:", values);

      // Temporary placeholder until the create-pet mutation is connected.
      await new Promise((resolve) => setTimeout(resolve, 500));

      reset();
      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-0 flex-1 flex-col overflow-hidden"
    >
      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain py-1 pr-2">
        <Controller
          name="ownerId"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Owner"
              htmlFor="ownerId"
              required
              placeholder={
                ownersLoading ? "Loading owners..." : "Select owner"
              }
              value={field.value ? String(field.value) : ""}
              onValueChange={(value) => field.onChange(Number(value))}
              options={ownerOptions}
              error={
                ownersError
                  ? "Failed to load owners. Please try again."
                  : errors.ownerId?.message
              }
            />
          )}
        />

        <FormField
          label="Pet Name"
          htmlFor="name"
          required
          error={errors.name?.message}
        >
          <Input
            id="name"
            placeholder="Bella"
            {...register("name")}
          />
        </FormField>

        <Controller
          name="species"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Species"
              htmlFor="species"
              required
              placeholder="Select species"
              value={field.value ?? ""}
              onValueChange={field.onChange}
              options={[...SPECIES_OPTIONS]}
              error={errors.species?.message}
            />
          )}
        />

        <FormField
          label="Breed"
          htmlFor="breed"
          error={errors.breed?.message}
        >
          <Input
            id="breed"
            placeholder="Golden Retriever"
            {...register("breed")}
          />
        </FormField>

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Gender"
              htmlFor="gender"
              required
              placeholder="Select gender"
              value={field.value ?? ""}
              onValueChange={field.onChange}
              options={[...GENDER_OPTIONS]}
              error={errors.gender?.message}
            />
          )}
        />

        <FormField
          label="Age"
          htmlFor="age"
          error={errors.age?.message}
        >
          <Input
            id="age"
            placeholder="4 years"
            {...register("age")}
          />
        </FormField>

        <FormField
          label="Weight"
          htmlFor="weight"
          error={errors.weight?.message}
        >
          <Input
            id="weight"
            placeholder="28 kg"
            {...register("weight")}
          />
        </FormField>

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Status"
              htmlFor="status"
              required
              placeholder="Select status"
              value={field.value ?? ""}
              onValueChange={field.onChange}
              options={[...STATUS_OPTIONS]}
              error={errors.status?.message}
            />
          )}
        />
      </div>

      <div className="shrink-0 bg-popover pt-4">
        <FormActions onCancel={onClose}>
          <SubmitButton loading={loading}>
            Save Pet
          </SubmitButton>
        </FormActions>
      </div>
    </form>
  );
}