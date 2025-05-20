// Nest
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiBearerAuth } from '@nestjs/swagger';

export const SwaggerAuth = (options?: {
  profileRoute?: boolean;
  alwaysSkipAuthentication?: boolean;
}) => {
  if (options?.alwaysSkipAuthentication) {
    return applyDecorators();
  }

  const shouldSkipAuthentication =
    process.env.NODE_ENV === 'development' && !options?.profileRoute;

  return shouldSkipAuthentication
    ? applyDecorators()
    : applyDecorators(ApiBearerAuth());
};
