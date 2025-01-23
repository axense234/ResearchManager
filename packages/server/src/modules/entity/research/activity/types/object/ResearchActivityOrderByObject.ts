export class ResearchActivityOrderByObject {
  tags?: { _count?: 'asc' | 'desc' };
  researchPhases?: { _count?: 'asc' | 'desc' };

  [key: string]: 'asc' | 'desc' | { _count?: 'asc' | 'desc' };
}
