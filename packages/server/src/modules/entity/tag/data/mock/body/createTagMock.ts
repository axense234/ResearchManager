// Dtos
import { CreateTagDto } from '../../../dto';

export const createTagMockData: CreateTagDto[] = [
  {
    title: 'Goofy',
    backgroundColorOrImageSrc: '#FFFFFF',
    fontSize: 36,
    fontFamily: 'COMIC_SANS_MS',
    userId: 'put your user id here',
    userIdForArchivePurposes: 'put your user id here',
  },
  {
    title: 'Serious',
    backgroundColorOrImageSrc: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'ARIAL',
    userId: 'put your user id here',
    userIdForArchivePurposes: 'put your user id here',
  },
  {
    title: 'Mischievious',
    backgroundColorOrImageSrc: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'MONACO',
    userId: 'put your user id here',
    userIdForArchivePurposes: 'put your user id here',
  },
];
