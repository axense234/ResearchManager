// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Types
import { UpdateResearchPhaseDtoRedux } from "@/core/types";
import { ResearchPhase } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const updateResearchPhase = createAsyncThunk<
  ResearchPhase | AxiosError,
  UpdateResearchPhaseDtoRedux
>("researchPhases/updateResearchPhase", async ({ dto, researchPhaseId }) => {
  try {
    const res = (
      await axiosInstance.patch(
        `/researchPhases/${researchPhaseId}/update`,
        dto,
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
