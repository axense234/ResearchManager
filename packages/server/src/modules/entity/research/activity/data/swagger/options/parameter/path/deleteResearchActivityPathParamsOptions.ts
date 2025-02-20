// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteResearchActivityPathParamsApiOptionsType = {
  researchActivityId: ApiParamOptions;
};

export const deleteResearchActivityPathParamsApiOptions: DeleteResearchActivityPathParamsApiOptionsType =
  {
    researchActivityId: {
      required: true,
      name: 'researchActivityId',
      description: 'The ID of your desired Research Activity to be deleted.',
    },
  };
