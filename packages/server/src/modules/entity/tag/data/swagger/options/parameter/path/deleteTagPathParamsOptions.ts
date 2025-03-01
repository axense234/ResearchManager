// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteTagPathParamsApiOptionsType = {
  tagId: ApiParamOptions;
};

export const deleteTagPathParamsApiOptions: DeleteTagPathParamsApiOptionsType =
  {
    tagId: {
      required: true,
      name: 'tagId',
      description: 'The ID of your desired Tag to be deleted.',
    },
  };
