// React
import { RefObject, useEffect } from "react";

export const useOverlayTransition = (
  showOverlay: boolean,
  overlayRef: RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const modal = overlayRef.current as HTMLDivElement;

    if (showOverlay) {
      console.log("yay");
      modal.style.display = "flex";
      timeout = setTimeout(() => {
        modal.style.opacity = "1";
        modal.style.transform = "scale(1)";
      }, 100);
    } else {
      modal.style.opacity = "0";
      timeout = setTimeout(() => {
        modal.style.display = "none";
        modal.style.transform = "scale(0)";
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showOverlay]);
};
