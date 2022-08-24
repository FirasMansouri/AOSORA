import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './appComponents/home/home.component';
import { LoginComponent } from './appComponents/login/login.component';
import { RegisterComponent } from './appComponents/register/register.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {
    path: 'admin',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
