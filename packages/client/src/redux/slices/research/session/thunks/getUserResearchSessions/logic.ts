// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchSession } from "@prisma/client";
import {
  GetResearchSessionsQueryParams,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";

export const getUserResearchSessions = createAsyncThunk<
  ResearchSession[] | AxiosError,
  GetResearchSessionsQueryParams
>("researchSessions/getUserResearchSessions", async (queryParams) => {
  try {
    const {
      searchByKey,
      searchByValue,
      sortByKeys,
      sortByOrders,
      researchPhaseId,
    } = queryParams;

    const res = (
      await axiosInstance.get(`/researchSessions`, {
        params: {
          searchByKey,
          searchByValue,
          sortByKeys,
          sortByOrders,
          researchPhaseId,
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchSession[];
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
