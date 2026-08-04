"use client";

import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  title?: string;
}

export function LoadingState({
  title = "Loading...",
}: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />

      <p className="mt-4 text-sm text-muted-foreground">
        {title}
      </p>
    </div>
  );
}