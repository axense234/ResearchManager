// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateResearchActivityPathParamsApiOptionsType = {
  researchActivityId: ApiParamOptions;
};

export const updateResearchActivityPathParamsApiOptions: UpdateResearchActivityPathParamsApiOptionsType =
  {
    researchActivityId: {
      required: true,
      name: 'researchActivityId',
      description: 'The ID of your desired Research Activity to be updated.',
    },
  };
