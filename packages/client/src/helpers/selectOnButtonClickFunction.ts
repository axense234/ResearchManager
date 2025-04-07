// Types
import { GeneralSliceInitialStateType } from "@/core/types";
import { logOutUser } from "@/redux/slices/general";
import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

export const selectOnButtonClickFunction = (
  dispatch: ThunkDispatch<
    {
      general: GeneralSliceInitialStateType;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>,
  buttonLabel: string,
) => {
  switch (buttonLabel) {
    case "Logout":
      return () => dispatch(logOutUser());
    default:
      return () => console.log("im doing nothing");
  }
};
