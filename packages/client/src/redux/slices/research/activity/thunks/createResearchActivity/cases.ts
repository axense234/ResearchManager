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
import { testAdapter } from "../../../phase";

export const createResearchActivityPending: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingCreateResearchActivity = "PENDING";
  testAdapter(true);
};

export const createResearchActivityFulfilled: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  const researchActivity = action.payload as ResearchActivity;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchActivityRedux = transformEntityIntoEntityRedux(
      researchActivity,
    ) as ResearchActivityRedux;

    researchActivitiesAdapter.addOne(state, researchActivityRedux);

    state.loadingCreateResearchActivity = "SUCCEDED";
  } else {
    state.loadingCreateResearchActivity = "FAILED";
  }
};

export const createResearchActivityRejected: ExtraReducerFuncType<
  ResearchActivitiesSliceStateType
> = (state, action) => {
  state.loadingCreateResearchActivity = "FAILED";
};
