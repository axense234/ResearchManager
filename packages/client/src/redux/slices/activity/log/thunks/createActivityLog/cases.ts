// Types
import {
  ActivityLogRedux,
  ActivityLogsSliceStateType,
  ExtraReducerFuncType,
} from "@/core/types";
import { ActivityLogPayload } from "@researchmanager/shared/types";
import { AxiosError } from "axios";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";
// Adapter
import { activityLogsAdapter } from "../../adapter";

export const createActivityLogPending: ExtraReducerFuncType<
  ActivityLogsSliceStateType
> = (state, action) => {};

export const createActivityLogFulfilled: ExtraReducerFuncType<
  ActivityLogsSliceStateType
> = (state, action) => {
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const activityLog = action.payload as ActivityLogPayload;

    const activityLogRedux = transformEntityIntoEntityRedux(
      activityLog,
      "activityLog",
    ) as ActivityLogRedux;

    activityLogsAdapter.addOne(state, activityLogRedux);
  } else {
  }
};

export const createActivityLogRejected: ExtraReducerFuncType<
  ActivityLogsSliceStateType
> = (state, action) => {};
