// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type ReturnObjectBuilderDtoOptionsType = {
  nbHits: ApiPropertyOptions;
  message: ApiPropertyOptions;
  notes: ApiPropertyOptions;
  payload: ApiPropertyOptions;
  access_token: ApiPropertyOptions;
  error: ApiPropertyOptions;
  statusCode: ApiPropertyOptions;
};

export const returnObjectBuilderDtoOptions: ReturnObjectBuilderDtoOptionsType =
  {
    nbHits: {
      example: 3,
      description: 'The number of entities returned by the request.',
      required: false,
    },
    message: {
      example: 'Successfully created entity.',
      description: 'The message sent back by the request for info purposes.',
      required: false,
    },
    notes: {
      type: 'string',
      example:
        'No includeValues were provided even tho chosenOptionType is given and equal to "include".',
      description:
        'The additional message/messages sent back by the request. Those usually serve as a warning.',
      required: false,
    },
    payload: {
      example: {
        username: 'Joe',
        hash: 'some random hash idk',
        email: 'joe@gmail.com',
      },
      description:
        'The payload sent back by the request. It can represent either 1 or more entities.',
      required: false,
    },
    access_token: {
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImkgYW0gaW4geW91ciB3YWxscyIsIndhcm5pbmciOiJydW4iLCJpYXQiOjE1MTYyMzkwMjJ9.YAeybtdSDCBDkApt1UKz6cOq-RujwMvwNqgvNremtR8',
      description:
        'The jwt token sent back by the request. Usually is sent back when an user sign up/in. Also do not decode the example above.',
      required: false,
    },
    error: {
      example: 'Bad Request',
      description:
        'The error type of the request. Usually sent when things get bad.',
      required: false,
    },
    statusCode: {
      example: 201,
      description: 'The status code sent back by the request.',
      required: false,
    },
  };
