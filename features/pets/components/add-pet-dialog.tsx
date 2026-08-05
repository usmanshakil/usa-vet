"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PetForm } from "./pet-form";

export function AddPetDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger
        render={
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Pet
          </Button>
        }
      />

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Add Pet
          </DialogTitle>

          <DialogDescription>
            Register a new pet in the clinic.
          </DialogDescription>
        </DialogHeader>

        <PetForm
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}