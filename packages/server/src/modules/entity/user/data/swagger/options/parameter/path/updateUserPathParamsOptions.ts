// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateUserPathParamsApiOptionsType = {
  uniqueIdentifier: ApiParamOptions;
};

export const updateUserPathParamsApiParamOptions: UpdateUserPathParamsApiOptionsType =
  {
    uniqueIdentifier: {
      required: true,
      name: 'uniqueIdentifier',
      description: 'The unique identifier used to match the wanted User.',
    },
  };
