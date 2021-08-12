import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':brand')
  getProductsByBrand(@Param('brand') brand: string): Observable<any[]> {
    return this.appService.getProductsByBrand(brand);
  }
}
