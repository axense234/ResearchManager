// Redux
import { addErrorField, setGeneralModal } from "@/redux/slices/general/slice";
import {
  createResearchActivity,
  deleteResearchActivity,
  updateResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { State } from "@/redux/api/store";
// Helper
import { handleFormErrorInputsAndModalMessage } from "@/helpers";
// Types
import { AxiosError } from "axios";
import { createTag } from "@/redux/slices/tag/thunks";
import {
  createResearchPhase,
  deleteResearchPhase,
  updateResearchPhase,
} from "@/redux/slices/research/phase";
import {
  createResearchSession,
  updateResearchSession,
} from "@/redux/slices/research/session";

export const setModalListener = createListenerMiddleware();

setModalListener.startListening({
  matcher: isAnyOf(
    // Research Activity
    createResearchActivity.pending,
    createResearchActivity.fulfilled,
    createResearchActivity.rejected,
    updateResearchActivity.pending,
    updateResearchActivity.fulfilled,
    updateResearchActivity.rejected,
    deleteResearchActivity.pending,
    deleteResearchActivity.fulfilled,
    deleteResearchActivity.rejected,
    // Research Phase
    createResearchPhase.pending,
    createResearchPhase.fulfilled,
    createResearchPhase.rejected,
    updateResearchPhase.pending,
    updateResearchPhase.fulfilled,
    updateResearchPhase.rejected,
    deleteResearchPhase.pending,
    deleteResearchPhase.fulfilled,
    deleteResearchPhase.rejected,
    // Tag
    createTag.pending,
    createTag.fulfilled,
    createTag.rejected,
    // Research Session
    createResearchSession.pending,
    createResearchSession.fulfilled,
    createResearchSession.rejected,
    updateResearchSession.pending,
    updateResearchSession.fulfilled,
    updateResearchSession.rejected,
  ),
  effect: async (action, listenerApi) => {
    const { dispatch, getState } = listenerApi;

    const state = getState() as State;

    let methodUsed = "create";
    let entityUsed = "Research Activity";

    if (action.type.includes("researchActivities")) {
      entityUsed = "Research Activity";
    } else if (action.type.includes("researchPhases")) {
      entityUsed = "Research Phase";
    } else if (action.type.includes("tags")) {
      entityUsed = "Tag";
    } else if (action.type.includes("researchSessions")) {
      entityUsed = "Research Session";
    }

    if (action.type.includes("create")) {
      methodUsed = "create";
    } else if (action.type.includes("update")) {
      methodUsed = "update";
    } else if (action.type.includes("delete")) {
      methodUsed = "delete";
    }

    if (
      action.type.includes("create") &&
      action.type.includes("researchSessions")
    ) {
      methodUsed = "started";
    }

    const modalMessagePending = `Trying to ${methodUsed} your ${entityUsed}.`;
    const modalMessageFulfilled = `Successfully ${methodUsed + "d"} your ${entityUsed}.`;
    const modalMessageRejected = `Could not ${methodUsed} your ${entityUsed}. Something went wrong.`;

    if (action.type.endsWith("pending")) {
      dispatch(
        setGeneralModal({
          isClosed: false,
          message: modalMessagePending,
          type: "general",
          isLoading: true,
        }),
      );
    } else if (action.type.endsWith("fulfilled")) {
      const axiosError = action.payload as AxiosError;

      if (!axiosError.isAxiosError) {
        dispatch(
          setGeneralModal({
            isClosed: false,
            message: modalMessageFulfilled,
            type: "general",
            isLoading: false,
          }),
        );
      } else {
        const errorData = axiosError?.response?.data as {
          message: string[] | string;
        };
        console.log(errorData);
        console.log(state.general.errorFields);

        const { message, errorFields } = handleFormErrorInputsAndModalMessage(
          errorData.message,
        );
        console.log(message);
        console.log(errorFields);
        errorFields.forEach((field) => dispatch(addErrorField(field)));

        dispatch(
          setGeneralModal({
            isClosed: false,
            message,
            type: "form",
            isLoading: false,
          }),
        );
      }
    } else if (action.type.endsWith("rejected")) {
      dispatch(
        setGeneralModal({
          isClosed: false,
          message: modalMessageRejected,
          type: "general",
          isLoading: false,
        }),
      );
    }
  },
});
