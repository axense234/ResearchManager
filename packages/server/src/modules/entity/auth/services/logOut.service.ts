// Nest
import { Injectable } from '@nestjs/common';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';

@Injectable()
export class LogOutService {
  constructor(private objectBuilder: ObjectBuilderService) {}

  async logOut(): Promise<ReturnObjectBuilderReturnObject> {
    try {
      return this.objectBuilder.buildReturnObject({
        actionType: 'LOGOUT',
        message: 'Successfully logged out the User.',
      });
    } catch (error) {
      throw error;
    }
  }
}
