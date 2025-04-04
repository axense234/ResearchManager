// Interfaces
import { FC } from "react";
// SCSS
import sidebarStyles from "@/scss/components/layout/sidebar/Sidebar.module.scss";
// Components
import SidebarButtons from "./SidebarButtons";
import SidebarTitle from "./SidebarTitle";
import SocialMediaIcons from "@/components/shared/general/SocialMediaIcons";

const Sidebar: FC = () => {
  return (
    <aside className={sidebarStyles.sidebarContainer}>
      <SidebarTitle />
      <SidebarButtons />
      <SocialMediaIcons />
    </aside>
  );
};

export default Sidebar;
