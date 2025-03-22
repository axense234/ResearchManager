// Next INTL
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
// NextJS
// import { useParams } from "next/navigation";
import { Params } from "next/dist/server/request/params";

export const useNavigateToPathname = () => {
  const router = useRouter();
  const pathname = usePathname();
  //   const params = useParams();
  const locale = useLocale();

  return ({
    forcedPathname,
    forcedLocale,
    forcedQueryParams,
    // forcedParams,
  }: {
    forcedPathname?: string;
    forcedLocale?: string;
    forcedQueryParams?: Params;
    forcedParams?: Params;
  }) =>
    router.replace(
      {
        pathname: forcedPathname || (pathname as any),
        query: { ...forcedQueryParams },
      },
      { locale: forcedLocale || locale },
    );
};
