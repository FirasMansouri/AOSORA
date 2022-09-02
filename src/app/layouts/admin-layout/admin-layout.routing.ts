import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ProductsComponent } from 'app/products/products.component';
import { UsersComponent } from 'app/users/users.component';
import { OrdersComponent } from 'app/orders/orders.component';

export const AdminLayoutRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [ {
        path: 'dashboard',
        component: DashboardComponent
    }]}, 
    {
        path: 'user-profile',
        component: UserProfileComponent,
        children: [ {
        path: 'user-profile',
        component: UserProfileComponent
        }]
    },
    {
        path: 'users',     
        component: UsersComponent,
        children: [ {
            path: 'users',
            component: UsersComponent
        }]
    },  
    {
        path: 'products',
        component: ProductsComponent,
        children: [ {
            path: 'products',
            component: ProductsComponent
        }]
    },  
    {
        path: 'orders',     
        component: OrdersComponent,
        children: [ {
            path: 'orders',
            component: OrdersComponent
        }]
    },

    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
