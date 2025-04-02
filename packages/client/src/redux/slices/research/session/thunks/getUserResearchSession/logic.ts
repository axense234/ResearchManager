// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchSession } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";

export const getUserResearchSession = createAsyncThunk<
  ResearchSession | AxiosError,
  string
>("researchSessions/getUserResearchSession", async (researchSessionId) => {
  try {
    const res = (
      await axiosInstance.get(`/researchSessions/${researchSessionId}`)
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchSession;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
