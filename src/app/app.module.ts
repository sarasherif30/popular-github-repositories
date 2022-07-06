import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GithubRepositoriesModule } from '../github-repositories/github-repositories.module';

@Module({
  imports: [GithubRepositoriesModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
