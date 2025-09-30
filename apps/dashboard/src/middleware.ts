// import { updateSession } from "@vision_dashboard/supabase/middleware";
// import { createClient } from "@vision_dashboard/supabase/server";
import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export async function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
