"use client";
// Interfaces
import { FC, useRef } from "react";
import { EntityContainerInterfaceWrapperProps } from "@/core/interfaces";
// SCSS
import entityContainerInterfaceWrapperStyles from "@/scss/components/shared/entity/container/EntityContainerInterfaceWrapper.module.scss";
// React Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Redux
import {
  useAppSelector,
  useEntityContainerInterfaceWrapperTransition,
} from "@/hooks";
import { selectShowEntityContainerWrapper } from "@/redux/slices/general";

const EntityContainerInterfaceWrapper: FC<
  EntityContainerInterfaceWrapperProps
> = ({ children, onNextButtonClick, onPreviousButtonClick }) => {
  const leftButtonRef = useRef<HTMLDivElement>(null);
  const rightButtonRef = useRef<HTMLDivElement>(null);

  const showEntityContainerInterfaceWrapper = useAppSelector(
    selectShowEntityContainerWrapper,
  );

  useEntityContainerInterfaceWrapperTransition(
    showEntityContainerInterfaceWrapper,
    leftButtonRef,
  );
  useEntityContainerInterfaceWrapperTransition(
    showEntityContainerInterfaceWrapper,
    rightButtonRef,
  );

  return (
    <div
      className={
        entityContainerInterfaceWrapperStyles.entityContainerInterfaceWrapperContainer
      }
    >
      <div
        className={
          entityContainerInterfaceWrapperStyles.entityContainerInterfaceWrapperDirection
        }
        style={{ left: "0.25rem" }}
        ref={leftButtonRef}
        title="Previous"
        aria-label="Previous"
        onClick={onPreviousButtonClick}
      >
        <FaArrowLeft />
      </div>
      {children}
      <div
        className={
          entityContainerInterfaceWrapperStyles.entityContainerInterfaceWrapperDirection
        }
        style={{ right: "0.25rem" }}
        ref={rightButtonRef}
        title="Next"
        aria-label="Next"
        onClick={onNextButtonClick}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default EntityContainerInterfaceWrapper;
