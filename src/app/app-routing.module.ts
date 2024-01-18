import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AuthGuard } from './shared/guards/auth.guard';
import {CreateComponent} from "./create/create.component";

const itemRoutes: Routes = [
  { path: "create", component: CreateComponent},

];

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],children: itemRoutes },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
