// Interfaces
import { FC } from "react";
// Components
import Logo from "@/components/shared/general/Logo";
// SCSS
import sidebarTitleStyles from "@/scss/components/layout/sidebar/SidebarTitle.module.scss";

const SidebarTitle: FC = () => {
  return (
    <div className={sidebarTitleStyles.sidebarTitleContainer}>
      <div className={sidebarTitleStyles.sidebarTitleLogo}>
        <Logo clickable={true} type="dark" width={64} />
        <h6>Research Manager</h6>
      </div>
      <hr />
    </div>
  );
};

export default SidebarTitle;
