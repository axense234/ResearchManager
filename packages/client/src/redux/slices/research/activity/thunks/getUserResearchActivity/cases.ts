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

export const getUserResearchActivityPending: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchActivity = "PENDING";
};

export const getUserResearchActivityFulfilled: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  const researchActivity = action.payload as ResearchActivity;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchActivityRedux = transformEntityIntoEntityRedux(
      researchActivity,
      "researchActivity",
    ) as ResearchActivityRedux;

    researchActivitiesAdapter.upsertOne(state, researchActivityRedux);
    state.loadingGetUserResearchActivity = "SUCCEEDED";
  } else {
    state.loadingGetUserResearchActivity = "REJECTED";
  }
};

export const getUserResearchActivityRejected: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchActivity = "REJECTED";
};
