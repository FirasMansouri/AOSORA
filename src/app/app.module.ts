import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddUserComponent,
    UserDetailComponent,
    AddProductComponent,
    UsersComponent,
    OrdersComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
