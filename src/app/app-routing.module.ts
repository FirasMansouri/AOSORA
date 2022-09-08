import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './appComponents/home/home.component';
import { LoginComponent } from './appComponents/login/login.component';
import { RegisterComponent } from './appComponents/register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsPageComponent},
  {path:'cart', component: CartComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
