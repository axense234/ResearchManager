// Interfaces
import { FC } from "react";
// SCSS
import sidebarStyles from "@/scss/components/layout/sidebar/Sidebar.module.scss";
// Components
import SidebarButtons from "./SidebarButtons";
import SidebarTitle from "./SidebarTitle";

const Sidebar: FC = () => {
  return (
    <aside className={sidebarStyles.sidebarContainer}>
      <SidebarTitle />
      <SidebarButtons />
    </aside>
  );
};

export default Sidebar;
