import { Widgets } from "@/components/widgets";
import { defaultPeriod } from "@/components/widgets/spending/data";
import { loadReportsParams } from "@/hooks/use-reports-params";
import { HydrateClient, batchPrefetch, trpc } from "@/trpc/server";
import { getQueryClient } from "@/trpc/server";
import { Cookies } from "@/utils/constants";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { SearchParams } from "nuqs";

export const metadata: Metadata = {
  title: "Overview | Midday",
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Overview(props: Props) {
  return (
    <>
      <div>
        <div className="h-[530px] mb-4">
          <div className="mt-8 relative"></div>
        </div>
      </div>
    </>
  );
}
