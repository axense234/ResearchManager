// Redux
import { ModalType } from "@/core/types";
import { GeneralSliceInitialStateType } from "@/core/types/redux/entity/general/GeneralSliceInitialStateType";
import { resetErrorFields, setModal } from "@/redux/slices/general/slice";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export const closeModal = (
  dispatch: ThunkDispatch<
    {
      general: GeneralSliceInitialStateType;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>,
  modal: ModalType,
) => {
  dispatch(setModal({ ...modal, isClosed: true }));
  dispatch(resetErrorFields());
};
