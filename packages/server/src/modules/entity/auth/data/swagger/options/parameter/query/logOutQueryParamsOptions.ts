// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type LogOutQueryParamsApiPropertyOptionsType = {
  userId: ApiPropertyOptions;
  email: ApiPropertyOptions;
};

export const logOutQueryParamsApiPropertyOptions: LogOutQueryParamsApiPropertyOptionsType =
  {
    email: {
      description: 'The email of the User you want to Log Out of.',
    },
    userId: {
      description: 'The userId of the User you want to Log Out of.',
    },
  };
