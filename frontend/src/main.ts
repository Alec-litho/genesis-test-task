import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

  const config = new DocumentBuilder()
    .setTitle('social site API')
    .setDescription('the API for social site')
    .setVersion('1.0.0')
    .addTag('tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/app/docs', app, document);
  await app.listen(3000);
}
bootstrap();
