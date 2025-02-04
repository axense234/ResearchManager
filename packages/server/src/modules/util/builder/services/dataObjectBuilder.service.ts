// Nest
import { Injectable } from '@nestjs/common';
// Types
import {
  DataObjectBuilderAllowedConnectValue,
  DataObjectBuilderDataObject,
  DataObjectBuilderParams,
  EntityType,
} from '../types';
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
      default:
        break;
    }

    return allowedConnectValues;
  }

  buildDataObject({
    dto,
    entityType,
  }: DataObjectBuilderParams): DataObjectBuilderDataObject {
    const dataObject: DataObjectBuilderDataObject = { ...(dto as any) };
    const allowedConnectValues = this.chooseAllowedConnect(entityType);

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
