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
import { PlayersComponent } from 'app/players/players.component';
import { TeamsComponent } from 'app/teams/teams.component';
import { MatchsComponent } from 'app/matchs/matchs.component';
import { TournamentsComponent } from 'app/tournaments/tournaments.component';
import { BlogsComponent } from 'app/blogs/blogs.component';
import { AddPlayerComponent } from 'app/add-player/add-player.component';
import { UpdatePlayerComponent } from 'app/update-player/update-player.component';
import { PlayerDetailsComponent } from 'app/player-details/player-details.component';
import { AddTeamComponent } from 'app/add-team/add-team.component';
import { UpdateTeamComponent } from 'app/update-team/update-team.component';
import { TeamDetailsComponent } from 'app/team-details/team-details.component';
import { AddMatchComponent } from 'app/add-match/add-match.component';
import { UpdateMatchComponent } from 'app/update-match/update-match.component';
import { MatchDetailsComponent } from 'app/match-details/match-details.component';
import { AddTournamentComponent } from 'app/add-tournament/add-tournament.component';
import { UpdateTournamentComponent } from 'app/update-tournament/update-tournament.component';
import { TournamentDetailsComponent } from 'app/tournament-details/tournament-details.component';
import { AddBlogComponent } from 'app/add-blog/add-blog.component';
import { UpdateBlogComponent } from 'app/update-blog/update-blog.component';
import { BlogDetailsComponent } from 'app/blog-details/blog-details.component';

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

    { path: 'players',      component: PlayersComponent },
    { path: 'teams',   component: TeamsComponent },
    { path: 'matchs',     component: MatchsComponent },
    { path: 'tournaments',     component: TournamentsComponent },
    { path: 'blogs',     component: BlogsComponent },
    { path: 'addPlayer',           component: AddPlayerComponent },
    { path: 'updatePlayer',          component: UpdatePlayerComponent },
    { path: 'playerDetails',          component: PlayerDetailsComponent },
    { path: 'addTeam',          component: AddTeamComponent },
    { path: 'updateTeam',  component:  UpdateTeamComponent},
    { path: 'teamDetails',        component: TeamDetailsComponent },
    { path: 'addMatch',        component: AddMatchComponent },
    { path: 'updateMatch',        component: UpdateMatchComponent },
    { path: 'matchDetails',        component: MatchDetailsComponent },
    { path: 'addTournament',           component: AddTournamentComponent },
    { path: 'updateTournament',          component: UpdateTournamentComponent },
    { path: 'tournamentDetails',          component: TournamentDetailsComponent },
    { path: 'addBlog',          component: AddBlogComponent },
    { path: 'updateBlog',  component:  UpdateBlogComponent},
    { path: 'blogDetails',        component: BlogDetailsComponent }
];
