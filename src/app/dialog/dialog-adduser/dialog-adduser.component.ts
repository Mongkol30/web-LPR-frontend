import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogAdduserService } from './dialog-adduser.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MemberModel } from '../../member/member.service';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { SucceedComponent } from 'src/app/snack-bar/succeed/succeed.component';
import { FailComponent } from 'src/app/snack-bar/fail/fail.component';



@Component({
  selector: 'app-dialog-adduser',
  templateUrl: './dialog-adduser.component.html',
  styleUrls: ['./dialog-adduser.component.scss']
})
export class DialogAdduserComponent {

  empForm: FormGroup;
  getModel :MemberModel={}as MemberModel;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  
  
  constructor(
    private formBuilder: FormBuilder,
    private dialogadduserService:DialogAdduserService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
    this.empForm = this.formBuilder.group({
      emp_Code: null,
      emp_Name: null,
      emp_last_Name: null,
      emp_Phone: null,
      emp_job_Title: null,
      car_Licenseplate: null,
      car_Brand: null,
      car_Model: null,
      car_Color: null,
      cd_Id: null,
      username: null,
      pass: null,
    })
  }

  save(): void{

    this.dialogadduserService.save(this.empForm.value).subscribe((data:any) => {
      if(data){
        this.succeedSnackBar();
      }
    },(err)=>{
      console.log(err);
      this.failSnackBar();
    })
  }

  
  succeedSnackBar() {
    this._snackBar.openFromComponent(SucceedComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition ,
    });
    setTimeout(function(){
      window.location.reload();
   }, 1000);
    
  }

  failSnackBar() {
    this._snackBar.openFromComponent(FailComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition ,
    });
    
    
  }


}
