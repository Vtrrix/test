import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './main/home/home.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { SideMenuComponent } from './main/side-menu/side-menu.component';
import { BreadcrumbComponent } from './main/breadcrumb/breadcrumb.component';
import { EditProfileComponent } from './main/edit-profile/edit-profile.component';
import { StatusListComponent } from './main/status-list/status-list.component';
import { AddStatusComponent } from './main/add-status/add-status.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    SideMenuComponent,
    BreadcrumbComponent,
    EditProfileComponent,
    StatusListComponent,
    AddStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
