// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { ResearchLog } from "@prisma/client";
import {
  CreateResearchLogDto,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";

export const createResearchLog = createAsyncThunk<
  ResearchLog | AxiosError,
  CreateResearchLogDto
>("researchLogs/createResearchLog", async (createResearchLogDto) => {
  try {
    console.log(createResearchLogDto);
    const res = (
      await axiosInstance.post("/researchLogs/create", createResearchLogDto, {
        params: {
          includeValues: "tags",
          chosenOptionType: "include",
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as ResearchLog;
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
