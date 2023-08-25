import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface reportModel {
  lpNo: string,
  lpDate: string,
  lpTime: string,
  startDate: string,
  endDate: string,
  emp_Code: string,
  emp_Name: string,
  emp_last_Name: string,
  emp_Phone: string,
  car_Brand: string,
  car_Model: string,
  car_Color: string,
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }


  search(model: reportModel) {
    return this.http.post<any>(`http://localhost:8080/report/searchReport`, model);

  }
  searchOut(model: reportModel) {
    return this.http.post<any>(`http://localhost:8080/report/searchReportOut`, model);

  }
}
