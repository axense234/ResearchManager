// Interfaces
import { FC } from "react";
// Data
import { navigationButtonsContent } from "@/data/general/components";
// SCSS
import footerLinksStyles from "@/scss/components/layout/footer/FooterLinks.module.scss";
// Components
import FooterLink from "./FooterLink";
// Helper
import { selectOnButtonClickFunction } from "@/helpers";
// Redux
import { useAppDispatch } from "@/hooks";

const FooterLinks: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <ul className={footerLinksStyles.footerLinksContainer}>
      {navigationButtonsContent.map((navButtonContent) => {
        return (
          <li key={navButtonContent.id}>
            <FooterLink
              link={navButtonContent}
              onClickFunction={selectOnButtonClickFunction(
                dispatch,
                navButtonContent.buttonLabel,
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
