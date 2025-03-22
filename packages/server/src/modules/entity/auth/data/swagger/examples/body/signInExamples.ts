// Swagger
import { ExamplesObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
// Mock Data
import { signInMockData } from '@researchmanager/shared/mock';

export const signInExamples: ExamplesObject = {
  John: {
    description: 'Credentials for the User named John.',
    value: signInMockData.find((mock) => mock.email.startsWith('john')),
  },
  Bob: {
    description: 'Credentials for the User named Bob.',
    value: signInMockData.find((mock) => mock.email.startsWith('bob')),
  },
  Lucy: {
    description: 'Credentials for the User named Lucy.',
    value: signInMockData.find((mock) => mock.email.startsWith('lucy')),
  },
};
