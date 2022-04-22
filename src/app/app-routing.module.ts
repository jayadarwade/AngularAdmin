import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDasashboardComponent } from './admin-dasashboard/admin-dasashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "",component : LoginComponent} ,

  {path: "admin",component : AdminDasashboardComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
