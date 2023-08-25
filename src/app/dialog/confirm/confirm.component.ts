import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MemberModel, MemberService } from 'src/app/member/member.service';
import { FailComponent } from 'src/app/snack-bar/fail/fail.component';
import { SucceedComponent } from 'src/app/snack-bar/succeed/succeed.component';
export interface DialogData {
  text: string;
  textid: string;
}
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  membermodel :MemberModel[]=[];
  empForm:FormGroup;
  getModel :MemberModel={}as MemberModel;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  
  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private memberservice: MemberService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
      this.empForm = this.formBuilder.group({
        emp_Code:null,
        emp_Name:null,
        emp_last_Name:null,
        emp_Phone:null,
        emp_job_Title:null,
        car_Licenseplate:null,
        car_Brand:null,
        car_Model:null,
        car_Color:null,
        cd_Id:null,
        username:null,
        pass:null,
      })
    }

  deleteMember(){

    this.getModel.emp_Code = this.data.text;
    this.getModel.cd_Id = this.data.textid;
    console.log(this.getModel);
    
    this.memberservice.delete(this.getModel).subscribe((data:any) => {
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
