// Redux
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
// Helpers
import { setEntitiesStateFromUserPayload } from "@/helpers";
// Thunks
import {
  getProfileJWT,
  getProfileOAuth,
  signInUser,
} from "../../slices/general";
// Types
import { State } from "../../api/store";
import { UserPayload } from "@researchmanager/shared/types";
import { AxiosError } from "axios";

export const setEntitiesStateFromUserPayloadListener =
  createListenerMiddleware();

setEntitiesStateFromUserPayloadListener.startListening({
  matcher: isAnyOf(
    getProfileOAuth.fulfilled,
    getProfileJWT.fulfilled,
    signInUser.fulfilled,
  ),
  effect: async (action, listenerApi) => {
    const { getState } = listenerApi;
    const currentState = getState() as State;

    const axiosError = action.payload as AxiosError;

    if (axiosError !== undefined && !axiosError.response) {
      const userPayload = action.payload as UserPayload;
      setEntitiesStateFromUserPayload(currentState, userPayload);
    }
  },
});
