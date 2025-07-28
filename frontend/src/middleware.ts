// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // exclude next internals and static files
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
