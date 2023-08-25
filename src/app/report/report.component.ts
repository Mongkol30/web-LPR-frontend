import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReportService, reportModel } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit{
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
    'Name',
    'Last name',
    'Phone',
  ];
  
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  initialValues = {
    start: null, 
    end: null,   
  };


  constructor(private reportService:ReportService) {}

  ngOnInit(): void {
    this.searchReport();
    

  }
  clear(){
    this.range.reset(this.initialValues);
    console.log(this.range);
    
  }

  searchReport(){
    console.log(this.range.value);
    
    this.search();
    this.searchOut();
  }

  search(){
    if (this.range.controls['start'].value != null && this.range.controls['end'].value != null) {
      const startDate = this.range.controls['start'].value;
      const endDate = this.range.controls['end'].value;
      this.getModel.startDate = startDate.toLocaleDateString();
      this.getModel.endDate = endDate.toLocaleDateString();
    }
    this.getModel.lpNo = this.text;
    this.reportService.search(this.getModel).subscribe((data)=>{
      this.reportmodel = data;

    },(err)=>{
      console.log(err);
    })
  }

  searchOut(){
    if (this.range.controls['start'].value != null && this.range.controls['end'].value != null) {
      const startDate = this.range.controls['start'].value;
      const endDate = this.range.controls['end'].value;
      this.getModel.startDate = startDate.toLocaleDateString();
      this.getModel.endDate = endDate.toLocaleDateString();
    }
    this.getModel.lpNo = this.text;
    this.reportService.searchOut(this.getModel).subscribe((data)=>{
      this.reportmodelOut = data;

    },(err)=>{
      console.log(err);
    })
  }
  

}



