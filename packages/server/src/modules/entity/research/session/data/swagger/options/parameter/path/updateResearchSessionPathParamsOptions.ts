// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateResearchSessionPathParamsApiOptionsType = {
  researchSessionId: ApiParamOptions;
};

export const updateResearchSessionPathParamsApiOptions: UpdateResearchSessionPathParamsApiOptionsType =
  {
    researchSessionId: {
      required: true,
      name: 'researchSessionId',
      description: 'The ID of your desired Research Session to be updated.',
    },
  };
