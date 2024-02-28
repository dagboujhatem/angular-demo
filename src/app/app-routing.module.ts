import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Page404Component } from './pages/page-404/page-404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service/:serviceName/:id', component: AboutComponent},
  { path: 'users', loadChildren: () => import('./dashboard/users/users.module').then(m => m.UsersModule) },
  { path: 'categories', loadChildren: () => import('./dashboard/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'products', loadChildren: () => import('./dashboard/products/products.module').then(m => m.ProductsModule) },
  { path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
