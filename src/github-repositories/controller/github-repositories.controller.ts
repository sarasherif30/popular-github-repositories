import { Controller, Get, Inject, NotFoundException, Query } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { ServerErrorDto } from '../../common/dto/errors/server-error.dto';
import { GithubRepositoriesQueryDto } from '../dto/github-repositories-query.dto';
import { RepositoriesListDto } from '../dto/github-repositories-list.dto';
import { GithubRepositoriesService } from '../service/github-repositories.service';

@Controller('github-repositories')
@ApiTags('Github Repositories')
export class GithubRepositoriesController {
  @Inject()
  private githubRepositoriesService: GithubRepositoriesService;

  @Get('')
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiOkResponse({ type: RepositoriesListDto })
  @ApiInternalServerErrorResponse({ type: ServerErrorDto })
  @ApiOperation({
    summary: 'List popular github repositories',
    description: 'List popular github repositories',
    tags: ['github-repositories'],
    operationId: 'RepositoriesGetAll'
  })
  async getGithubRepositories(@Query() query: GithubRepositoriesQueryDto) {
    return this.githubRepositoriesService.listRepositories(query);
  }
}
