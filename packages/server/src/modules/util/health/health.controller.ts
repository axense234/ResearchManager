// NestJS
import { Controller, Get } from '@nestjs/common';
// Services
import { HealthService } from './health.service';
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Server Health')
@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @SwaggerHead('health', 'GET SINGLE')
  @SwaggerResponses('health', 'GET SINGLE')
  @Get()
  getHealth() {
    return this.healthService.getHealth();
  }
}
