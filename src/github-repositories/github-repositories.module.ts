import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GithubRepositoriesController } from './controller/github-repositories.controller';
import { RequstHelper } from './request-helper/request-helper';
import { GithubRepositoriesService } from './service/github-repositories.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [RequstHelper, GithubRepositoriesService],
  exports: [GithubRepositoriesService],
  imports: [HttpModule, GithubRepositoriesModule],
  controllers: [GithubRepositoriesController]
})
export class GithubRepositoriesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(GithubRepositoriesController);
  }
}
