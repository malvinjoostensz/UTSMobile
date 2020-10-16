import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: ':productId',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: '/products/tabs/admin',
  //   pathMatch: 'full'
  // },
  {
    path: 'tabs',
    component: ProductsPage,
    children: [
      {
        path: 'admins',
        loadChildren: () => import('./admins/admins.module').then( m => m.AdminsPageModule)
      },
      {
        path: 'abouts',
        loadChildren: () => import('./abouts/abouts.module').then( m => m.AboutsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
