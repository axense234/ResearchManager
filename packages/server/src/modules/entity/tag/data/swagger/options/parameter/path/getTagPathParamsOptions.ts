// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetTagPathParamsApiOptionsType = {
  tagId: ApiParamOptions;
};

export const getTagPathParamsApiOptions: GetTagPathParamsApiOptionsType = {
  tagId: {
    required: true,
    name: 'tagId',
    description: 'The ID of your desired Tag to be found.',
  },
};
