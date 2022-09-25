import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ProductsComponent } from 'app/products/products.component';
import { UsersComponent } from 'app/users/users.component';
import { OrdersComponent } from 'app/orders/orders.component';
import { ProductDetailsComponent } from 'app/product-details/product-details.component';
import { UpdateProductComponent } from 'app/update-product/update-product.component';
import { UserDetailComponent } from 'app/user-detail/user-detail.component';
import { UpdateUserComponent } from 'app/update-user/update-user.component';
import { AddProductComponent } from 'app/add-product/add-product.component';
import { AddUserComponent } from 'app/add-user/add-user.component';
import { OrderDetailsComponent } from 'app/order-details/order-details.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: 'dashboard',
    //   component: DashboardComponent,
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, 
    // {
    //     path: 'user-profile',
    //     component: UserProfileComponent,
    //     children: [ {
    //     path: 'user-profile',
    //     component: UserProfileComponent
    //     }]
    // },
    // {
    //     path: 'users',     
    //     component: UsersComponent,
    //     children: [ {
    //         path: 'users',
    //         component: UsersComponent
    //     }]
    // },  
    // {
    //     path: 'products',
    //     component: ProductsComponent,
    //     children: [ {
    //         path: 'productDetail',
    //         component: ProductDetailsComponent
    //     }]
    // },  
    // {
    //     path: 'orders',     
    //     component: OrdersComponent,
    //     children: [ {
    //         path: 'orders',
    //         component: OrdersComponent
    //     }]
    // },

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'users',     component: UsersComponent },
    { path: 'products',     component: ProductsComponent },
    { path: 'orders',           component: OrdersComponent },
    { path: 'orderDetails',          component: OrderDetailsComponent },
    { path: 'productDetails',          component: ProductDetailsComponent },
    { path: 'addProduct',          component: AddProductComponent },
    { path: 'updateProduct',  component:  UpdateProductComponent},
    { path: 'userDetails',        component: UserDetailComponent },
    { path: 'addAdmin',        component: AddUserComponent },
    { path: 'updateAdmin',        component: UpdateUserComponent },
];
