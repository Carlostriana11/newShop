import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailSateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';

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
  id = input.required<string>();

  constructor(){
    effect(() =>{
      console.log(this.id());
      this.productDetailState.getById(this.id())
    })
  }
}
