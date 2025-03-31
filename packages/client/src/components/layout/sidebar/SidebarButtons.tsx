// Interfaces
import { FC } from "react";
// SCSS
import sidebarButtonsStyles from "@/scss/components/layout/sidebar/SidebarButtons.module.scss";
// Data
import { sidebarButtonsContent } from "@/data/static";
// Components
import SidebarButton from "./SidebarButton";

const SidebarButtons: FC = () => {
  return (
    <ul className={sidebarButtonsStyles.sidebarButtonsContainer}>
      {sidebarButtonsContent.map((sidebarButtonContent) => {
        return (
          <SidebarButton
            {...sidebarButtonContent}
            key={sidebarButtonContent.buttonLabel}
          />
        );
      })}
    </ul>
  );
};

export default SidebarButtons;
