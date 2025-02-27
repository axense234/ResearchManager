// Dtos
import { CreateResearchSessionDto } from '../../../dto';

export const createResearchSessionMockData: CreateResearchSessionDto[] = [
  {
    name: 'Log1',
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 124,
    content: 'There was once a red mist...',
    imagesSrc: ['image 1 src', 'image 2 src'],
    currentStatusType: 'STARTED',
    currentStatusDate: new Date(),
    userIdForArchivePurposes: 'put your user id here',
    researchPhaseId: 'put your research phase id here',
  },
  {
    name: 'Polynomial Equations 1',
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 63,
    content: 'Did some polynomial equations today, idk...',
    imagesSrc: ['image 1 src'],
    currentStatusType: 'PAUSED',
    currentStatusDate: new Date(),
    userIdForArchivePurposes: 'put your user id here',
    researchPhaseId: 'put your research phase id here',
  },
  {
    name: 'First Part',
    backgroundColorOrImageSrc: '#FFFFFF',
    researchPoints: 63,
    content: 'This book is pretty good, too bad im not going to read it.',
    imagesSrc: ['image 1 src', 'image 2 src', 'image 3 src'],
    currentStatusType: 'RESUMED',
    currentStatusDate: new Date(),
    userIdForArchivePurposes: 'put your user id here',
    researchPhaseId: 'put your research phase id here',
  },
];
