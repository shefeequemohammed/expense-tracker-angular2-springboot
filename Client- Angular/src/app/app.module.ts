import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { UpdateVendorComponent } from './components/update-vendor/update-vendor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
//Custom service for database operations
import { NewVendorService } from './services/new-vendor.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
//service for 'login' status
import { AuthGuard } from './guards/auth.guard';
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';


// Create Routes
const appRoutes: Routes = [
  {path:'', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
   {path:'add-vendor', component:AddVendorComponent, canActivate:[AuthGuard]},
  {path:'vendor/:id', component: UpdateVendorComponent, canActivate:[AuthGuard]},
   {path:'**', component: PageNotFoundComponent}
 ];
 

@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent,
    AddVendorComponent,
    UpdateVendorComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'debttracker'),
    AngularFireAuthModule,
    
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    NewVendorService,
    AuthService,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
