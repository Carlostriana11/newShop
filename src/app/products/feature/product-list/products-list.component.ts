import { Component, inject } from '@angular/core';
import { ProductsSateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers:[ProductsSateService]
})
export default class ProductsListComponent {

  productsStates = inject(ProductsSateService);

  cartState = inject(CartStateService).state;
  changePage(){
    const page = this.productsStates.state.page() +1;
    this.productsStates.changePage$.next(page)
  }

  addToCart(product: Product){
    this.cartState.add({
      product,
      quantity: 1
    })
  }
}
