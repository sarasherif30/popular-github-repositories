import { Inject, Injectable } from '@nestjs/common';
import { GithubRepositoriesQueryDto } from '../dto/github-repositories-query.dto';
import { RepositoriesListDto } from '../dto/github-repositories-list.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RequstHelper {
  @Inject()
  private http: HttpService;

  /**
   * Request the most popular github repositories form github API.
   * - Throws error if the API request failed.
   * - Returns the repositories list if the API request is successful.
   *
   * @param query Filter reposistories list
   * @returns Repositories list
   */

  async getListRepositories(query: GithubRepositoriesQueryDto): Promise<RepositoriesListDto> {
    const { createdAt, language, perPage, page } = query;
    let queryFilter = `q=created:>${createdAt}&sort=stars&order=desc&per_page=${perPage}&page=${page}`;

    if (language) {
      queryFilter = `q=created:>${createdAt} languge:${language}&sort=stars&order=desc&per_page=${perPage}&page=${page}`;
    }

    try {
      const url = `https://api.github.com/search/repositories?${queryFilter}`;
      const { data: repositories } = await firstValueFrom(this.http.get(url));

      return {
        totalCount: repositories.total_count,
        incompleteResults: repositories.incomplete_results,
        items: repositories.items
      };
    } catch (error) {
      console.error('Unexpected error while get repositories list from Github API', error);
      throw new Error('Failed to get repositories list from Github API');
    }
  }
}
