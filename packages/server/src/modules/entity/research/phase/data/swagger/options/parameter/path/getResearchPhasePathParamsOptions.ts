// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetResearchPhasePathParamsApiOptionsType = {
  researchPhaseId: ApiParamOptions;
};

export const getResearchPhasePathParamsApiOptions: GetResearchPhasePathParamsApiOptionsType =
  {
    researchPhaseId: {
      required: true,
      name: 'researchPhaseId',
      description: 'The ID of your desired Research Phase to be found.',
    },
  };
