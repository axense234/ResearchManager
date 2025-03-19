// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { deleteTagResponsesExamples } from '../../../examples';

type DeleteTagResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteTagResponsesOptions: DeleteTagResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully deleted Tag by ID.',
    example: deleteTagResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Bad Request.',
    example: deleteTagResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: deleteTagResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Could not find any Tags to delete with the given data.',
    example: deleteTagResponsesExamples['404'],
  },
};
