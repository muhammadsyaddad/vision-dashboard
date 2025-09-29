"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@vision_dashboard/ui/carousel";
import * as React from "react";
import { AccountBalance } from "./account-balance";
import { Assistant } from "./assistant";
import { Inbox } from "./inbox";
import { Invoice } from "./invoice";
import { WidgetsNavigation } from "./navigation";
import { Spending } from "./spending";
import { Tracker } from "./tracker";
import { Vault } from "./vault";

export function Widgets() {
  // 🚀 Replace fetching with dummy data
  const accounts = [
    { id: 1, name: "Checking", balance: 1200.5 },
    { id: 2, name: "Savings", balance: 5400.75 },
    { id: 3, name: "Credit Card", balance: -230.1 },
  ];

  // Just pretend this is controlled by some feature flag
  const disabled = false;

  const items = [
    <Assistant key="assistant" />,
    <Spending disabled={disabled} key="spending" />,
    <Invoice key="invoice" />,
    <Tracker key="tracker" />,
    <Inbox key="inbox" disabled={disabled} />,
    <AccountBalance key="account-balance" accounts={accounts} />,
    <Vault key="vault" />,
  ];

  return (
    <Carousel
      className="flex flex-col"
      opts={{
        align: "start",
        watchDrag: false,
      }}
    >
      <WidgetsNavigation />
      <div className="ml-auto hidden md:flex">
        <CarouselPrevious className="static p-0 border-none hover:bg-transparent" />
        <CarouselNext className="static p-0 border-none hover:bg-transparent" />
      </div>

      <CarouselContent className="-ml-[20px] 2xl:-ml-[40px] flex-col md:flex-row space-y-6 md:space-y-0">
        {items.map((item, idx) => (
          <CarouselItem
            className="lg:basis-1/2 xl:basis-1/3 3xl:basis-1/4 pl-[20px] 2xl:pl-[40px]"
            key={idx.toString()}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
