export class ResearchLogOrderByObject {
  tags?: { _count?: 'asc' | 'desc' };

  [key: string]: 'asc' | 'desc' | { _count?: 'asc' | 'desc' };
}
