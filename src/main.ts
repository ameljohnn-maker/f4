import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow requests from any origin (DEV ONLY)
  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const PORT = 3000;
  await app.listen(PORT);

  console.log(`🚀 Server running on http://localhost:${PORT}`);
}

bootstrap();
