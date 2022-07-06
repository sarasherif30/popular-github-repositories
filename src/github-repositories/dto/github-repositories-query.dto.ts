import { IsEnum, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Languages } from '../enum/language.enum';

export class GithubRepositoriesQueryDto {
  @ApiProperty({
    description: 'The most popular repositories created from this date',
    example: '2022-01-01'
  })
  createdAt: Date;

  @ApiPropertyOptional({
    description: 'Numbers of repositories per page can be 10, 50 and maximum 100',
    default: 10
  })
  @IsOptional()
  @IsNumber()
  @Min(10)
  @Max(100)
  perPage?: number;

  @ApiPropertyOptional({
    description: 'Number of page',
    default: 1
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({
    description: 'Programming language',
    enum: Languages
  })
  @IsOptional()
  @IsEnum(Languages)
  language?: Languages;
}
