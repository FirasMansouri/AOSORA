import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './appComponents/home/home.component';
import { LoginComponent } from './appComponents/login/login.component';
import { RegisterComponent } from './appComponents/register/register.component';
import { AuthGuard } from './auth.guard';
import { BlogsComponent } from './blogs/blogs.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchsComponent } from './matchs/matchs.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayersComponent } from './players/players.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {canActivate:[AuthGuard], path:'products', component: ProductsPageComponent},
  {canActivate:[AuthGuard], path:'productDetails', component: ProductDetailsComponent},
  {canActivate:[AuthGuard], path:'cart', component: CartComponent},
  {path:'contact', component: ContactComponent},
  {canActivate:[AuthGuard], path:'blogs', component:BlogsComponent},
  {canActivate:[AuthGuard], path:'SingleBlog', component:SingleBlogComponent},
  {canActivate:[AuthGuard], path:'players', component:PlayersComponent},
  {canActivate:[AuthGuard], path:'playerDetails', component:PlayerDetailsComponent},
  {canActivate:[AuthGuard], path:'teams', component:TeamsComponent},
  {canActivate:[AuthGuard], path:'teamDetails', component:TeamDetailsComponent},
  {canActivate:[AuthGuard], path:'matchs', component:MatchsComponent},
  {canActivate:[AuthGuard], path:'matchDetails', component:MatchDetailsComponent},
  {canActivate:[AuthGuard], path:'tournaments', component:TournamentsComponent},
  {canActivate:[AuthGuard], path:'tournamentDetails', component:TournamentDetailsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
