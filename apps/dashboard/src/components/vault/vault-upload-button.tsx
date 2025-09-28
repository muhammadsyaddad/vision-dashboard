"use client";

import { Button } from "@vision_dashboard/ui/button";
import { Icons } from "@vision_dashboard/ui/icons";

export function VaultUploadButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => document.getElementById("upload-files")?.click()}
    >
      <Icons.Add size={17} />
    </Button>
  );
}
