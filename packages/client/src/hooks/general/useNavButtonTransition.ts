// React
import { RefObject, useEffect } from "react";

export const useNavButtonTransition = (
  show: boolean,
  buttonRef: RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const modal = buttonRef.current as HTMLDivElement;

    if (show) {
      modal.style.display = "flex";
      timeout = setTimeout(() => {
        modal.style.opacity = "1";
      }, 100);
    } else {
      modal.style.opacity = "0";
      timeout = setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [show]);
};
