// NestJS
import { applyDecorators, UseGuards } from '@nestjs/common';
// Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';

export const JwtAuth = (options?: {
  profileRoute?: boolean;
  alwaysSkipAuthentication?: boolean;
}) => {
  if (options?.alwaysSkipAuthentication) {
    return applyDecorators();
  } else {
    const shouldSkipAuthentication =
      process.env.NODE_ENV === 'development' && !options?.profileRoute;

    return shouldSkipAuthentication
      ? applyDecorators()
      : applyDecorators(UseGuards(JwtGuard));
  }
};
