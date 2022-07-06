import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ServerErrorDto {
  @ApiModelProperty({ example: 500 })
  statusCode: number;

  @ApiModelProperty({ example: 'Internal server error' })
  error: string;
}
