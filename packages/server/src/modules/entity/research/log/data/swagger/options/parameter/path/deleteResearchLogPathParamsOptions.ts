// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteResearchLogPathParamsApiOptionsType = {
  researchLogId: ApiParamOptions;
};

export const deleteResearchLogPathParamsApiOptions: DeleteResearchLogPathParamsApiOptionsType =
  {
    researchLogId: {
      required: true,
      name: 'researchLogId',
      description: 'The ID of your desired Research Log to be deleted.',
    },
  };
