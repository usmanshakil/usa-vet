"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";

import {
  FormActions,
  FormField,
  SubmitButton,
} from "@/components/forms";

import {
  usePetForm,
} from "../hooks/use-pet-form";

import type {
  PetFormValues,
} from "../schemas/pet-schema";

interface PetFormProps {
  onClose: () => void;
}

export function PetForm({
  onClose,
}: PetFormProps) {
  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = usePetForm();

  async function onSubmit(
    values: PetFormValues
  ) {
    console.log(values);

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    setLoading(false);

    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-5"
    >
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

      <FormActions
        onCancel={onClose}
      >
        <SubmitButton
          loading={loading}
        >
          Save Pet
        </SubmitButton>
      </FormActions>
    </form>
  );
}