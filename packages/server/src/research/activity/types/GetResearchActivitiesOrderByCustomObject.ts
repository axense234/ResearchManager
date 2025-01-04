import { Prisma } from '@prisma/client';

type GetResearchActivitiesOrderByCustomObject =
  | ({
      name?: 'asc' | 'desc';
      instanceTemplates?: { _count: string | undefined };
    } & Prisma.DayTemplateOrderByWithRelationInput)
  | Prisma.DayTemplateOrderByWithRelationInput[]
  | undefined;
export default DayTemplatesOrderByObject;
