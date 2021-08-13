import { IsNotEmpty } from 'class-validator';

export class QueryParamsDto {
  @IsNotEmpty()
  segment: string;

  @IsNotEmpty()
  brand: string;

  from: number;

  to: number;
}
