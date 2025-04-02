// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Types
import { ResearchSession } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const deleteResearchSession = createAsyncThunk<
  ResearchSession | AxiosError,
  string
>("researchSessions/deleteResearchSession", async (researchSessionId) => {
  try {
    const res = (
      await axiosInstance.delete(
        `/researchSessions/${researchSessionId}/delete`,
      )
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchSession;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
