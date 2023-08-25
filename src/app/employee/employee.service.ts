import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reportModel } from '../report/report.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private http: HttpClient) { }


  search(model: reportModel) {
    return this.http.post<any>(`http://localhost:8080/employee/searchReport`, model);

  }
  searchOut(model: reportModel) {
    return this.http.post<any>(`http://localhost:8080/employee/searchReportOut`, model);

  }
}
