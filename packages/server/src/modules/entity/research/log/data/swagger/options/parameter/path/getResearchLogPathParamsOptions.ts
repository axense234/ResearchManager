// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetResearchLogPathParamsApiOptionsType = {
  researchLogId: ApiParamOptions;
};

export const getResearchLogPathParamsApiOptions: GetResearchLogPathParamsApiOptionsType =
  {
    researchLogId: {
      required: true,
      name: 'researchLogId',
      description: 'The ID of your desired Research Log to be found.',
    },
  };
