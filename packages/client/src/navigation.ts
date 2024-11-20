import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

export const locales = ["en", "ro", "fr", "de"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/home": {
    ro: "/acasa",
    en: "/home",
    fr: "/maison",
    de: "/heim",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
