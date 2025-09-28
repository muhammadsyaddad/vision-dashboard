"use client";

import { createClient } from "@vision_dashboard/supabase/client";
import { Button } from "@vision_dashboard/ui/button";

export function SignOutButton() {
  const supabase = createClient();

  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => supabase.auth.signOut()}
    >
      Sign out
    </Button>
  );
}
