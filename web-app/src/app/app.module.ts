import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdToolbarModule, MdButtonModule, MdInputModule, MdSnackBarModule, MdTableModule, MdIconModule, MdListModule } from "@angular/material";

import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component'

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpModule, HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MdToolbarModule, MdButtonModule, MdInputModule, MdSnackBarModule, MdTableModule, MdIconModule, MdListModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
