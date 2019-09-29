import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {AuthGuard} from './guards/AuthGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'home',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './components/admin-layout/admin-layout.module#AdminLayoutModule'
    }],
    // canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
