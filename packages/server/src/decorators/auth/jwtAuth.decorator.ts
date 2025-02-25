// NestJS
import { applyDecorators, UseGuards } from '@nestjs/common';
// Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';

export const JwtAuth = (options?: { profileRoute?: boolean }) => {
  if (process.env.NODE_ENV !== 'development' || options?.profileRoute) {
    return applyDecorators(UseGuards(JwtGuard));
  }
  return applyDecorators();
};
