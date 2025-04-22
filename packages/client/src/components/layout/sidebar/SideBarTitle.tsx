// Interfaces
import { FC } from "react";
// Components
import Logo from "@/components/shared/general/Logo";
// SCSS
import sideBarTitleStyles from "@/scss/components/layout/sidebar/SideBarTitle.module.scss";

const SideBarTitle: FC = () => {
  return (
    <div className={sideBarTitleStyles.sideBarTitleContainer}>
      <div className={sideBarTitleStyles.sideBarTitleLogo}>
        <Logo clickable={true} type="dark" width={64} />
        <h6>Research Manager</h6>
      </div>
      <hr />
    </div>
  );
};

export default SideBarTitle;
