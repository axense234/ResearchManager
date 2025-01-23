// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { User } from '@prisma/client';

@Injectable()
export class GetProfileService {
  constructor() {}

  async getProfile(user: User) {
    try {
      return { message: `Successfully found user ${user.username}.`, user };
    } catch (error) {
      throw error;
    }
  }
}
