import { ActivityFeedType } from '@prisma/client';

type GetActivityFeedsQueryParams = {
  userId?: string;
  researchActivityId?: string;
  type?: ActivityFeedType;
};

export default GetActivityFeedsQueryParams;
