// Interfaces
import { FC } from "react";
// Data
import { sidebarButtonsContent } from "@/data/static";
// i18n
import { Link } from "@/i18n/routing";
// SCSS
import footerLinksStyles from "@/scss/components/layout/footer/FooterLinks.module.scss";

const FooterLinks: FC = () => {
  return (
    <ul className={footerLinksStyles.footerLinksContainer}>
      {sidebarButtonsContent.map(({ buttonLabel, buttonType, buttonDest }) => {
        if (buttonType === "link") {
          return (
            <li className={footerLinksStyles.footerLinkContainer}>
              <Link
                href={buttonDest as string as any}
                title={buttonLabel}
                aria-label={buttonLabel}
                key={buttonDest}
              >
                {buttonLabel}
              </Link>
            </li>
          );
        } else if (buttonType === "functional") {
          return (
            <li
              className={footerLinksStyles.footerLinkContainer}
              key={buttonLabel}
            >
              <button
                type="button"
                title={buttonLabel}
                aria-label={buttonLabel}
              >
                {buttonLabel}
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default FooterLinks;
