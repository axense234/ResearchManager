"use client";
// Interfaces
import { FC } from "react";
// SCSS
import sidebarButtonsStyles from "@/scss/components/layout/sidebar/SidebarButtons.module.scss";
// Data
import { navigationButtonsContent } from "@/data/general/components";
// Components
import SidebarButton from "./SidebarButton";
// Redux
import { useAppDispatch } from "@/hooks";
// Helpers
import { selectOnButtonClickFunction } from "@/helpers";

const SidebarButtons: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <ul className={sidebarButtonsStyles.sidebarButtonsContainer}>
      {navigationButtonsContent.map((sidebarButtonContent) => {
        return (
          <li key={sidebarButtonContent.buttonLabel}>
            <SidebarButton
              button={sidebarButtonContent}
              onClickFunction={selectOnButtonClickFunction(
                dispatch,
                sidebarButtonContent.buttonLabel,
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarButtons;
