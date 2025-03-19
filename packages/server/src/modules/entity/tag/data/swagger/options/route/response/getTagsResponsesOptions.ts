// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { getTagsResponsesExamples } from '../../../examples';

type GetTagsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getTagsResponsesOptions: GetTagsResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully fetched Tags.',
    example: getTagsResponsesExamples['200'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: getTagsResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Could not find any Tags given the query params.',
    example: getTagsResponsesExamples['404'],
  },
};
