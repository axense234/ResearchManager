// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateTagPathParamsApiOptionsType = {
  tagId: ApiParamOptions;
};

export const updateTagPathParamsApiOptions: UpdateTagPathParamsApiOptionsType =
  {
    tagId: {
      required: true,
      name: 'tagId',
      description: 'The ID of your desired Tag to be updated.',
    },
  };
