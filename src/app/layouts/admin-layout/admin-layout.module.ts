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
import { OrderDetailsComponent } from 'app/order-details/order-details.component';
import { PlayersComponent } from 'app/players/players.component';
import { TeamsComponent } from 'app/teams/teams.component';
import { MatchsComponent } from 'app/matchs/matchs.component';
import { TournamentsComponent } from 'app/tournaments/tournaments.component';
import { PlayerDetailsComponent } from 'app/player-details/player-details.component';
import { MatchDetailsComponent } from 'app/match-details/match-details.component';
import { TournamentDetailsComponent } from 'app/tournament-details/tournament-details.component';
import { AddPlayerComponent } from 'app/add-player/add-player.component';
import { AddTeamComponent } from 'app/add-team/add-team.component';
import { AddMatchComponent } from 'app/add-match/add-match.component';
import { AddTournamentComponent } from 'app/add-tournament/add-tournament.component';
import { UpdatePlayerComponent } from 'app/update-player/update-player.component';
import { UpdateTeamComponent } from 'app/update-team/update-team.component';
import { UpdateMatchComponent } from 'app/update-match/update-match.component';
import { UpdateTournamentComponent } from 'app/update-tournament/update-tournament.component';
import { TeamDetailsComponent } from 'app/team-details/team-details.component';
import { BlogsComponent } from 'app/blogs/blogs.component';
import { BlogDetailsComponent } from 'app/blog-details/blog-details.component';
import { AddBlogComponent } from 'app/add-blog/add-blog.component';
import { UpdateBlogComponent } from 'app/update-blog/update-blog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


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
    MatTooltipModule,
    MatDatepickerModule,
    CKEditorModule
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
    UpdateProductComponent,
    OrderDetailsComponent,
    PlayersComponent,
    TeamsComponent,
    MatchsComponent,
    TournamentsComponent,
    PlayerDetailsComponent,
    MatchDetailsComponent,
    TournamentDetailsComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AddMatchComponent,
    AddTournamentComponent,
    UpdatePlayerComponent,
    UpdateTeamComponent,
    UpdateMatchComponent,
    UpdateTournamentComponent,
    TeamDetailsComponent,
    BlogsComponent,
    BlogDetailsComponent,
    AddBlogComponent,
    UpdateBlogComponent
  ]
})

export class AdminLayoutModule {}
