import { NgModule } from '@angular/core';
   import { Routes, RouterModule } from '@angular/router';
   import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

   export const routes: Routes = [
     { path: '', component: LoginComponent },
     { path: '', component: DashboardComponent},
     // Autres routes de votre application
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }