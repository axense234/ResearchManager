// Types
import {
  ExtraReducerFuncType,
  ResearchActivitiesSliceStateType,
  ResearchActivityRedux,
} from "@/core/types";
import { AxiosError } from "axios";
import { ResearchActivity } from "@prisma/client";
// Adapter
import { researchActivitiesAdapter } from "../../adapter";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const updateResearchActivityPending: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchActivity = "PENDING";
};

export const updateResearchActivityFulfilled: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  const researchActivity = action.payload as ResearchActivity;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchActivityRedux = transformEntityIntoEntityRedux(
      researchActivity,
      "researchActivity",
    ) as ResearchActivityRedux;

    researchActivitiesAdapter.updateOne(state, {
      changes: { ...researchActivityRedux },
      id: researchActivityRedux.id,
    });
    state.loadingUpdateResearchActivity = "SUCCEEDED";
  } else {
    state.loadingUpdateResearchActivity = "REJECTED";
  }
};

export const updateResearchActivityRejected: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchActivity = "REJECTED";
};
