// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';

type GetUsersResponsesOptionsType = {
  '200': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getUsersResponsesOptions: GetUsersResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObject,
    status: 200,
    description: 'Successfully fetched Users.',
  },
  '404': {
    status: 404,
    description: 'Could not find any Users given the query params.',
  },
};
