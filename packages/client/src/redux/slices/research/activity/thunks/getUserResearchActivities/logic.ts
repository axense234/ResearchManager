// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Types
import { ResearchActivity } from "@prisma/client";
import {
  GetResearchActivitiesQueryParams,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";

export const getUserResearchActivities = createAsyncThunk<
  ResearchActivity[] | AxiosError,
  GetResearchActivitiesQueryParams
>("researchActivities/getUserResearchActivities", async (queryParams) => {
  try {
    const {
      includeValues,
      chosenOptionType,
      selectValues,
      searchByKey,
      searchByValue,
      sortByKeys,
      sortByOrders,
      userId,
    } = queryParams;

    const res = (
      await axiosInstance.get(`/researchActivities`, {
        params: {
          includeValues,
          selectValues,
          chosenOptionType,
          searchByKey,
          searchByValue,
          sortByKeys,
          sortByOrders,
          userId,
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchActivity[];
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
