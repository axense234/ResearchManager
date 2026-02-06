// Next INTL
import createMiddleware from "next-intl/middleware";
// Routing
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(ro|en|fr|de)/:path*"],
};
