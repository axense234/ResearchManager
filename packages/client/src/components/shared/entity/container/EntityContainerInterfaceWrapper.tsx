// React
import { FC } from "react";
// Interfaces
import { EntityContainerInterfaceWrapperProps } from "@/core/interfaces";
// SCSS
import entityContainerInterfaceWrapperStyles from "@/scss/components/shared/entity/container/EntityContainerInterfaceWrapper.module.scss";
// Components
import NavButton from "../../general/NavButton";

const EntityContainerInterfaceWrapper: FC<
  EntityContainerInterfaceWrapperProps
> = ({
  children,
  onNextButtonClick,
  onPreviousButtonClick,
  showWrapperControls,
}) => {
  return (
    <div
      className={
        entityContainerInterfaceWrapperStyles.entityContainerInterfaceWrapperContainer
      }
    >
      <NavButton
        direction="prev"
        onNavButtonClick={onPreviousButtonClick}
        showButton={showWrapperControls}
        type="light"
      />
      {children}
      <NavButton
        direction="next"
        onNavButtonClick={onNextButtonClick}
        showButton={showWrapperControls}
        type="light"
      />
    </div>
  );
};

export default EntityContainerInterfaceWrapper;
