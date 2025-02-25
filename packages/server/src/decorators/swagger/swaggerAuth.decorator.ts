// Nest
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiBearerAuth } from '@nestjs/swagger';

export const SwaggerAuth = (options?: { profileRoute?: boolean }) => {
  if (process.env.NODE_ENV !== 'development' || options?.profileRoute) {
    return applyDecorators(ApiBearerAuth);
  }
  return applyDecorators();
};
