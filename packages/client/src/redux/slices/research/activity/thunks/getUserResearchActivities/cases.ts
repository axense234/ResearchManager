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

export const getUserResearchActivitiesPending: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchActivities = "PENDING";
};

export const getUserResearchActivitiesFulfilled: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  const researchActivities = action.payload as ResearchActivity[];
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchActivitiesRedux = researchActivities.map((activity) => {
      return transformEntityIntoEntityRedux(
        activity,
        "researchActivity",
      ) as ResearchActivityRedux;
    });

    researchActivitiesAdapter.setAll(state, researchActivitiesRedux);
    state.loadingGetUserResearchActivities = "SUCCEEDED";
  } else {
    state.loadingGetUserResearchActivities = "REJECTED";
  }
};

export const getUserResearchActivitiesRejected: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchActivities = "REJECTED";
};
