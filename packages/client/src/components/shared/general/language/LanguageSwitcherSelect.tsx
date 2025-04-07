"use client";
// Interfaces
import { LanguageSwitcherSelectProps } from "@/core/interfaces";
import { FC } from "react";
// NextJS
import Image from "next/image";
// Data
import { langFlagsImages } from "@/data/general/components";
// Hooks
import { useNavigateToPathname } from "@/hooks";
// SCSS
import languageSwitcherStyles from "@/scss/components/shared/general/language/LanguageSwitcher.module.scss";

const LanguageSwitcherSelect: FC<LanguageSwitcherSelectProps> = ({
  locale,
  defaultSelectValue,
  children,
  position,
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
      style={{ position }}
    >
      <Image
        src={imageSrc}
        title={imageLabel}
        aria-label={imageLabel}
        alt=""
        width={80}
        height={60}
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
