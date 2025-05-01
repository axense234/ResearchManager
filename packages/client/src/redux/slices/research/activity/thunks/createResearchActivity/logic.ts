// Types
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
import { ResearchActivity } from "@prisma/client";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateResearchActivityDtoRedux } from "@/core/types";

export const createResearchActivity = createAsyncThunk<
  ResearchActivity | AxiosError,
  CreateResearchActivityDtoRedux
>(
  "researchActivities/createResearchActivity",
  async ({ dto, createDefaultResearchPhase }) => {
    try {
      console.log(dto);
      const res = (
        await axiosInstance.post("/researchActivities/create", dto, {
          params: {
            createDefaultResearchPhase,
            includeValues: "researchPhases, tags",
            chosenOptionType: "include",
          },
        })
      ).data as ReturnObjectBuilderReturnObject;

      return res.payload as ResearchActivity;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
