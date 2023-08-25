import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import { MemberComponent } from './member/member.component';
import { DialogAdduserComponent } from './dialog/dialog-adduser/dialog-adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogEdituserComponent } from './dialog/dialog-edituser/dialog-edituser.component';
import { SucceedComponent } from './snack-bar/succeed/succeed.component';
import { FailComponent } from './snack-bar/fail/fail.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './public/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
