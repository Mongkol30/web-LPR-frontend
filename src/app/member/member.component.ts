import { Component, OnInit } from '@angular/core';
import { MemberModel, MemberService } from './member.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAdduserComponent } from '../dialog/dialog-adduser/dialog-adduser.component';
import { DialogEdituserComponent } from '../dialog/dialog-edituser/dialog-edituser.component';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { SucceedComponent } from '../snack-bar/succeed/succeed.component';
import { FailComponent } from '../snack-bar/fail/fail.component';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit{

  membermodel :MemberModel[]=[];
  displayedColumns: string[] = ['Empolyee code','Name','Lastname','Job title','Phone','Licenseplate', 'Brand', 'Color','Action'];
  text ='';
  empForm:FormGroup;
  getModel :MemberModel={}as MemberModel;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  
  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private memberservice: MemberService,
    private formBuilder: FormBuilder,
    private loginservice:LoginserviceService
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
  
  ngOnInit(): void {
    this.search();
  }

  addMember() {
     this.dialog.open(DialogAdduserComponent);
  }

  editMember(car_licenseplate: string): void{
    this.dialog.open(DialogEdituserComponent,{
      data: car_licenseplate,
    });
  }

  deleteMember(text: string,textid: string): void{
    this.dialog.open(ConfirmComponent,{
      data:{text:text,textid:textid}
    });
  }

  // deleteMember(text: string,textid: string){
  //   this.getModel.emp_Code = text;
  //   this.getModel.cd_Id = textid;
  //   console.log(this.getModel);
    
  //   this.memberservice.delete(this.getModel).subscribe((data:any) => {
  //     if(data){
  //       this.succeedSnackBar();
  //     }
  //     },(err)=>{
  //       console.log(err);
  //       this.failSnackBar();
  //     })
  //   }
  


  search(): void {
    // let js = {'key':this.text}
    this.getModel.emp_Name = this.text
    this.memberservice.search(this.getModel).subscribe((data:any)=>{
      this.membermodel = data;
      console.log(data);
      
    },(err)=>{
      console.log(err);
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

  logout(){
    this.loginservice.logout();
  }

}

