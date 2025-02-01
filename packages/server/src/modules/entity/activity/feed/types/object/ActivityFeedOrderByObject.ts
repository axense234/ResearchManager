export class ActivityFeedOrderByObject {
  activityDays?: { _count?: 'asc' | 'desc' };

  [key: string]: 'asc' | 'desc' | { _count?: 'asc' | 'desc' };
}
