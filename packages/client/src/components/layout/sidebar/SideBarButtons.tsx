"use client";
// Interfaces
import { FC } from "react";
// SCSS
import sideBarButtonsStyles from "@/scss/components/layout/sidebar/SideBarButtons.module.scss";
// Data
import { navigationButtonsContent } from "@/data/general/components";
// Components
import SideBarButton from "./SideBarButton";
// Redux
import { useAppDispatch } from "@/hooks";
// Helpers
import { selectOnButtonClickFunction } from "@/helpers";

const SideBarButtons: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <ul className={sideBarButtonsStyles.sideBarButtonsContainer}>
      {navigationButtonsContent.map((sideBarButtonContent) => {
        return (
          <li key={sideBarButtonContent.buttonLabel}>
            <SideBarButton
              button={sideBarButtonContent}
              onClickFunction={selectOnButtonClickFunction(
                dispatch,
                sideBarButtonContent.buttonLabel,
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SideBarButtons;
