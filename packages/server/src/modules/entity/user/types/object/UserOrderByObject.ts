export class UserOrderByObject {
  activityFeeds?: { _count?: 'asc' | 'desc' };
  researchActivities?: { _count?: 'asc' | 'desc' };
  tags?: { _count?: 'asc' | 'desc' };

  [key: string]: 'asc' | 'desc' | { _count?: 'asc' | 'desc' };
}
