// React
import { RefObject, useEffect } from "react";

export const useScrollPopupModalIntoView = (
  modalRef: RefObject<HTMLDivElement>,
  showModal: boolean,
  modalType: "general" | "form",
) => {
  useEffect(() => {
    if (modalRef.current && showModal) {
      modalRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showModal, modalRef.current, modalType]);
};
