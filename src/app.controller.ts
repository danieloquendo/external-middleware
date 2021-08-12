import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { QueryParamsDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProductsByBrand(@Query() queryParams: QueryParamsDto): Observable<any[]> {
    return this.appService.getProductsByBrand(queryParams);
  }
}
