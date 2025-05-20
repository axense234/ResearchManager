// React
import { FC } from "react";
// Data
import { navigationButtonsContent } from "@/data/general/components";
// SCSS
import footerLinksStyles from "@/scss/components/layout/footer/FooterLinks.module.scss";
// Components
import FooterLink from "./FooterLink";
import CreateEntityModal from "@/components/shared/modal/CreateEntityModal";

const FooterLinks: FC = () => {
  return (
    <ul className={footerLinksStyles.footerLinksContainer}>
      {navigationButtonsContent.map((navButtonContent) => {
        return (
          <li key={navButtonContent.id}>
            {navButtonContent.buttonLabel === "Create" && (
              <CreateEntityModal location="footer" />
            )}
            <FooterLink link={navButtonContent} />
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
