import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//Config
import * as cors from 'cors';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
  await app.listen(3000);
}
bootstrap();
