// React
import { FC } from "react";
// SCSS
import sideBarButtonsStyles from "@/scss/components/layout/sidebar/SideBarButtons.module.scss";
// Data
import { navigationButtonsContent } from "@/data/general/components";
// Components
import SideBarButton from "./SideBarButton";
import CreateEntityModal from "@/components/shared/modal/CreateEntityModal";

const SideBarButtons: FC = () => {
  return (
    <ul className={sideBarButtonsStyles.sideBarButtonsContainer}>
      {navigationButtonsContent.map((sideBarButtonContent) => {
        return (
          <li key={sideBarButtonContent.buttonLabel}>
            {sideBarButtonContent.buttonLabel === "Create" && (
              <CreateEntityModal location="sidebar" />
            )}
            <SideBarButton button={sideBarButtonContent} />
          </li>
        );
      })}
    </ul>
  );
};

export default SideBarButtons;
