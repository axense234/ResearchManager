// Types
import {
  CreateResearchActivityDto,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
import { ResearchActivity } from "@prisma/client";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createResearchActivity = createAsyncThunk<
  ResearchActivity | AxiosError,
  CreateResearchActivityDto
>(
  "researchActivities/createResearchActivity",
  async (createResearchActivityDto) => {
    try {
      console.log(createResearchActivityDto);
      const res = (
        await axiosInstance.post(
          "/researchActivities/create",
          createResearchActivityDto,
          {
            params: {
              includeValues: "researchPhases, tags",
              chosenOptionType: "include",
            },
          },
        )
      ).data as ReturnObjectBuilderReturnObject;

      return res.payload as ResearchActivity;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
