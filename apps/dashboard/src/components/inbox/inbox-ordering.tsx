"use client";

import { useInboxParams } from "@/hooks/use-inbox-params";
import { Button } from "@vision_dashboard/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@vision_dashboard/ui/dropdown-menu";
import { Icons } from "@vision_dashboard/ui/icons";

export function InboxOrdering() {
  const { params, setParams } = useInboxParams();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.Sort size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={params.order === "asc"}
          onCheckedChange={() => setParams({ order: "asc" })}
        >
          Most recent
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={params.order === "desc"}
          onCheckedChange={() => setParams({ order: "desc" })}
        >
          Oldest first
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
