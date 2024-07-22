import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', 
        loadChildren:() => import('./products/feature/product-shell/product.route'),
    },
    {
        path: 'cart', loadChildren: () => import('./cart/cart.router')
    },
    {
        path:'**',
        redirectTo:'',
    }
];
