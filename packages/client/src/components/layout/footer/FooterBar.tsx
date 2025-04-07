// Interfaces
import { FC } from "react";
// Components
import SocialMediaIcons from "@/components/shared/general/social/SocialMediaIcons";
// SCSS
import footerBarStyles from "@/scss/components/layout/footer/FooterBar.module.scss";
// Components
import Logo from "@/components/shared/general/Logo";

const FooterBar: FC = () => {
  return (
    <div className={footerBarStyles.footerBarContainer}>
      <div className={footerBarStyles.footerBarCopyright}>
        <div className={footerBarStyles.footerBarCopyrightLogo}>
          <Logo clickable={true} type="light" width={48} />
          <p>Research Manager</p>
        </div>
        <p>axense's Team Copyright © 2024</p>
      </div>
      <SocialMediaIcons />
    </div>
  );
};

export default FooterBar;
