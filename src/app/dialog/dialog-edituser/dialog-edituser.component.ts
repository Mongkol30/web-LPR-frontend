import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEdituserService } from './dialog-edituser.service';
import { MemberModel } from 'src/app/member/member.service';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { SucceedComponent } from 'src/app/snack-bar/succeed/succeed.component';
import { FailComponent } from 'src/app/snack-bar/fail/fail.component';

@Component({
  selector: 'app-dialog-edituser',
  templateUrl: './dialog-edituser.component.html',
  styleUrls: ['./dialog-edituser.component.scss']
})
export class DialogEdituserComponent implements OnInit{

  empForm: FormGroup;
  getModel :MemberModel={}as MemberModel;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private dialogedituserService:DialogEdituserService,
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
  ngOnInit(): void {
    this.setDialog();
    
  }

  setDialog(){

    this.getModel.car_Licenseplate = this.data;
    this.dialogedituserService.searchDetail(this.getModel).subscribe(date => {
      this.getModel  = date;
      this.empForm.patchValue(this.getModel);
      
    },(err)=>{
      console.log(err);
    });
    
  }


  edit(): void{

    this.dialogedituserService.edit(this.empForm.value).subscribe((data:any) => {
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
