import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Inbox | Midday",
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: Props) {
  return <>ha</>;
}
