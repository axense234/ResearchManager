// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchActivity } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";

export const getUserResearchActivity = createAsyncThunk<
  ResearchActivity | AxiosError,
  string
>("researchActivities/getUserResearchActivity", async (researchActivityId) => {
  try {
    const res = (
      await axiosInstance.get(`/researchActivities/${researchActivityId}`)
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchActivity;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
