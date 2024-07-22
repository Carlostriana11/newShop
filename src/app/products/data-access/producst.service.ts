import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/data-http.service";
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";
const LIMIT = 5

@Injectable( {providedIn:'root'})
export class ProductsService extends BaseHttpService{
    getProduct(page: number):Observable<Product[]>{
        return this.http.get<any[]>(`${this.ApiUrl}/products`,{
            params:{
                limit: page * LIMIT,
            }
        });
    }

    getProducts(id: string):Observable<Product>{
        return this.http.get<Product>(`${this.ApiUrl}/products/${id}`)
    }
}