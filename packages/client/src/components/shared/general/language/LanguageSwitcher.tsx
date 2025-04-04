// Next INTL
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
// Components
import LanguageSwitcherSelect from "./LanguageSwitcherSelect";
// Interfaces
import { FC } from "react";
import { LanguageSwitcherProps } from "@/core/interfaces";

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ position }) => {
  const locale = useLocale();

  return (
    <LanguageSwitcherSelect
      defaultSelectValue={locale}
      locale={locale}
      position={position}
    >
      {routing.locales.map((loc) => (
        <option key={loc} value={loc} title={loc} aria-label={loc}>
          {loc}
        </option>
      ))}
    </LanguageSwitcherSelect>
  );
};

export default LanguageSwitcher;
