// React
import { useEffect } from "react";
// Data
import { AUTO_CLOSE_MODAL } from "@/data/general";

export const useCloseModal = (
  showModal: boolean,
  closeFunction: () => void,
) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showModal) {
      timeout = setTimeout(() => {
        closeFunction();
      }, AUTO_CLOSE_MODAL);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);
};
