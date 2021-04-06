import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryUrl = 'http://localhost/api/categories';
  constructor(private http: HttpClient, private userService: UserService) {}
  getAllCategories(): Observable<Category[]> {
    // need to build URL based on category id

    return this.http
      .get<GetResponse>(this.categoryUrl)
      .pipe(map((response) => response.categories));
  }
}
interface GetResponse {
  categories: Category[];
}
