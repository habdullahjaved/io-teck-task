import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all routes except those starting with:
    // /api, /trpc, /_next, /_vercel, /admin, or any file like .ico, .png, etc.
    "/((?!api|trpc|_next|_vercel|admin|.*\\..*).*)",
  ],
};
