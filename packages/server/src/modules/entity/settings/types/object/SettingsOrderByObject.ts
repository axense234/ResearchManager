export class SettingsOrderByObject {
  [key: string]: 'asc' | 'desc' | { _count?: 'asc' | 'desc' };
}
