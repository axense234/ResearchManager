// Types
import {
  ExtraReducerFuncType,
  ResearchActivitiesSliceStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { ResearchActivity } from "@prisma/client";
// Adapter
import { researchActivitiesAdapter } from "../../adapter";

export const deleteResearchActivityPending: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchActivity = "PENDING";
};

export const deleteResearchActivityFulfilled: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  const researchActivity = action.payload as ResearchActivity;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    researchActivitiesAdapter.removeOne(state, researchActivity.id);
    state.loadingDeleteResearchActivity = "SUCCEEDED";
  } else {
    state.loadingDeleteResearchActivity = "REJECTED";
  }
};

export const deleteResearchActivityRejected: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchActivity = "REJECTED";
};
