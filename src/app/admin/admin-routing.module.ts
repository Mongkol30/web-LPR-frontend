import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { MemberComponent } from '../member/member.component';

import { LprComponent } from '../lpr/lpr.component';
import { ReportComponent } from '../report/report.component';


const routes: Routes = [
  { path: '', component: AdminComponent,
    children :[
      
      {path:'lpr',component:LprComponent},
      {path:'member',component:MemberComponent},
      {path:'report',component:ReportComponent},
    ]
  },


  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
