// React
import { useEffect } from "react";

export const useRedirect = (
  pathname: string | undefined,
  router: any,
  canRedirect: boolean,
) => {
  useEffect(() => {
    if (pathname && router && canRedirect) {
      if (
        pathname !== `/home` &&
        (pathname === `/` || pathname === `/signin`)
      ) {
        router.push(`/home`);
      } else if (pathname !== `/` && pathname !== `/signin`) {
        router.push(`/`);
      }
    }
  }, [pathname, router, canRedirect]);
};
