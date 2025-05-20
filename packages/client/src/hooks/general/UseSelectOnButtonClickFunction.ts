// Types
import { ElementPositionType } from "@/core/types";
import { useAppDispatch } from "@/hooks";
// Redux
import { logOutUser } from "@/redux/slices/general";
import {
  setCreateEntityModal,
  setUpsertEntityOverlay,
} from "@/redux/slices/general/slice";

export const useSelectOnButtonClickFunction = (
  buttonLabel: string,
  buttonLocation: "sidebar" | "footer",
) => {
  const dispatch = useAppDispatch();

  switch (buttonLabel) {
    case "Logout":
      return () => dispatch(logOutUser());
    case "Research":
      return () =>
        dispatch(
          setUpsertEntityOverlay({
            entityType: "researchSession",
            method: "create",
            showOverlay: true,
          }),
        );
    case "Create":
      return () => {
        dispatch(
          setCreateEntityModal({
            isClosed: false,
            currentLocation: buttonLocation,
          }),
        );
      };
    default:
      return () => console.log("im doing nothing");
  }
};
