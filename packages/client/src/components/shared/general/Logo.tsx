// Interfaces
import { LogoProps } from "@/core/interfaces";
import { FC } from "react";
// Next INTL Stuff
import { Link } from "@/i18n/routing";
// SCSS
import logoStyles from "@/scss/components/shared/general/Logo.module.scss";
// NextJS
import Image from "next/image";
// Data
import { homePageUrl, logoImageUrl } from "@/data/static";

const Logo: FC<LogoProps> = ({ clickable, dimensions }) => {
  return (
    <Link
      href={clickable ? (homePageUrl as any) : "/"}
      className={logoStyles.logoContainer}
      style={{ width: dimensions, height: dimensions }}
    >
      <Image
        src={logoImageUrl}
        alt="Logo"
        width={dimensions || 40}
        height={dimensions || 40}
      />
      <p>Research Manager</p>
    </Link>
  );
};

export default Logo;
