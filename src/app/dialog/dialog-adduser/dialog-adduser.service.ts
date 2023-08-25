import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberModel } from '../../member/member.service';

@Injectable({
  providedIn: 'root'
})
export class DialogAdduserService {

  constructor(private http: HttpClient) { }

  save(data: MemberModel) {
    return this.http.post<MemberModel>(`http://localhost:8080/member/save`,data);
  }


}
