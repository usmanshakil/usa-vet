"use client";

import {
    Eye,
    MoreHorizontal,
    Pencil,
    PawPrint,
    Trash2,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Owner } from "../types";

interface OwnerActionsMenuProps {
    owner: Owner;
}

export function OwnerActionsMenu({
    owner,
}: OwnerActionsMenuProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"
            >
                <MoreHorizontal className="h-4 w-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-52"
            >
                <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    View Owner
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit Owner
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <PawPrint className="mr-2 h-4 w-4" />
                    View Pets
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Owner
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}