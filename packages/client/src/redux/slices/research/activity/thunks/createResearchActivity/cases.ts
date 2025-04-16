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

export const createResearchActivityPending: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingCreateResearchActivity = "PENDING";
};

export const createResearchActivityFulfilled: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  const researchActivity = action.payload as ResearchActivity;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchActivityRedux = transformEntityIntoEntityRedux(
      researchActivity,
      "researchActivity",
    ) as ResearchActivityRedux;

    researchActivitiesAdapter.addOne(state, researchActivityRedux);

    state.loadingCreateResearchActivity = "SUCCEEDED";
  } else {
    state.loadingCreateResearchActivity = "REJECTED";
  }
};

export const createResearchActivityRejected: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingCreateResearchActivity = "REJECTED";
};
