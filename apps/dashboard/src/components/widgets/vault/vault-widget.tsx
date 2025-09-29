"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

export function VaultWidget() {
  return (
    <div className="flex items-center justify-center aspect-square">
      <p className="text-sm text-[#606060] -mt-12">No files found</p>
    </div>
  );
}
