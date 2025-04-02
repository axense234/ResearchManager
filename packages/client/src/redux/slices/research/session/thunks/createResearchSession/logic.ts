// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchSession } from "@prisma/client";
import {
  CreateResearchSessionDto,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";

export const createResearchSession = createAsyncThunk<
  ResearchSession | AxiosError,
  CreateResearchSessionDto
>(
  "researchSessions/createResearchSession",
  async (createResearchSessionDto) => {
    try {
      console.log(createResearchSessionDto);
      const res = (
        await axiosInstance.post(
          "/researchSessions/create",
          createResearchSessionDto,
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
