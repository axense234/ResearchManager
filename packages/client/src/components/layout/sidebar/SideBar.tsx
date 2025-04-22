// Interfaces
import { FC } from "react";
// SCSS
import sideBarStyles from "@/scss/components/layout/sidebar/SideBar.module.scss";
// Components
import SocialMediaIcons from "@/components/shared/general/social/SocialMediaIcons";
import SideBarButtons from "./SideBarButtons";
import SideBarTitle from "./SideBarTitle";

const SideBar: FC = () => {
  return (
    <aside className={sideBarStyles.sideBarContainer}>
      <SideBarTitle />
      <SideBarButtons />
      <SocialMediaIcons />
    </aside>
  );
};

export default SideBar;
