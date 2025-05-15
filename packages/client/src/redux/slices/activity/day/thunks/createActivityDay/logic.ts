// Types
import {
  ActivityDayPayload,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
import { CreateActivityDayDtoRedux } from "@/core/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createActivityDay = createAsyncThunk<
  ActivityDayPayload | AxiosError,
  CreateActivityDayDtoRedux
>("activityDays/createActivityDay", async ({ dto, createActivityLogDto }) => {
  try {
    const res = (
      await axiosInstance.post("/activityDays/create", dto, {
        params: {
          createActivityLog: "true",
          createActivityLogDto: encodeURIComponent(
            JSON.stringify(createActivityLogDto),
          ),
          includeValues: "activityLogs",
          includeDepth: 2,
          chosenOptionType: "include",
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    console.log(res.payload);

    return res.payload as ActivityDayPayload;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
