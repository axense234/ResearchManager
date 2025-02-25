// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteResearchPhasePathParamsApiOptionsType = {
  researchPhaseId: ApiParamOptions;
};

export const deleteResearchPhasePathParamsApiOptions: DeleteResearchPhasePathParamsApiOptionsType =
  {
    researchPhaseId: {
      required: true,
      name: 'researchPhaseId',
      description: 'The ID of your desired Research Phase to be deleted.',
    },
  };
