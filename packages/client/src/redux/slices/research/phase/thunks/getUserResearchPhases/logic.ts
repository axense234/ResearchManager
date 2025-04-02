// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Types
import { ResearchPhase } from "@prisma/client";
import {
  GetResearchPhasesQueryParams,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";

export const getUserResearchPhases = createAsyncThunk<
  ResearchPhase[] | AxiosError,
  GetResearchPhasesQueryParams
>("researchPhases/getUserResearchPhases", async (queryParams) => {
  try {
    const {
      searchByKey,
      searchByValue,
      sortByKeys,
      sortByOrders,
      researchActivityId,
    } = queryParams;

    const res = (
      await axiosInstance.get(`/researchPhases`, {
        params: {
          searchByKey,
          searchByValue,
          sortByKeys,
          sortByOrders,
          researchActivityId,
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchPhase[];
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
