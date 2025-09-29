"use client";

import { ReactNode } from "react";

// bikin dummy hooks biar importnya ga error
export const useTRPC = () => {
  return {
    query: () => {
      // no-op
      return { data: null, isLoading: false, error: null };
    },
    mutation: () => {
      // no-op
      return { mutate: () => {}, isLoading: false, error: null };
    },
  };
};

export function TRPCReactProvider(props: { children: ReactNode }) {
  // cuma render children, ga ada queryClient / trpcClient
  return <>{props.children}</>;
}
