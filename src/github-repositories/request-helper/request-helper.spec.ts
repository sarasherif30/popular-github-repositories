import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepositoriesModule } from '../github-repositories.module';
import { RequstHelper } from './request-helper';

describe('Request Helper', () => {
  let module: TestingModule;
  let helper: RequstHelper;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [GithubRepositoriesModule]
    }).compile();

    helper = await module.resolve(RequstHelper);
  });

  afterAll(async () => {
    await module.close();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(helper).toBeDefined();
  });
});
