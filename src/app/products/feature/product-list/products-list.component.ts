import { Component, inject } from '@angular/core';
import { ProductsSateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers:[ProductsSateService]
})
export default class ProductsListComponent {

  productsStates = inject(ProductsSateService)
}
