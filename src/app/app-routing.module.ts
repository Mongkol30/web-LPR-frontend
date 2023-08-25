import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';



import { LoginComponent } from './public/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '',loadChildren:()=>import('./public/public.module').then((m)=>m.PublicModule)},
 
  { path: 'admin',loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule),canActivate:[authGuard]},
  { path: 'user',loadChildren:()=>import('./employee/employee.module').then((m)=>m.EmployeeModule),canActivate:[authGuard]},
 
  { path:'login',component:LoginComponent,}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
