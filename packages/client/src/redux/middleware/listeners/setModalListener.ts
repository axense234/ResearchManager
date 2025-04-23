// Redux
import { setModal } from "@/redux/slices/general/slice";
import { createResearchActivity } from "@/redux/slices/research/activity/thunks";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { State } from "@/redux/api/store";
// Helper
import { handleFormErrorInputsAndModalMessage } from "@/helpers";
// Types
import { AxiosError } from "axios";

export const setModalListener = createListenerMiddleware();

setModalListener.startListening({
  matcher: isAnyOf(
    createResearchActivity.pending,
    createResearchActivity.fulfilled,
    createResearchActivity.rejected,
  ),
  effect: async (action, listenerApi) => {
    const { dispatch, getState } = listenerApi;

    const state = getState() as State;

    if (createResearchActivity.pending.match(action)) {
      dispatch(
        setModal({
          isClosed: false,
          message: "Trying to create your Research Activity.",
          type: "general",
          isLoading: true,
        }),
      );
    } else if (createResearchActivity.fulfilled.match(action)) {
      const axiosError = action.payload as AxiosError;

      if (!axiosError.isAxiosError) {
        dispatch(
          setModal({
            isClosed: false,
            message: "Successfully created Research Activity.",
            type: "general",
            isLoading: false,
          }),
        );
      } else {
        const errorData = axiosError?.response?.data as {
          message: string[] | string;
        };

        const { message } = handleFormErrorInputsAndModalMessage(
          errorData.message,
          state.general.errorFields,
          (errorMessage: string) => {
            state.general.errorFields.push(errorMessage.split(" ")[0]);
          },
        );

        dispatch(
          setModal({
            isClosed: false,
            message,
            type: "form",
            isLoading: false,
          }),
        );
      }
    } else if (createResearchActivity.rejected.match(action)) {
      dispatch(
        setModal({
          isClosed: false,
          message:
            "Could not create your Research Activity. Something went wrong.",
          type: "general",
          isLoading: false,
        }),
      );
    }
  },
});
