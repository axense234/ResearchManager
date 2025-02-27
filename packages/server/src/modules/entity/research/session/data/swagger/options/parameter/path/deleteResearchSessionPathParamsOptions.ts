// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteResearchSessionPathParamsApiOptionsType = {
  researchSessionId: ApiParamOptions;
};

export const deleteResearchSessionPathParamsApiOptions: DeleteResearchSessionPathParamsApiOptionsType =
  {
    researchSessionId: {
      required: true,
      name: 'researchSessionId',
      description: 'The ID of your desired Research Session to be deleted.',
    },
  };
