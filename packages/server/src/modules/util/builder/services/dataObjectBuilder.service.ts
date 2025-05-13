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
import { ConfigService } from '@nestjs/config';
// Util
import { chooseAllowedBuilderValues } from 'src/util/func/chooseAllowedBuilderValues';
import { tagsMockData } from '@researchmanager/shared/mock';

@Injectable()
export class DataObjectBuilderService {
  constructor(private configService: ConfigService) {}

  async buildDataObject({
    dto,
    entityType,
    actionType,
    options,
  }: DataObjectBuilderParams): Promise<DataObjectBuilderDataObject> {
    const dataObject: DataObjectBuilderDataObject = { ...(dto as any) };
    const { allowedConnectValues } = chooseAllowedBuilderValues(entityType);

    const {
      createActivityFeed = 'true',
      createSettings = 'true',
      createDefaultResearchPhase = 'true',
      createDefaultTags = 'true',
    } = options;

    const dtoPassword = (dto as UserCreateDataObject).password;
    let skipRelationshipsConnections = false;

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
          create: {
            type: 'USER',
            activityDays: {
              create: {
                activityLogs: {
                  create: {
                    subject: 'CREATE',
                    message: `Successfully created account named ${(dataObject as UserCreateDataObject).username}! Hello!`,
                  },
                },
              },
            },
          },
        };
      }
      if (createDefaultTags === 'true') {
        (dataObject as UserCreateDataObject).tags = {
          createMany: {
            data: tagsMockData.map((tag) => {
              const pureTag = { ...tag };
              delete pureTag.id;
              delete pureTag.userId;
              return { ...pureTag };
            }),
          },
        };
      }
    }

    if (entityType === 'researchActivity' && actionType === 'CREATE') {
      if (createActivityFeed === 'true') {
        (dataObject as ResearchActivityCreateDataObject).activityFeed = {
          create: { type: 'RESEARCH_ACTIVITY' },
        };
      }
      if (createDefaultResearchPhase === 'true') {
        skipRelationshipsConnections = true;
        (dataObject as ResearchActivityCreateDataObject).researchPhases = {
          create: {
            name: (dataObject as ResearchActivityCreateDataObject).name,
          },
        };
      }
    }

    const methodBasedOnActionType = actionType === 'CREATE' ? 'connect' : 'set';

    allowedConnectValues.forEach((connectValue) => {
      if (dto[connectValue.entityType]) {
        switch (connectValue.rel) {
          case 'OTO':
            dataObject[connectValue.entityType] = {
              [methodBasedOnActionType]: { id: dto[connectValue.entityType] },
            };
            break;
          case 'MTM':
            dataObject[connectValue.entityType] = {
              [methodBasedOnActionType]: dto[connectValue.entityType].map(
                (id: string) => {
                  return { id };
                },
              ),
            };
            break;
          case 'OTM':
            if (!skipRelationshipsConnections) {
              dataObject[connectValue.entityType] = {
                [methodBasedOnActionType]: dto[connectValue.entityType].map(
                  (id: string) => {
                    return { id };
                  },
                ),
              };
            }
            break;
          default:
            break;
        }
      }
    });

    return dataObject;
  }
}
