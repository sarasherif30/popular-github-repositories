import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class RepositoriesListDto {
  @ApiModelProperty({
    description: 'List of repositories',
    isArray: true
  })
  items: [];

  @ApiModelProperty()
  incompleteResults: boolean;

  @ApiModelProperty({
    description: 'Number of github repositories'
  })
  totalCount: number;
}
