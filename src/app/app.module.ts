import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import{HttpModule}from'@angular/http';
import{Router,RouterModule}from'@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { ChangepasswordComponent } from './Component/changepassword/changepassword.component';
import { WatchlistComponent } from './Component/watchlist/watchlist.component';
import { StockComponent } from "./Component/stock/stock.component";

import { UserServiceService } from './_services/user-service.service';
import { ForgotService } from './_services/forgot.service';
import { StockService } from './_services/stock.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from "./_services/user.service";
import { AppRoutingModule } from './app-routing.module';

import { ChartModule } from "angular-highcharts";

import { AuthGuard } from './_guards/index';
//import { AuthInterceptor } from './_services/auth.interceptor';
import { ForgotComponent } from './Component/forgot/forgot.component';
import { ResetComponent } from './Component/reset/reset.component';
import { BarChartComponent } from './Component/bar-chart/bar-chart.component';
import { AreachartComponent } from './Component/area-chart/area-chart.component';
import { LineChartComponent } from './Component/line-chart/line-chart.component';
import { CandleChartComponent } from './Component/candle-chart/candle-chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';



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
    ProfileComponent,
    ChangepasswordComponent,
    WatchlistComponent,
    StockComponent,
    ForgotComponent,
    ResetComponent,
    BarChartComponent,
    AreachartComponent,
    LineChartComponent,
    CandleChartComponent
    ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    UserServiceService,
    UserService,
    StockService,
    AuthGuard,
    AuthenticationService,
    ForgotService
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
