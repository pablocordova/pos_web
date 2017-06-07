import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { AlertComponent } from './_directives/alert.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { AdministrationComponent } from './administration/administration.component';
import { HistoryDocumentsComponent } from './history-documents/history-documents.component';

// To angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MdButtonModule } from '@angular/material';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    PurchasesComponent,
    SalesComponent,
    InventoryComponent,
    ReportsComponent,
    SettingsComponent,
    AdministrationComponent,
    HistoryDocumentsComponent,
    LateralBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdButtonModule
  ],
  providers: [
    AuthGuard,
    UserService,
    AlertService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
