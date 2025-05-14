// Types
import {
  ActivityDayRedux,
  ActivityDaysSliceStateType,
  ExtraReducerFuncType,
} from "@/core/types";
import { ActivityDayPayload } from "@researchmanager/shared/types";
import { AxiosError } from "axios";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";
// Adapter
import { activityDaysAdapter } from "../../adapter";

export const createActivityDayPending: ExtraReducerFuncType<
  ActivityDaysSliceStateType
> = (state, action) => {};

export const createActivityDayFulfilled: ExtraReducerFuncType<
  ActivityDaysSliceStateType
> = (state, action) => {
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const activityDay = action.payload as ActivityDayPayload;

    const activityDayRedux = transformEntityIntoEntityRedux(
      activityDay,
      "activityDay",
    ) as ActivityDayRedux;

    activityDaysAdapter.addOne(state, activityDayRedux);
  } else {
  }
};

export const createActivityDayRejected: ExtraReducerFuncType<
  ActivityDaysSliceStateType
> = (state, action) => {};
