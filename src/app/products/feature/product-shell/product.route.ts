import { Routes } from "@angular/router";

export default [

    {
        path: '', loadComponent: () => import('../product-list/products-list.component')
    },
    {
        path: 'product/:id',
        loadComponent: () => import('../products-detail/products-detail.component'),
    },
] as Routes;