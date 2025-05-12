// Types
import {
  ResearchActivityPayload,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
import { CreateResearchActivityDtoRedux } from "@/core/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createResearchActivity = createAsyncThunk<
  ResearchActivityPayload | AxiosError,
  CreateResearchActivityDtoRedux
>(
  "researchActivities/createResearchActivity",
  async ({ dto, createDefaultResearchPhase }) => {
    console.log(createDefaultResearchPhase);
    try {
      const res = (
        await axiosInstance.post("/researchActivities/create", dto, {
          params: {
            createDefaultResearchPhase,
            includeValues: "researchPhases, tags",
            chosenOptionType: "include",
          },
        })
      ).data as ReturnObjectBuilderReturnObject;

      return res.payload as ResearchActivityPayload;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
