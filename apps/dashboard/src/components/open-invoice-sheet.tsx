"use client";

import { useInvoiceParams } from "@/hooks/use-invoice-params";
import { Button } from "@vision_dashboard/ui/button";
import { Icons } from "@vision_dashboard/ui/icons";

export function OpenInvoiceSheet() {
  const { setParams } = useInvoiceParams();

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setParams({ type: "create" })}
      >
        <Icons.Add />
      </Button>
    </div>
  );
}
