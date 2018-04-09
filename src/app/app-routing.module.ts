import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ForgotComponent } from './Component/forgot/forgot.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { ChangepasswordComponent } from './Component/changepassword/changepassword.component';
import { WatchlistComponent } from './Component/watchlist/watchlist.component';
import {AuthGuard} from './_guards';
import { ResetComponent } from './Component/reset/reset.component';
const routes:Routes = [
  {path:'',component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'AboutUs',component:AboutusComponent},
  {path:'ContactUs',component:ContactusComponent},
  {path:'profile',component:ProfileComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'watchlist',component:WatchlistComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'reset/:reset',component:ResetComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
