// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchLog } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";

export const deleteResearchLog = createAsyncThunk<
  ResearchLog | AxiosError,
  string
>("researchLogs/deleteResearchLog", async (researchLogId) => {
  try {
    const res = (
      await axiosInstance.delete(`/researchLogs/${researchLogId}/delete`)
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchLog;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
