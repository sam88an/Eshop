import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private cartService: CartService) {}
  @Input() product!: Products;
  ngOnInit(): void {}
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
