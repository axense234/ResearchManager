// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Types
import { UpdateResearchLogDtoRedux } from "@/core/types";
import {
  ResearchLogPayload,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";

export const updateResearchLog = createAsyncThunk<
  ResearchLogPayload | AxiosError,
  UpdateResearchLogDtoRedux
>("researchLogs/updateResearchLog", async ({ dto, researchLogId }) => {
  try {
    const res = (
      await axiosInstance.patch(`/researchLogs/${researchLogId}/update`, dto, {
        params: {
          includeValues: "tags",
          chosenOptionType: "include",
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    console.log(res.payload);

    return res.payload as ResearchLogPayload;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
