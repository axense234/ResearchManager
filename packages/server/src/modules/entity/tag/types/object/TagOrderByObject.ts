export class TagOrderByObject {
  researchActivities?: { _count?: 'asc' | 'desc' };
  researchPhases?: { _count?: 'asc' | 'desc' };
  researchLogs?: { _count?: 'asc' | 'desc' };
  researchSessions?: { _count?: 'asc' | 'desc' };

  [key: string]: 'asc' | 'desc' | { _count?: 'asc' | 'desc' };
}
