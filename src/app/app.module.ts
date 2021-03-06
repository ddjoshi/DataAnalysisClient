import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import{HttpModule}from'@angular/http';
import{Router,RouterModule}from'@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { UserServiceService } from './_services/user-service.service';
import { UserService,AuthenticationService } from './_services/index';
import { AppRoutingModule } from './app-routing.module';
import { ContactusComponent } from './Component/contactus/contactus.component';

import { AuthGuard } from './_guards/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    DashboardComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserServiceService,UserService,AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
