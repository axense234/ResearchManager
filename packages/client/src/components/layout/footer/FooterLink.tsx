// Interface
import { FC } from "react";
import { FooterLinkProps } from "@/core/interfaces/layout/footer";
// SCSS
import footerLinkStyles from "@/scss/components/layout/footer/FooterLink.module.scss";
// i18n
import { Link } from "@/i18n/routing";

const FooterLink: FC<FooterLinkProps> = ({ link, onClickFunction }) => {
  const { buttonLabel, buttonType, buttonDest } = link;

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
        onClick={onClickFunction}
      >
        {buttonLabel}
      </button>
    );
  }
};

export default FooterLink;
