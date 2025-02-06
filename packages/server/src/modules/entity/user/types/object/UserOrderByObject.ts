export class UserOrderByObject {
  activityFeeds?: { _count?: 'asc' | 'desc' };
  archivedResearchActivities?: { _count?: 'asc' | 'desc' };
  archivedResearchLogs?: { _count?: 'asc' | 'desc' };
  archivedResearchPhases?: { _count?: 'asc' | 'desc' };
  archivedResearchSessions?: { _count?: 'asc' | 'desc' };
  archivedTags?: { _count?: 'asc' | 'desc' };
  researchActivities?: { _count?: 'asc' | 'desc' };
  tags?: { _count?: 'asc' | 'desc' };

  [key: string]: 'asc' | 'desc' | { _count?: 'asc' | 'desc' };
}
