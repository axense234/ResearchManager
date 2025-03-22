// Swagger
import { ExamplesObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
// Mock Data
import { signUpMockData } from '@researchmanager/shared/mock';

export const signUpExamples: ExamplesObject = {
  John: {
    description: 'Basic user with an username, email and password.',
    value: signUpMockData.find((mock) => mock.username === 'John'),
  },
  Bob: {
    description:
      'Basic user with an username, email and password with the addition of profile customization(background and profile image).',
    value: signUpMockData.find((mock) => mock.username === 'Bob'),
  },
  Lucy: {
    description:
      'Basic user with an username, email, password, background image, profile image with the possibility of connecting the user to a Settings object and/or connecting the user to an amount of Research Activities. To connect to such entities just place their id in the connect string/array.',
    value: signUpMockData.find((mock) => mock.username === 'Lucy'),
  },
};
