// NestJS
import { Injectable } from '@nestjs/common';
// Status Code
import { StatusCodes } from 'http-status-codes';

@Injectable()
export class HealthService {
  constructor() {}

  getHealth() {
    return {
      status: StatusCodes.OK,
      message: 'Healthy.',
    };
  }
}
