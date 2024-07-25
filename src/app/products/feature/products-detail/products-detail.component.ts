import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailSateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-detail.component.html',
  styles: ``,
  providers:[ProductsDetailSateService]
})
export default class ProductsDetailComponent {

  productDetailState = inject(ProductsDetailSateService).state;
  cartState = inject(CartStateService).state
  id = input.required<string>();

  constructor(){
    effect(() =>{
      console.log(this.id());
      this.productDetailState.getById(this.id())
    })
  }

  addToCart(){
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    })
  }
}
