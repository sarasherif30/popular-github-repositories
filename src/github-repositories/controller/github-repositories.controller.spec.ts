import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';
import { GithubRepositoriesModule } from '../github-repositories.module';
import { GithubRepositoriesService } from '../service/github-repositories.service';
import { GithubRepositoriesController } from './github-repositories.controller';
import { RepositoriesListDto } from '../dto/github-repositories-list.dto';

describe('Github Repositories Controller', () => {
  let controller: GithubRepositoriesController;
  const githubRepositoriesServiceMock = mock<GithubRepositoriesService>();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GithubRepositoriesModule]
    })
      .overrideProvider(GithubRepositoriesService)
      .useValue(githubRepositoriesServiceMock)
      .compile();

    controller = module.get<GithubRepositoriesController>(GithubRepositoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getGithubRepositories()', () => {
    it('should call getGithubRepositories and return repositories list', async () => {
      const repositoriesList = mock<RepositoriesListDto>();

      githubRepositoriesServiceMock.listRepositories.mockResolvedValue(repositoriesList);
      const result = await controller.getGithubRepositories({ createdAt: new Date('2022-01-01') });

      expect(githubRepositoriesServiceMock.listRepositories).toBeCalled();
      expect(result).toEqual(repositoriesList);
    });
  });
});
