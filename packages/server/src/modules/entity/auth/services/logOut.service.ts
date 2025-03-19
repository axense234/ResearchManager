// Nest
import { Injectable } from '@nestjs/common';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class LogOutService {
  constructor(private objectBuilder: ObjectBuilderService) {}

  async logOut(): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
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
