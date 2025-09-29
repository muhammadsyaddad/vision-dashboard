import { SelectTeamTable } from "@/components/tables/select-team/table";
import { TeamInvites } from "@/components/team-invites";
import { UserMenu } from "@/components/user-menu";
import { Button } from "@vision_dashboard/ui/button";
import { Icons } from "@vision_dashboard/ui/icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teams | Midday",
};

export default async function Teams() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center overflow-hidden p-6 md:p-0">
        <div className="relative z-20 m-auto flex w-full max-w-[480px] flex-col">
          <div>
            <div className="text-center">
              <h1 className="text-lg mb-2 font-serif">Welcome, pasep</h1>
              {invites?.length > 0 ? (
                <p className="text-[#878787] text-sm mb-8">
                  Join a team you’ve been invited to or create a new one.
                </p>
              ) : (
                <p className="text-[#878787] text-sm mb-8">
                  Select a team or create a new one.
                </p>
              )}
            </div>
          </div>

          <div className="text-center mt-12 border-t-[1px] border-border pt-6 w-full relative border-dashed">
            <span className="absolute left-1/2 -translate-x-1/2 text-sm text-[#878787] bg-background -top-3 px-4">
              Or
            </span>
            <Button className="w-full mt-2" variant="outline">
              Create team
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
