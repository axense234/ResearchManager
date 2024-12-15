// Nest
import { NestFactory } from '@nestjs/core';
// Main Module
import { AppModule } from './app.module';
// Pipes
import { ValidationPipe } from '@nestjs/common';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(PORT);
}
bootstrap();
