// Dto
import type { CreateActivityFeedDto } from '@researchmanager/shared/types';

export const createActivityFeedMockData: CreateActivityFeedDto[] = [
  {
    type: 'RESEARCH_ACTIVITY',
    researchActivityId: 'put your research activity id here',
  },
  {
    type: 'USER',
    userId: 'put your user id here',
  },
];
