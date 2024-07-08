import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import {signalSlice} from "ngxtension/signal-slice";
import { ProductsService } from "./producst.service";
import { map } from "rxjs";
interface State {
    products: Product [];
    status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsSateService {

    private productsService = inject(ProductsService)

    private initialState: State = {
        products: [],
        status: 'loading' as const ,

    };

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.productsService
            .getProduct()
            .pipe(map((products) => ({ products, status: 'success' as const}))),
        ],
    });

}