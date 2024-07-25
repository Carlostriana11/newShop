import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {

  productCartItem = input.required<ProductItemCart>()


  onRemove = output<number>();
  onIncreace = output<ProductItemCart>();
  onDecreace = output<ProductItemCart>();
}
