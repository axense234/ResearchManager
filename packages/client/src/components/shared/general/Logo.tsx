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
import { homePageUrl } from "@/data/general";
import { logoImageUrl } from "@/data/general/components";

const Logo: FC<LogoProps> = ({ clickable, width, type }) => {
  return (
    <Link
      href={clickable ? (homePageUrl as any) : "/"}
      className={logoStyles.logoContainer}
      style={{ cursor: clickable ? "pointer" : "default" }}
      title="Research Manager"
      aria-label="Research Manager"
    >
      <Image
        src={logoImageUrl[type]}
        alt="Logo"
        width={width}
        height={width - width / 4}
      />
    </Link>
  );
};

export default Logo;
