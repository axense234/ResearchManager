// Dtos
import { CreateActivityLogDto } from '../../../dto';

export const createActivityLogMockData: CreateActivityLogDto[] = [
  {
    subject: 'CREATE',
    message: 'Created a Research Activity, cool.',
  },
  {
    subject: 'UPDATE',
    message:
      "Updated a Research Session. Made it's status from PAUSED to RESUMED.",
  },
];
