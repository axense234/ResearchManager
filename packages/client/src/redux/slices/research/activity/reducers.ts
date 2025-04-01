// Types
import {
  LoadingStateType,
  ObjectKeyValueType,
  ResearchActivitiesSliceStateType,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "@researchmanager/shared/types";

export const researchActivitiesSliceReducers = {
  updateLoadingResearchActivityState(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<{ actionType: ActionType; value: LoadingStateType }>,
  ) {
    const actionTypeFromPayload = action.payload.actionType;
    const actionValue = action.payload.value;

    switch (actionTypeFromPayload) {
      case "GET SINGLE":
        state.loadingGetUserResearchActivity = actionValue;
        break;
      case "GET MULTIPLE":
        state.loadingGetUserResearchActivities = actionValue;
        break;
      case "CREATE":
        state.loadingCreateResearchActivity = actionValue;
        break;
      case "UPDATE":
        state.loadingUpdateResearchActivity = actionValue;

        break;
      case "DELETE":
        state.loadingDeleteResearchActivity = actionValue;
        break;
      default:
        throw new Error(
          "Invalid action type, how the f did you even get this error.",
        );
    }
  },

  updateCreateResearchActivityDto(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.createResearchActivityDto = {
      ...state.createResearchActivityDto,
      [action.payload.key]: action.payload.value,
    };
  },
};
