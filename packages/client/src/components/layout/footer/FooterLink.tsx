// React
import { FC } from "react";
// Interfaces
import { FooterLinkProps } from "@/core/interfaces/layout/footer";
// SCSS
import footerLinkStyles from "@/scss/components/layout/footer/FooterLink.module.scss";
// i18n
import { Link } from "@/i18n/routing";
// Redux
import { useSelectOnButtonClickFunction } from "@/hooks";

const FooterLink: FC<FooterLinkProps> = ({ link }) => {
  const { buttonLabel, buttonType, buttonDest } = link;

  const onButtonClickFunction = useSelectOnButtonClickFunction(
    buttonLabel,
    "footer",
  );

  if (buttonType === "link") {
    return (
      <Link
        href={buttonDest as string as any}
        title={buttonLabel}
        aria-label={buttonLabel}
        key={buttonDest}
        className={footerLinkStyles.footerLinkContainer}
      >
        {buttonLabel}
      </Link>
    );
  } else if (buttonType === "functional") {
    return (
      <button
        type="button"
        title={buttonLabel}
        aria-label={buttonLabel}
        className={footerLinkStyles.footerLinkContainer}
        onClick={onButtonClickFunction}
      >
        {buttonLabel}
      </button>
    );
  }
};

export default FooterLink;
