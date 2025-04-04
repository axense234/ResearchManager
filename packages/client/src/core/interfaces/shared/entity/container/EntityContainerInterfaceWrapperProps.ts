// Types
import { MouseEventHandler } from "react";

export interface EntityContainerInterfaceWrapperProps {
  children: JSX.Element;
  onPreviousButtonClick: MouseEventHandler<HTMLDivElement> | undefined;
  onNextButtonClick: MouseEventHandler<HTMLDivElement> | undefined;
}
