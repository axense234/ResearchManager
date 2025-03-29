// Nest
import { Injectable } from '@nestjs/common';
// Types
import { DataObjectBuilderDataObject, DataObjectBuilderParams } from '../types';
import { UserUpdateDataObject } from 'src/modules/entity/user/types';
import { UserCreateDataObject } from 'src/modules/entity/auth/types/object/UserCreateDataObject';
import { ResearchActivityCreateDataObject } from 'src/modules/entity/research/activity/types';
// Argon
import * as argon from 'argon2';
// Services
import { ChooseAllowedBuilderValuesService } from './chooseAllowedBuilderValues.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DataObjectBuilderService {
  constructor(
    private chooseAllowedBuilderValuesService: ChooseAllowedBuilderValuesService,
    private configService: ConfigService,
  ) {}

  async buildDataObject({
    dto,
    entityType,
    actionType,
    options,
  }: DataObjectBuilderParams): Promise<DataObjectBuilderDataObject> {
    const dataObject: DataObjectBuilderDataObject = { ...(dto as any) };
    const { allowedConnectValues } =
      this.chooseAllowedBuilderValuesService.chooseAllowedBuilderValues(
        entityType,
      );

    const { createActivityFeed = 'true', createSettings = 'true' } = options;

    const dtoPassword = (dto as UserCreateDataObject).password;

    if (dtoPassword && entityType === 'user') {
      if (dtoPassword === this.configService.get('OAUTH_PASSWORD_LABEL')) {
        (dataObject as UserUpdateDataObject | UserCreateDataObject).hash =
          this.configService.get('OAUTH_PASSWORD_LABEL');
      } else {
        (dataObject as UserUpdateDataObject | UserCreateDataObject).hash =
          await argon.hash(dto.password);
      }
      delete (dataObject as UserUpdateDataObject | UserCreateDataObject)
        .password;
    }

    if (entityType === 'user' && actionType === 'CREATE') {
      if (createSettings === 'true') {
        (dataObject as UserCreateDataObject).settings = { create: {} };
      }
      if (createActivityFeed === 'true') {
        (dataObject as UserCreateDataObject).activityFeed = {
          create: { type: 'USER' },
        };
      }
    }

    if (
      entityType === 'researchActivity' &&
      actionType === 'CREATE' &&
      createActivityFeed === 'true'
    ) {
      (dataObject as ResearchActivityCreateDataObject).activityFeed = {
        create: { type: 'RESEARCH_ACTIVITY' },
      };
    }

    allowedConnectValues.forEach((connectValue) => {
      if (dto[connectValue.entityType]) {
        switch (connectValue.rel) {
          case 'OTO':
            dataObject[connectValue.entityType] = {
              connect: { id: dto[connectValue.entityType] },
            };
            break;
          case 'MTM':
            dataObject[connectValue.entityType] = {
              connect: dto[connectValue.entityType].map((id: string) => {
                return { id };
              }),
            };
            break;
          case 'OTM':
            dataObject[connectValue.entityType] = {
              connect: dto[connectValue.entityType].map((id: string) => {
                return { id };
              }),
            };
            break;
          default:
            break;
        }
      }
    });

    return dataObject;
  }
}
