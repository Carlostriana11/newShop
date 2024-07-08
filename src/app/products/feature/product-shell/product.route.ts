import { Routes } from "@angular/router";

export default [

    {path: '', loadComponent: () => import('../product-list/products-list.component')}
] as Routes;