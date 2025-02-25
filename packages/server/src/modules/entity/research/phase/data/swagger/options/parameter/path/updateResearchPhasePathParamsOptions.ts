// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateResearchPhasePathParamsApiOptionsType = {
  researchPhaseId: ApiParamOptions;
};

export const updateResearchPhasePathParamsApiOptions: UpdateResearchPhasePathParamsApiOptionsType =
  {
    researchPhaseId: {
      required: true,
      name: 'researchPhaseId',
      description: 'The ID of your desired Research Phase to be updated.',
    },
  };
