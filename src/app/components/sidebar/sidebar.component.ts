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
    { path: '/players', title: 'players',  icon: 'smart_toy', class: '' },
    { path: '/teams', title: 'teams',  icon:'diversity_3', class: '' },
    { path: '/matchs', title: 'matchs',  icon:'sports_esports', class: '' },
    { path: '/tournaments', title: 'tournaments',  icon:'calendar_month', class: '' },
    { path: '/blogs', title: 'blogs',  icon:'newspaper', class: '' },

    // { path: '/orderDetails', title: 'order Details',  icon:'', class: '' },
    // { path: '/productDetails', title: 'product Details',  icon:'', class: '' },
    // { path: '/addProduct', title: 'new product',  icon:'', class: '' },
    // { path: '/updateProduct', title: 'update product',  icon:'', class: '' },
    // { path: '/userDetails', title: 'user Details',  icon:'', class: '' },
    // { path: '/addAdmin', title: 'new admin',  icon:'', class: '' },
    // { path: '/updateAdmin', title: 'update Admin',  icon:'', class: '' },
    // { path: '/addPlayer', title: 'new Player',  icon:'', class: '' },
    // { path: '/updatePlayer', title: 'update Player',  icon:'', class: '' },
    // { path: '/playerDetails', title: 'player Details',  icon:'', class: '' },
    // { path: '/addTeam', title: 'new Team',  icon:'', class: '' },
    // { path: '/updateTeam', title: 'update team',  icon:'', class: '' },
    // { path: '/teamDetails', title: 'team details',  icon:'', class: '' },
    // { path: '/addMatch', title: 'new Match',  icon:'', class: '' },
    // { path: '/updateMatch', title: 'update Match',  icon:'', class: '' },
    // { path: '/matchDetails', title: 'match Details',  icon:'', class: '' },
    // { path: '/addTournament', title: 'new Tournament',  icon:'', class: '' },
    // { path: '/updateTournament', title: 'update Tournament',  icon:'', class: '' },
    // { path: '/tournamentDetails', title: 'tournament Details',  icon:'', class: '' },
    // { path: '/addBlog', title: 'new blog',  icon:'', class: '' },
    // { path: '/updateBlog', title: 'update blog',  icon:'', class: '' },
    // { path: '/blogDetails', title: 'blog Details',  icon:'', class: '' },
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
