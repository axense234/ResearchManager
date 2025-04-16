// React
import { useEffect } from "react";
// Data
import { AUTO_CLOSE_MODAL } from "@/data/general";
// Redux
import { useAppDispatch, useAppSelector } from "../redux";
import { selectModal } from "@/redux/slices/general";
import { setModal, resetErrorFields } from "@/redux/slices/general/slice";

export const useCloseModal = (showModal: boolean) => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(selectModal);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showModal) {
      timeout = setTimeout(() => {
        dispatch(setModal({ ...modal, isClosed: true }));
        dispatch(resetErrorFields());
      }, AUTO_CLOSE_MODAL);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);
};
