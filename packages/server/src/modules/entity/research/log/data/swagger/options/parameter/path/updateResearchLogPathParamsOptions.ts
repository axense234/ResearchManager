// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateResearchLogPathParamsApiOptionsType = {
  researchLogId: ApiParamOptions;
};

export const updateResearchLogPathParamsApiOptions: UpdateResearchLogPathParamsApiOptionsType =
  {
    researchLogId: {
      required: true,
      name: 'researchLogId',
      description: 'The ID of your desired Research Log to be updated.',
    },
  };
