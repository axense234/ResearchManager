// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Types
import { ResearchPhase } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const getUserResearchPhase = createAsyncThunk<
  ResearchPhase | AxiosError,
  string
>("researchPhases/getUserResearchPhase", async (researchPhaseId) => {
  try {
    const res = (await axiosInstance.get(`/researchPhases/${researchPhaseId}`))
      .data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchPhase;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
