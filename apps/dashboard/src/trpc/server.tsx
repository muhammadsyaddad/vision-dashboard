// apps/dashboard/src/trpc/server.tsx
import { ReactNode } from "react";

function createDummy(path: string[] = []) {
  return new Proxy(() => {}, {
    get: (_target, prop) => {
      if (prop === "__isDummy") return true; // sentinel
      if (prop === "toJSON") return () => `[trpc:${path.join(".")}]`; // biar aman kalau di-log
      return createDummy([...path, String(prop)]);
    },
    apply: (_target, _thisArg, _args) => {
      return {
        queryKey: path,
        queryFn: async () => {
          console.log("trpc call →", path.join(".")); // cuma log panggilan, bukan proxy
          return {};
        },
      };
    },
  });
}

export const trpc = new Proxy(
  {},
  {
    get: (_target, prop) => createDummy([String(prop)]),
  },
);

export const batchPrefetch = (_args: any[]) => {};

export function getQueryClient() {
  return {
    fetchQuery: async (opts?: any) => {
      if (opts?.queryKey?.[0] === "user.me") {
        return {
          id: "u-123",
          fullName: "Dummy User",
          teamId: "team-xyz",
        };
      }
      return {};
    },
    prefetchQuery: async () => {},
    prefetchInfiniteQuery: async () => {},
  };
}

export function HydrateClient({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
