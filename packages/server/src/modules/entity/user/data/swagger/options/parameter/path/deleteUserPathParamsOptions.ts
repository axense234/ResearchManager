// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteUserPathParamsApiOptionsType = {
  uniqueIdentifier: ApiParamOptions;
};

export const deleteUserPathParamsApiParamOptions: DeleteUserPathParamsApiOptionsType =
  {
    uniqueIdentifier: {
      required: true,
      name: 'uniqueIdentifier',
      description: 'The unique identifier used to match the wanted User.',
    },
  };
