import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const description = `<h3>API Docs</h3>
  <dl>
    <dt>Data source: <dt> <dd><a href="https://api.github.com/search/repositories">Github API</a><dd>
  </dl>
`;
  const config = new DocumentBuilder()
    .setTitle('Popular Github Repositories')
    .setDescription(description)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
