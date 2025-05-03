// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchActivity } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
import { UpdateResearchActivityDtoRedux } from "@/core/types";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";

export const updateResearchActivity = createAsyncThunk<
  ResearchActivity | AxiosError,
  UpdateResearchActivityDtoRedux
>(
  "researchActivities/updateResearchActivity",
  async ({ dto, researchActivityId }) => {
    try {
      const res = (
        await axiosInstance.patch(
          `/researchActivities/${researchActivityId}/update`,
          dto,
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
