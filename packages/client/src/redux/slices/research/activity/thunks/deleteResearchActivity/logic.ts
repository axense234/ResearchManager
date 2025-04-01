// Redux
import { ResearchActivity } from "@prisma/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Types
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const deleteResearchActivity = createAsyncThunk<
  ResearchActivity | AxiosError,
  string
>("researchActivities/deleteResearchActivity", async (researchActivityId) => {
  try {
    const res = (
      await axiosInstance.delete(
        `/researchActivities/${researchActivityId}/delete`,
      )
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchActivity;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
