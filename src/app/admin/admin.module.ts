import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MaterialModule } from '../material/material.module';
import { MemberComponent } from '../member/member.component';
import { DialogAdduserComponent } from '../dialog/dialog-adduser/dialog-adduser.component';
import { SucceedComponent } from '../snack-bar/succeed/succeed.component';
import { FailComponent } from '../snack-bar/fail/fail.component';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';
import { DialogEdituserComponent } from '../dialog/dialog-edituser/dialog-edituser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LprComponent } from '../lpr/lpr.component';
import { ReportComponent } from '../report/report.component';




@NgModule({
  declarations: [
    AdminComponent,
    LprComponent,
    MemberComponent,
    DialogAdduserComponent,
    DialogEdituserComponent,
    SucceedComponent,
    FailComponent,
    ConfirmComponent,
    ReportComponent,


  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
