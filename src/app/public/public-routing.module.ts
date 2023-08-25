import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from '../member/member.component';

const routes: Routes = [
  {path: '',component:PublicComponent,children:[{path:'',component:LoginComponent}]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
