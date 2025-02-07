// Nest
import { Injectable } from '@nestjs/common';
// Types
import {
  DataObjectBuilderAllowedConnectValue,
  DataObjectBuilderDataObject,
  DataObjectBuilderParams,
  EntityType,
} from '../types';
// Argon
import * as argon from 'argon2';
// Data
import { researchActivityAllowedConnectValues } from 'src/modules/entity/research/activity/data/connect/allowedConnectValues';
import { researchLogAllowedConnectValues } from 'src/modules/entity/research/log/data/connect/allowedConnectValues';
import { researchPhaseAllowedConnectValues } from 'src/modules/entity/research/phase/data/connect/allowedConnectValues';
import { researchSessionAllowedConnectValues } from 'src/modules/entity/research/session/data/connect/allowedConnectValues';
import { settingsAllowedConnectValues } from 'src/modules/entity/settings/data/connect/allowedConnectValues';
import { activityFeedAllowedConnectValues } from 'src/modules/entity/activity/feed/data/connect/allowedConnectValues';
import { activityDayAllowedConnectValues } from 'src/modules/entity/activity/day/data/connect/allowedConnectValues';
import { activityLogAllowedConnectValues } from 'src/modules/entity/activity/log/data/connect/allowedConnectValues';
import { tagAllowedConnectValues } from 'src/modules/entity/tag/data/connect/allowedConnectValues';
import { userAllowedConnectValues } from 'src/modules/entity/user/data/connect/allowedConnectValues';
import { UserUpdateDataObject } from 'src/modules/entity/user/types';
import { UserCreateDataObject } from 'src/modules/entity/auth/types/object/UserCreateDataObject';

@Injectable()
export class DataObjectBuilderService {
  constructor() {}

  chooseAllowedConnect(
    entityType: EntityType,
  ): DataObjectBuilderAllowedConnectValue[] {
    let allowedConnectValues: DataObjectBuilderAllowedConnectValue[] = [];

    switch (entityType) {
      case 'researchActivity':
        allowedConnectValues = researchActivityAllowedConnectValues;
        break;
      case 'researchPhase':
        allowedConnectValues = researchPhaseAllowedConnectValues;
        break;
      case 'researchSession':
        allowedConnectValues = researchSessionAllowedConnectValues;
        break;
      case 'researchLog':
        allowedConnectValues = researchLogAllowedConnectValues;
        break;
      case 'settings':
        allowedConnectValues = settingsAllowedConnectValues;
        break;
      case 'tag':
        allowedConnectValues = tagAllowedConnectValues;
        break;
      case 'activityFeed':
        allowedConnectValues = activityFeedAllowedConnectValues;
        break;
      case 'activityDay':
        allowedConnectValues = activityDayAllowedConnectValues;
        break;
      case 'activityLog':
        allowedConnectValues = activityLogAllowedConnectValues;
        break;
      case 'user':
        allowedConnectValues = userAllowedConnectValues;
        break;
      default:
        break;
    }

    return allowedConnectValues;
  }

  async buildDataObject({
    dto,
    entityType,
  }: DataObjectBuilderParams): Promise<DataObjectBuilderDataObject> {
    const dataObject: DataObjectBuilderDataObject = { ...(dto as any) };
    const allowedConnectValues = this.chooseAllowedConnect(entityType);

    if (dto.password && entityType === 'user') {
      (dataObject as UserUpdateDataObject | UserCreateDataObject).hash =
        await argon.hash(dto.password);
      delete (dataObject as UserUpdateDataObject | UserCreateDataObject)
        .password;
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
