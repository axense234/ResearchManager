// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetUserPathParamsApiParamOptionsType = {
  uniqueIdentifier: ApiParamOptions;
};

export const getUserPathParamsApiParamOptions: GetUserPathParamsApiParamOptionsType =
  {
    uniqueIdentifier: {
      required: true,
      name: 'uniqueIdentifier',
      description: 'The unique identifier used to match the wanted User.',
    },
  };
