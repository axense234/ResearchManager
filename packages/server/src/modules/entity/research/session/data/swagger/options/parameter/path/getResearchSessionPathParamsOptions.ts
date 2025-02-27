// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetResearchSessionPathParamsApiOptionsType = {
  researchSessionId: ApiParamOptions;
};

export const getResearchSessionPathParamsApiOptions: GetResearchSessionPathParamsApiOptionsType =
  {
    researchSessionId: {
      required: true,
      name: 'researchSessionId',
      description: 'The ID of your desired Research Session to be found.',
    },
  };
