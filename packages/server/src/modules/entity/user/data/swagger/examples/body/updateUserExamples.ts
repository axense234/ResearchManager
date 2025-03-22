// Types
import { ExamplesObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
// Mock Data
import { updateUserMockData } from '@researchmanager/shared/mock';

export const updateUserExamples: ExamplesObject = {
  John: {
    description: 'Updated request body for the User named John',
    value: updateUserMockData[0],
  },
};
