import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  getProductsByBrand(brand: string): Observable<any[]> {
    const vtexApi = this.configService.get<string>('VTEX_URL');
    return this.httpService
      .get(`${vtexApi}/api/catalog_system/pub/products/search/${brand}?map=b`)
      .pipe(map((product) => product.data));
  }
}
