// Nest
import { NestFactory } from '@nestjs/core';
// Main Module
import { AppModule } from './app.module';
// Pipes
import { ValidationPipe } from '@nestjs/common';
// Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// Helmet
import helmet from 'helmet';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Security
  app.use(helmet());

  // Pipes
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Swagger Stuff
  const config = new DocumentBuilder()
    .setTitle('Research Manager API v1.6.3')
    .setDescription(
      'The swagger interface for the Research Manager v1.6.3 API. Used mainly for testing purposes',
    )
    .setVersion('1.6.3')
    .addBearerAuth()
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, { autoTagControllers: false });

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(PORT);
}
bootstrap();
