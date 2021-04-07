import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  constructor(private productServices: ProductsService) {
    this.collectProducts();
  }
  products: Products[] = [];
  ngOnInit(): void {}
  collectProducts() {
    this.productServices.getAllProducts().subscribe({
      next: (result: Products[]) => {
        this.products = result;
        console.log(this.products);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
