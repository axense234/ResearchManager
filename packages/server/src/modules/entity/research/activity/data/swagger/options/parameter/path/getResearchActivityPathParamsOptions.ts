// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetResearchActivityPathParamsApiOptionsType = {
  researchActivityId: ApiParamOptions;
};

export const getResearchActivityPathParamsApiParamOptions: GetResearchActivityPathParamsApiOptionsType =
  {
    researchActivityId: {
      required: true,
      name: 'researchActivityId',
      description: 'The ID of your desired Research Activity to be fetched.',
    },
  };
