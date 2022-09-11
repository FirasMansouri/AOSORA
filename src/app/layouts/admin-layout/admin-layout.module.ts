import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AddProductComponent } from 'app/add-product/add-product.component';
import { UpdateProductComponent } from 'app/update-product/update-product.component';
import { ProductsComponent } from 'app/products/products.component';
import { ProductDetailsComponent } from 'app/product-details/product-details.component';
import { AddUserComponent } from 'app/add-user/add-user.component';
import { UserDetailComponent } from 'app/user-detail/user-detail.component';
import { UsersComponent } from 'app/users/users.component';
import { OrdersComponent } from 'app/orders/orders.component';
import { UpdateUserComponent } from 'app/update-user/update-user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddUserComponent,
    UserDetailComponent,
    UsersComponent,
    OrdersComponent,
    UpdateUserComponent,
    AddProductComponent,
    UpdateProductComponent
  ]
})

export class AdminLayoutModule {}
