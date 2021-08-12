import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  private apiUrl = this.configService.get<string>('VTEX_URL');

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  getProductsByBrand({ brand, segment }): Observable<any[]> {
    return this.httpService
      .get(
        `${this.apiUrl}/api/catalog_system/pub/products/search/${brand}?map=b`,
        {
          headers: { cookie: `vtex_segment=${segment}` },
        },
      )
      .pipe(map((product) => product.data));
  }
}
