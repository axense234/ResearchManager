// Types
import {
  ActivityLogRedux,
  ActivityLOgsSliceStateType,
  ExtraReducerFuncType,
} from "@/core/types";
import { ActivityLogPayload } from "@researchmanager/shared/types";
import { AxiosError } from "axios";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";
// Adapter
import { activityLogsAdapter } from "../../adapter";

export const createActivityLogPending: ExtraReducerFuncType<
  ActivityLOgsSliceStateType
> = (state, action) => {};

export const createActivityLogFulfilled: ExtraReducerFuncType<
  ActivityLOgsSliceStateType
> = (state, action) => {
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const activityLog = action.payload as ActivityLogPayload;

    console.log(activityLog);

    const activityLogRedux = transformEntityIntoEntityRedux(
      activityLog,
      "activityLog",
    ) as ActivityLogRedux;

    activityLogsAdapter.addOne(state, activityLogRedux);
  } else {
  }
};

export const createActivityLogRejected: ExtraReducerFuncType<
  ActivityLOgsSliceStateType
> = (state, action) => {};
