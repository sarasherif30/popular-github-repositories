import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepositoriesModule } from '../github-repositories.module';
import { RepositoriesListDto } from '../dto/github-repositories-list.dto';
import { RequstHelper } from '../request-helper/request-helper';
import { GithubRepositoriesService } from '../service/github-repositories.service';

describe('Github Repositories Service', () => {
  let module: TestingModule;
  let service: GithubRepositoriesService;
  let requestHelperMock: jest.Mocked<RequstHelper>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [GithubRepositoriesModule]
    }).compile();

    requestHelperMock = module.get(RequstHelper);
    service = await module.resolve(GithubRepositoriesService);
  });

  afterAll(async () => {
    await module.close();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('listRepositories()', () => {
    const repositories: RepositoriesListDto = {
      totalCount: 0,
      incompleteResults: true,
      items: []
    };

    it('should return repositories list', async () => {
      const requstHelperSpy = jest.spyOn(requestHelperMock, 'getListRepositories').mockResolvedValue(repositories);

      const result = await service.listRepositories({ createdAt: new Date('2022-01-01') });

      expect(requstHelperSpy).toBeCalled();
      expect(result).toEqual(expect.objectContaining(repositories));
    });
  });
});
