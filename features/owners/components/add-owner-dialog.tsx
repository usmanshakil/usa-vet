"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { OwnerForm } from "./owner-form";

export function AddOwnerDialog() {
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
            Add Owner
          </Button>
        }
      />

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Owner</DialogTitle>

          <DialogDescription>
            Register a new pet owner in the clinic.
          </DialogDescription>
        </DialogHeader>

        <OwnerForm
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}