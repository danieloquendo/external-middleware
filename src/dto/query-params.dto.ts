import { IsNotEmpty } from 'class-validator';

export class QueryParamsDto {
  @IsNotEmpty()
  segment: string;

  @IsNotEmpty()
  brand: string;
}
