// React
import { useEffect } from "react";

export const useRedirect = (
  pathname: string | undefined,
  router: any,
  canRedirect: boolean,
  isUserAuthorized: boolean,
) => {
  useEffect(() => {
    if (pathname && router && canRedirect) {
      if (
        isUserAuthorized &&
        pathname !== `/home` &&
        (pathname === `/` || pathname === `/signin`)
      ) {
        router.push(`/home`);
      } else if (
        pathname !== `/` &&
        pathname !== `/signin` &&
        !isUserAuthorized
      ) {
        router.push(`/`);
      }
    }
  }, [pathname, router, canRedirect, isUserAuthorized]);
};
