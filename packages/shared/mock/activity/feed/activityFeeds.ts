// Types
import { ActivityFeed } from '@prisma/client';

export const activityFeedsMockData: ActivityFeed[] = [
  {
    id: '7eb3b436-0317-4e13-a0bd-9a097d1498c0',
    type: 'RESEARCH_ACTIVITY',
    userId: '181ec21e-14a9-48ff-9c70-d9d701711c61',
    researchActivityId: '1e9f0cd9-ec92-43a7-84ba-3e52ab9a974d',
    createdAt: new Date('2025-02-27T08:35:16.792Z'),
    updatedAt: new Date('2025-02-27T08:35:16.792Z'),
  },
  {
    id: '114dcce1-58a0-4055-b454-0cf1846c61b8',
    type: 'USER',
    userId: '181ec21e-14a9-48ff-9c70-d9d701711c61',
    researchActivityId: null,
    createdAt: new Date('2025-02-27T08:38:42.609Z'),
    updatedAt: new Date('2025-02-27T08:38:42.609Z'),
  },
  {
    id: '2033bf4c-beca-41ec-9e3d-ff5ea213a2a3',
    type: 'RESEARCH_ACTIVITY',
    userId: '181ec21e-14a9-48ff-9c70-d9d701711c61',
    researchActivityId: '1ecd3eae-cc97-4236-bda7-a1516440d093',
    createdAt: new Date('2025-02-27T09:13:05.557Z'),
    updatedAt: new Date('2025-02-27T09:13:05.557Z'),
  },
];
