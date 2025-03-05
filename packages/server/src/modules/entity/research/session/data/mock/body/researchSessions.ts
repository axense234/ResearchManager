// Types
import { ResearchSession } from '@prisma/client';

export const researchSessionsMockData: ResearchSession[] = [
  {
    id: 'df3ae5db-71d9-407b-bd28-87a27d04e46f',
    name: 'Log1',
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 124,
    archived: false,
    content: 'There was once a red mist...',
    imagesSrc: ['image 1 src', 'image 2 src'],
    currentStatusType: 'STARTED',
    currentStatusDate: new Date('2025-02-27T07:05:11.145Z'),
    researchPhaseId: 'f15183be-1a1d-45b7-b3ef-96410f8eafe7',
    createdAt: new Date('2025-02-27T07:06:58.675Z'),
    updatedAt: new Date('2025-02-27T07:06:58.675Z'),
  },
  {
    id: 'f062698a-7df0-4db1-881d-ab8c5a46d739',
    name: 'Polynomial Equations 1',
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 63,
    archived: false,
    content: 'Did some polynomial equations today, idk...',
    imagesSrc: ['image 1 src'],
    currentStatusType: 'PAUSED',
    currentStatusDate: new Date('2025-02-27T07:09:18.206Z'),
    researchPhaseId: 'f15183be-1a1d-45b7-b3ef-96410f8eafe7',
    createdAt: new Date('2025-02-27T07:15:03.059Z'),
    updatedAt: new Date('2025-02-27T07:15:03.059Z'),
  },
  {
    id: '689e301a-f851-45c2-a256-1ba3ea20a02f',
    name: 'Polynomial Equations 1',
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 63,
    archived: false,
    content: 'Did some polynomial equations today, idk...',
    imagesSrc: ['image 1 src'],
    currentStatusType: 'PAUSED',
    currentStatusDate: new Date('2025-02-27T07:09:18.206Z'),
    researchPhaseId: 'f15183be-1a1d-45b7-b3ef-96410f8eafe7',
    createdAt: new Date('2025-02-27T07:15:05.321Z'),
    updatedAt: new Date('2025-02-27T07:15:05.321Z'),
  },
  {
    id: '5b2da299-3b9a-4b1a-9ee4-4adc03da1ecc',
    name: 'Polynomial Equations 2',
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 63,
    archived: false,
    content: 'Did some polynomial equations today, idk...',
    imagesSrc: ['image 1 src'],
    currentStatusType: 'PAUSED',
    currentStatusDate: new Date('2025-02-27T07:09:18.206Z'),
    researchPhaseId: 'f15183be-1a1d-45b7-b3ef-96410f8eafe7',
    createdAt: new Date('2025-02-27T07:15:08.803Z'),
    updatedAt: new Date('2025-02-27T07:15:08.803Z'),
  },
  {
    id: '25e99d0b-b306-419c-8d22-c9054ee76347',
    name: 'Polynomial Equations 3',
    archived: false,
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 63,
    content: 'Did some polynomial equations today, idk...',
    imagesSrc: ['image 1 src'],
    currentStatusType: 'PAUSED',
    currentStatusDate: new Date('2025-02-27T07:09:18.206Z'),
    researchPhaseId: 'f15183be-1a1d-45b7-b3ef-96410f8eafe7',
    createdAt: new Date('2025-02-27T07:15:11.201Z'),
    updatedAt: new Date('2025-02-27T07:15:11.201Z'),
  },
  {
    id: '159ee277-2909-4a2a-839e-2df65456bf50',
    name: 'Polynomial Equations 4',
    archived: false,
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 63,
    content: 'Did some polynomial equations today, idk...',
    imagesSrc: ['image 1 src'],
    currentStatusType: 'PAUSED',
    currentStatusDate: new Date('2025-02-27T07:09:18.206Z'),
    researchPhaseId: 'f15183be-1a1d-45b7-b3ef-96410f8eafe7',
    createdAt: new Date('2025-02-27T07:15:13.956Z'),
    updatedAt: new Date('2025-02-27T07:15:13.956Z'),
  },
];
