"use client";

import { useCustomerParams } from "@/hooks/use-customer-params";
import { useInvoiceParams } from "@/hooks/use-invoice-params";
import { Button } from "@vision_dashboard/ui/button";
import { Icons } from "@vision_dashboard/ui/icons";

export function OpenCustomerSheet() {
  const { setParams } = useCustomerParams();

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setParams({ createCustomer: true })}
      >
        <Icons.Add />
      </Button>
    </div>
  );
}
