// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { UpdateResearchSessionDtoRedux } from "@/core/types";
import { ResearchSession } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";

export const updateResearchSession = createAsyncThunk<
  ResearchSession | AxiosError,
  UpdateResearchSessionDtoRedux
>(
  "researchSessions/updateResearchSession",
  async ({ dto, researchSessionId }) => {
    try {
      const res = (
        await axiosInstance.patch(
          `/researchSessions/${researchSessionId}/update`,
          dto,
          {
            params: {
              includeValues: "tags",
              chosenOptionType: "include",
            },
          },
        )
      ).data as ReturnObjectBuilderReturnObject;

      return res.payload as ResearchSession;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
