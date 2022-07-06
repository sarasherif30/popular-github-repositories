import { Injectable, Inject } from '@nestjs/common';
import { RequstHelper } from '../request-helper/request-helper';
import { GithubRepositoriesQueryDto } from '../dto/github-repositories-query.dto';
import { RepositoriesListDto } from '../dto/github-repositories-list.dto';

@Injectable()
export class GithubRepositoriesService {
  @Inject()
  private requstHelper: RequstHelper;

  async listRepositories(query: GithubRepositoriesQueryDto): Promise<RepositoriesListDto> {
    return await this.requstHelper.getListRepositories(query);
  }
}
