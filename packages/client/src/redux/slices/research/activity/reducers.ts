// Types
import {
  LoadingStateType,
  ObjectKeyValueType,
  ResearchActivitiesSliceStateType,
  ResearchActivityRedux,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActionType,
  CreateResearchActivityDto,
  UpdateResearchActivityDto,
} from "@researchmanager/shared/types";
// Helpers
import { handleCarouselStepDirection } from "@/helpers";
// Adapter
import { researchActivitiesAdapter } from "./adapter";

export const researchActivitiesSliceReducers = {
  setCreateDefaultResearchPhase(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<boolean>,
  ) {
    state.createDefaultResearchPhase = action.payload;
  },

  setResearchActivityExamples(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<ResearchActivityRedux[]>,
  ) {
    state.researchActivitiesExamples = action.payload;
  },
  handleResearchActivityExampleCarouselStepDirection(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<{ direction: "left" | "right" }>,
  ) {
    state.currentResearchActivityExampleIndex = handleCarouselStepDirection(
      action.payload.direction,
      state.currentResearchActivityExampleIndex,
      state.researchActivitiesExamples.filter(
        (researchActivity) => !researchActivity.archived,
      ).length,
    );
  },
  handleResearchActivityCarouselStepDirection(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<{ direction: "left" | "right" }>,
  ) {
    state.currentResearchActivityIndex = handleCarouselStepDirection(
      action.payload.direction,
      state.currentResearchActivityIndex,
      state.ids.filter((id) => !state.entities[id].archived).length,
    );
  },
  setCurrentResearchActivityIndex(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<number>,
  ) {
    state.currentResearchActivityIndex = action.payload;
  },
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
  updateUpdateResearchActivityDto(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.updateResearchActivityDto = {
      ...state.updateResearchActivityDto,
      [action.payload.key]: action.payload.value,
    };
  },
  setCreateResearchActivityDto(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<CreateResearchActivityDto>,
  ) {
    state.createResearchActivityDto = action.payload;
  },
  setUpdateResearchActivityDto(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<UpdateResearchActivityDto>,
  ) {
    state.updateResearchActivityDto = action.payload;
  },
  setResearchActivities(
    state: ResearchActivitiesSliceStateType,
    action: PayloadAction<ResearchActivityRedux[]>,
  ) {
    researchActivitiesAdapter.setAll(state, action.payload);
  },
};
