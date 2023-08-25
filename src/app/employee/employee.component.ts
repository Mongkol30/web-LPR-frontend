import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { ReportService, reportModel } from '../report/report.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{

  
  constructor(private loginservice:LoginserviceService,private reportService:EmployeeService){}
  code:any
  session:any;
  name:any;
  text='';
  reportmodel :reportModel []=[];
  reportmodelOut :reportModel []=[];
  getModel :reportModel={}as reportModel;
  displayedColumns = [
    'Licenpalte number',
    'Date',
    'Time',
    'Brand',
    'Model',
    'Color',
 
  ];
  ngOnInit(): void {
    
    let session: any = localStorage.getItem('session')
    if(session){
      session=JSON.parse(session);
    }
    this.session=session;
    this.name = this.session.name
    this.code = this.session.username
    this.searchReport();
    
  }


  logout(){

    this.loginservice.logout();
  }



  searchReport(){

    this.search();
    this.searchOut();
  }

  search(){

    this.getModel.lpNo = this.code;
    this.reportService.search(this.getModel).subscribe((data)=>{
      this.reportmodel = data;

    },(err)=>{
      console.log(err);
    })
  }

  searchOut(){

    this.getModel.lpNo = this.code;
    this.reportService.searchOut(this.getModel).subscribe((data)=>{
      this.reportmodelOut = data;

    },(err)=>{
      console.log(err);
    })
  }

}

