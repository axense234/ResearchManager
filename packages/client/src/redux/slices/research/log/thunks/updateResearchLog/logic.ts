// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Types
import { ResearchLog } from "@prisma/client";
import { UpdateResearchLogDtoRedux } from "@/core/types";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const updateResearchLog = createAsyncThunk<
  ResearchLog | AxiosError,
  UpdateResearchLogDtoRedux
>("researchLogs/updateResearchLog", async ({ dto, researchLogId }) => {
  try {
    const res = (
      await axiosInstance.patch(`/researchLogs/${researchLogId}/update`, dto)
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchLog;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
