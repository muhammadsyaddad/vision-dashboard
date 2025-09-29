import { Header } from "@/components/header";
import { GlobalSheets } from "@/components/sheets/global-sheets";
import { Sidebar } from "@/components/sidebar";
import { getCountryCode, getCurrency } from "@vision_dashboard/location";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currencyPromise = getCurrency();
  const countryCodePromise = getCountryCode();

  return (
    <div>
      <div className="relative">
        <Sidebar />

        <div className="md:ml-[70px] pb-8">
          <Header />
          <div className="px-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
