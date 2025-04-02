// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchLog } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";

export const getUserResearchLog = createAsyncThunk<
  ResearchLog | AxiosError,
  string
>("researchLogs/getUserResearchLog", async (researchLogId) => {
  try {
    const res = (await axiosInstance.get(`/researchLogs/${researchLogId}`))
      .data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchLog;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
