import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/data-http.service";
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";

@Injectable( {providedIn:'root'})
export class ProductsService extends BaseHttpService{


    getProduct():Observable<Product[]>{
        return this.http.get<any[]>(`${this.ApiUrl}/products`);
    }
}