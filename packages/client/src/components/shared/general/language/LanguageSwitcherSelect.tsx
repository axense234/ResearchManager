"use client";

// Interfaces
import { LanguageSwitcherSelectProps } from "@/core/interfaces";
import { FC } from "react";
// NextJS
import Image from "next/image";
// Data
import { langFlagsImages } from "@/data/static";
// Hooks
import { useNavigateToPathname } from "@/hooks";
// SCSS
import languageSwitcherStyles from "@/scss/components/shared/general/language/LanguageSwitcher.module.scss";

const LanguageSwitcherSelect: FC<LanguageSwitcherSelectProps> = ({
  locale,
  defaultSelectValue,
  children,
}) => {
  const { imageLabel, imageSrc } =
    langFlagsImages.find((flagImage) => flagImage.value === locale) ||
    langFlagsImages[0];

  const navigateToPathname = useNavigateToPathname();

  return (
    <div
      className={languageSwitcherStyles.languageSwitcherSelectContainer}
      title={imageLabel}
      aria-label={imageLabel}
    >
      <Image
        src={imageSrc}
        title={imageLabel}
        aria-label={imageLabel}
        alt=""
        width={64}
        height={48}
      />
      <div className={languageSwitcherStyles.languageSwitcherSelectFormControl}>
        <select
          name="languageSwitcher"
          id="languageSwitcher"
          defaultValue={defaultSelectValue}
          onChange={(e) => navigateToPathname({ forcedLocale: e.target.value })}
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcherSelect;
