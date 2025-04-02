// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchLog } from "@prisma/client";
import {
  GetResearchLogsQueryParams,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";

export const getUserResearchLogs = createAsyncThunk<
  ResearchLog[] | AxiosError,
  GetResearchLogsQueryParams
>("researchLogs/getUserResearchLogs", async (queryParams) => {
  try {
    const {
      searchByKey,
      searchByValue,
      sortByKeys,
      sortByOrders,
      researchPhaseId,
    } = queryParams;

    const res = (
      await axiosInstance.get(`/researchLogs`, {
        params: {
          searchByKey,
          searchByValue,
          sortByKeys,
          sortByOrders,
          researchPhaseId,
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchLog[];
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
