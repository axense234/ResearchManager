// Types
import { EntitiesSliceInitialStateType } from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserPayload } from "@researchmanager/shared/types";
// Helpers
import { setEntitiesStateFromUserPayload } from "@/helpers";

export const entitiesSliceReducers = {
  setEntitiesStateFromUserPayloadReducer(
    state: EntitiesSliceInitialStateType,
    action: PayloadAction<UserPayload>,
  ) {
    setEntitiesStateFromUserPayload(state, action.payload);
  },
};
