// Types
import { Tag } from '@prisma/client';

export const tagsMockData: Tag[] = [
  {
    id: 'bcc26321-c186-41b7-b9c6-c49ce233decc',
    title: 'Goofy',
    backgroundColorOrImageSrc: '#FFFFFF',
    fontSize: 36,
    archived: false,
    fontFamily: 'COMIC_SANS_MS',
    userId: '181ec21e-14a9-48ff-9c70-d9d701711c61',
    createdAt: new Date('2025-03-01T09:28:28.032Z'),
    updatedAt: new Date('2025-03-01T09:28:28.032Z'),
  },
  {
    id: '978989cf-5c0b-4b8c-ab3f-dfa5ae92f6c5',
    title: 'Serious',
    backgroundColorOrImageSrc: '#FFFFFF',
    archived: false,
    fontSize: 16,
    fontFamily: 'ARIAL',
    userId: '181ec21e-14a9-48ff-9c70-d9d701711c61',
    createdAt: new Date('2025-03-01T09:28:38.042Z'),
    updatedAt: new Date('2025-03-01T09:28:38.042Z'),
  },
  {
    id: '553f461e-f422-46b6-b43a-cd8b14ecdfbb',
    title: 'Mischievious',
    backgroundColorOrImageSrc: '#FFFFFF',
    archived: false,
    fontSize: 24,
    fontFamily: 'MONACO',
    userId: '181ec21e-14a9-48ff-9c70-d9d701711c61',
    createdAt: new Date('2025-03-01T09:28:43.076Z'),
    updatedAt: new Date('2025-03-01T09:28:43.076Z'),
  },
];
