// Types
import {
  ActivityLogPayload,
  CreateActivityLogDto,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createActivityLog = createAsyncThunk<
  ActivityLogPayload | AxiosError,
  CreateActivityLogDto
>("activityLogs/createActivityLog", async (createActivityLogDto) => {
  console.log(createActivityLogDto);
  try {
    const res = (
      await axiosInstance.post("/activityLogs/create", createActivityLogDto, {
        params: {
          createActivityLogDto,
          includeValues: "activityDays",
          chosenOptionType: "include",
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ActivityLogPayload;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
