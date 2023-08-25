import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface MemberModel {
  cd_Id:string;
  emp_Code: string;
  emp_Name: string;
  emp_last_Name: string;
  emp_Phone: string;
  emp_job_Title: string;
  car_Licenseplate: string;
  car_Brand:string;
  car_Color:string;
  username:string;
  pass:string;
}
@Injectable({
  providedIn: 'root'
})


export class MemberService {

  constructor(private http: HttpClient) { }
  
  search(data: MemberModel) {
    return this.http.post<MemberModel>(`http://localhost:8080/member/searchEmp`,data)
  }

  delete(model : MemberModel){
    return this.http.post<MemberModel>(`http://localhost:8080/member/delete`,model)
  }

}
