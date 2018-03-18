import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import {AuthGuard} from './_guards';
const routes:Routes = [
  {path:'',component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'AboutUs',component:AboutusComponent},
  {path:'ContactUs',component:ContactusComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
