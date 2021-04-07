import { UserService } from './../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private userService: UserService) {}

  getAllProductsUrl = 'http://localhost/api/products';
  getAllProducts() {
    return this.http
      .get<responseProduct>(this.getAllProductsUrl, {
        headers: {
          Authorization: `Bearer ${this.userService.getToken()}`,
        },
      })
      .pipe(
        map((result: responseProduct) => {
          return result.products;
        })
      );
  }
}
interface responseProduct {
  number: number;
  products: Products[];
}
