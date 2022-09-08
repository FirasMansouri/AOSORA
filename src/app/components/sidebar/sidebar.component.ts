import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/users', title: 'Users',  icon:'groups', class: '' },
    { path: '/products', title: 'Products',  icon:'sell', class: '' },
    { path: '/orders', title: 'orders',  icon:'list_alt', class: '' },
    { path: '/productDetails', title: 'product Details',  icon:'', class: '' },
    { path: '/addProduct', title: 'new product',  icon:'', class: '' },
    { path: '/updateProduct', title: 'update product',  icon:'', class: '' },
    { path: '/userDetails', title: 'user Details',  icon:'', class: '' },
    { path: '/addAdmin', title: 'new admin',  icon:'', class: '' },
    { path: '/updateAdmin', title: 'update Admin',  icon:'', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
