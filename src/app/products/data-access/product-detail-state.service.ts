import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import {signalSlice} from "ngxtension/signal-slice";
import { ProductsService } from "./producst.service";
import { map, Observable, pipe, switchMap } from "rxjs";


interface State {
    product: Product | null;
    status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsDetailSateService {

    private productsService = inject(ProductsService)

    private initialState: State = {
        product: null,
        status: 'loading' as const 

    };


    state = signalSlice({
        initialState: this.initialState,
        actionSources: {
            getById:(_state, $: Observable<string>) => $.pipe(
                switchMap((id) => this.productsService.getProducts(id)),
                map( data => ({product: data, status: 'success' as const })),
            )
        }
    });

}