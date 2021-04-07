import { Category } from 'src/app/models/category';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  categories!: Category[];
  min: number[] = [];
  max: any[] = [];
  category = '';
  ngOnInit(): void {
    this.collectAllCategory();
  }
  collectAllCategory() {
    this.categoryService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (response: HttpErrorResponse) => {
        console.log(response);
      },
    });
  }
}
