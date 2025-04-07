// React
import { useEffect } from "react";
// Data
import { AUTO_CLOSE_MODAL } from "@/data/general";
// Helpers
import { closeModal } from "@/helpers";
// Redux
import { useAppDispatch, useAppSelector } from "../redux";
import { selectModal } from "@/redux/slices/general";

export const useCloseModal = (showModal: boolean) => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(selectModal);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showModal) {
      timeout = setTimeout(() => {
        closeModal(dispatch, modal);
      }, AUTO_CLOSE_MODAL);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);
};
