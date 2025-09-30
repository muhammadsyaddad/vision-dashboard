import type { Metadata } from "next";

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
          <div className="mt-8 relative">hahaha</div>
        </div>
      </div>
    </>
  );
}
