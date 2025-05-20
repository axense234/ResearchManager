// NestJS
import { applyDecorators, UseGuards } from '@nestjs/common';
// Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';

export const JwtAuth = (options?: { profileRoute?: boolean }) => {
  const shouldSkipJwt =
    process.env.NODE_ENV === 'development' || options?.profileRoute;

  return shouldSkipJwt
    ? applyDecorators()
    : applyDecorators(UseGuards(JwtGuard));
};
