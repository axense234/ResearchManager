// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Types
import { ResearchPhase } from "@prisma/client";
import {
  CreateResearchPhaseDto,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";

export const createResearchPhase = createAsyncThunk<
  ResearchPhase | AxiosError,
  CreateResearchPhaseDto
>("researchPhases/createResearchPhase", async (createResearchPhaseDto) => {
  try {
    console.log(createResearchPhaseDto);
    const res = (
      await axiosInstance.post(
        "/researchPhases/create",
        createResearchPhaseDto,
        {
          params: {
            includeValues: "researchLogs, researchSessions, tags",
            chosenOptionType: "include",
          },
        },
      )
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchPhase;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
